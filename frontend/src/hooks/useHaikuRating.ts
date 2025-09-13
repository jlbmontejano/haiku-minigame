import { useAppContext } from "@/context/app-context";
import { useRateHaiku } from "@/lib/react-query/haikuQueries";
import type { Haiku } from "@/types";
import { toast } from "sonner";

export const useHaikuRating = () => {
    const { userInput, setRating, setIsRated } = useAppContext();
    const { mutateAsync: rateHaiku, isPending } = useRateHaiku();

    const handleRateHaiku = async (haiku: Haiku) => {
        if (!haiku) {
            toast("Error finding haiku.");
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
