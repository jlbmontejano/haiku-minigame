import { Button } from "@/components/ui/button";
import { useHaikuContext } from "@/context/haiku-context";

const Options = () => {
    const { userInput, isLoading, fetchHaiku, rateHaiku } = useHaikuContext();

    return (
        <div className="flex items-center justify-center gap-2 lg:gap-6">
            <Button onClick={() => fetchHaiku()} disabled={isLoading}>
                Get a new haiku
            </Button>
            <Button
                type="submit"
                onClick={() => rateHaiku()}
                disabled={isLoading || !userInput}
            >
                Rate my haiku
            </Button>
        </div>
    );
};

export default Options;
