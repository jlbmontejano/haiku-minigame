import type { CurrentPage, Haiku, Rating } from "@/types";
import { createContext, useContext, useState } from "react";

type HaikuContext = {
    currentPage: CurrentPage;
    setCurrentPage: React.Dispatch<React.SetStateAction<CurrentPage>>;
    haiku: Haiku | null;
    setHaiku: React.Dispatch<React.SetStateAction<Haiku | null>>;
    userInput: string;
    setUserInput: React.Dispatch<React.SetStateAction<string>>;
    rating: Rating | null;
    setRating: React.Dispatch<React.SetStateAction<Rating | null>>;
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    fetchHaiku: () => Promise<void>;
    rateHaiku: () => Promise<void>;
};

const HaikuContext = createContext<HaikuContext | undefined>(undefined);

export const HaikuProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentPage, setCurrentPage] = useState<CurrentPage>("welcome");
    const [haiku, setHaiku] = useState<Haiku | null>(null);
    const [userInput, setUserInput] = useState<string>("");
    const [rating, setRating] = useState<Rating | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchHaiku = async () => {
        try {
            setIsLoading(true);

            const response = await fetch("http://localhost:3000/api", {
                method: "GET",
            });

            const { data } = await response.json();

            console.log(data);
            setHaiku(data);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    const rateHaiku = async () => {
        try {
            if (!userInput) return;

            setIsLoading(true);

            const response = await fetch("http://localhost:3000/api", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    haiku: haiku?.text,
                    missingLine: haiku?.missingLine,
                    topic: haiku?.topic,
                    userInput,
                }),
            });

            const { data } = await response.json();

            console.log(data);
            setRating(data);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    const value = {
        currentPage,
        setCurrentPage,
        haiku,
        setHaiku,
        userInput,
        setUserInput,
        rating,
        setRating,
        isLoading,
        setIsLoading,
        fetchHaiku,
        rateHaiku,
    };

    return (
        <HaikuContext.Provider value={value}>{children}</HaikuContext.Provider>
    );
};

export const useHaikuContext = () => {
    const context = useContext(HaikuContext);

    if (context === undefined)
        throw new Error("useHaikuContext must be used within a HaikuProvider");

    return context;
};
