import RefetchButton from "@/components/RefetchButton";
import { Button } from "@/components/ui/button";
import { useAppContext } from "@/context/app-context";

type OptionsProps = {
    handleRateHaiku: () => Promise<void>;
};

const Options = ({ handleRateHaiku }: OptionsProps) => {
    const { userInput } = useAppContext();

    return (
        <div className="flex items-center justify-center gap-2 lg:gap-6">
            <RefetchButton />
            <Button
                type="submit"
                onClick={handleRateHaiku}
                disabled={!userInput}
            >
                Rate my haiku
            </Button>
        </div>
    );
};

export default Options;
