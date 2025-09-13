import { Input } from "@/components/ui/input";
import { useAppContext } from "@/context/app-context";
import { useMissingLine } from "@/hooks/useMissingLine";

type UserInputProps = {
    handleRateHaiku: () => void;
};

const UserInput = ({ handleRateHaiku }: UserInputProps) => {
    const { userInput, setUserInput } = useAppContext();
    const { syllables } = useMissingLine();

    const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && userInput.trim()) {
            handleRateHaiku();
        }
    };

    return (
        <div className="w-full max-w-[80%] self-center xl:max-w-[100%]">
            <Input
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Write here"
            />
            <p className="pt-1 text-[11px] text-gray-400">
                Your sentence should have {syllables} syllables
            </p>
        </div>
    );
};

export default UserInput;
