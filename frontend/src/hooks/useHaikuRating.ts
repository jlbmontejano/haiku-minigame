import { useAppContext } from "@/context/app-context";
import { useRateHaiku } from "@/lib/react-query/haikuQueries";
import UserInputSchema from "@/lib/zod/UserInputSchema";
import type { Haiku } from "@/types";
import { useState } from "react";
import { toast } from "sonner";

export const useHaikuRating = () => {
    const [isInputValid, setIsInputValid] = useState<boolean>(false);
    const { userInput, setRating, setIsRated } = useAppContext();
    const { mutateAsync: rateHaiku, isPending } = useRateHaiku();

    const validateInput = () => {
        const validation = UserInputSchema.safeParse(userInput);
        console.log(validation.success);
        setIsInputValid(validation.success);
    };

    const handleRateHaiku = async (haiku: Haiku) => {
        if (!haiku) {
            toast("Error finding haiku.");
            return;
        }

        validateInput();

        if (!isInputValid) {
            toast("Only letters and common punctuation allowed.");
            return;
        }

        const reqBody = {
            text: haiku.text,
            topic: haiku.topic,
            userInput,
        };

        try {
            const rating = await rateHaiku(reqBody);
            setRating(rating);
            setIsRated(true);
            toast.success("Haiku rated successfully!");
        } catch (error) {
            toast("Failed to rate haiku. Please try again.");
            console.error(error);
        }
    };

    return { handleRateHaiku, isPending };
};
