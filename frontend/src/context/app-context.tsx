import type { CurrentPage, Rating } from "@/types";
import { createContext, useContext, useState } from "react";

type AppContext = {
    currentPage: CurrentPage;
    handlePageChange: (page: CurrentPage) => void;
    userInput: string;
    setUserInput: React.Dispatch<React.SetStateAction<string>>;
    isRated: boolean;
    setIsRated: React.Dispatch<React.SetStateAction<boolean>>;
    rating: Rating | null;
    setRating: React.Dispatch<React.SetStateAction<Rating | null>>;
    resetGameState: () => void;
};

const AppContext = createContext<AppContext | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentPage, setCurrentPage] = useState<CurrentPage>("welcome");
    const [userInput, setUserInput] = useState<string>("");
    const [isRated, setIsRated] = useState<boolean>(false);
    const [rating, setRating] = useState<Rating | null>(null);

    const handlePageChange = (page: CurrentPage) => {
        setCurrentPage(page);

        if (page === "welcome") {
            resetGameState();
        }
    };

    const resetGameState = () => {
        setUserInput("");
        setIsRated(false);
        setRating(null);
    };

    const value = {
        currentPage,
        handlePageChange,
        userInput,
        setUserInput,
        isRated,
        setIsRated,
        rating,
        setRating,
        resetGameState,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
    const context = useContext(AppContext);

    if (context === undefined)
        throw new Error("useAppContext must be used within a AppProvider.");

    return context;
};
