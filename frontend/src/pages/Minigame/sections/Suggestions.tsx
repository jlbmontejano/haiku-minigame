import { Button } from "@/components/ui/button";
import { useHaikuContext } from "@/context/haiku-context";

const Suggestions = () => {
    const { haiku, setUserInput } = useHaikuContext();

    const handleButton = (suggestion: string) => {
        setUserInput(suggestion);
    };

    if (!haiku) return <p>Error</p>;

    return (
        <div className="flex flex-col gap-2">
            <p className="m-auto text-sm">
                Stuck? Don't worry, here are a few suggestions:
            </p>
            <div className="flex flex-col gap-2">
                {haiku?.suggestions.map((suggestion, idx) => (
                    <Button
                        onClick={() => handleButton(suggestion)}
                        className="md:w-1/3"
                        size="sm"
                        key={idx}
                    >
                        {suggestion}
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default Suggestions;
