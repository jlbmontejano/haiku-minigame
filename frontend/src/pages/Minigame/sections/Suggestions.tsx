import { Button } from "@/components/ui/button";
import { useAppContext } from "@/context/app-context";

type SuggestionsProps = {
    suggestions: string[];
    topic: string;
};

const Suggestions = ({ suggestions, topic }: SuggestionsProps) => {
    const { userInput, setUserInput } = useAppContext();

    const handleSuggestionClick = (suggestion: string) => {
        setUserInput(suggestion);
    };

    return (
        <div className="flex flex-col gap-2 text-center text-sm">
            <p className="pb-4">
                <span className="font-semibold">Topic: </span>
                <span className="italic">{topic}</span>
            </p>
            <p>Stuck? Don't worry, here are a few suggestions:</p>
            <div className="flex flex-col gap-2 xl:flex-row">
                {suggestions.map((suggestion) => (
                    <Button
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="w-full max-w-[80%] self-center xl:w-1/3"
                        variant={
                            userInput === suggestion ? "default" : "outline"
                        }
                        size="sm"
                        key={suggestion}
                    >
                        {suggestion}
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default Suggestions;
