import { Input } from "@/components/ui/input";
import { useHaikuContext } from "@/context/haiku-context";

const UserInput = () => {
    const { haiku, userInput, setUserInput, rateHaiku } = useHaikuContext();

    const handleUpdateEntry = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        setUserInput(e.target.value);
    };

    const handleSubmit = async () => {
        await rateHaiku();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}></form>
            <Input
                value={userInput}
                onChange={handleUpdateEntry}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleSubmit();
                    }
                }}
                placeholder="Write here"
            />
            <p className="pt-1 text-[11px] text-gray-400">
                Your sentence should have {haiku?.missingLine === 1 ? "7" : "5"}{" "}
                syllables
            </p>
        </div>
    );
};

export default UserInput;
