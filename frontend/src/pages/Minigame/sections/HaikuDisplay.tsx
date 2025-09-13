import { useAppContext } from "@/context/app-context";
import { useMissingLine } from "@/hooks/useMissingLine";

type HaikuDisplayProps = {
    wholeText: string[];
};

const HaikuDisplay = ({ wholeText }: HaikuDisplayProps) => {
    const { userInput } = useAppContext();
    const { lineNumber } = useMissingLine();

    const formatLine = (text: string, line: number) => {
        if (line === lineNumber) {
            return (
                <p className="text-sage-green" key={line}>
                    {userInput.length > 0 ? userInput : "________________"}
                </p>
            );
        }

        return <p key={line}>{text}</p>;
    };

    return (
        <div className="haiku-text">
            {wholeText.map((text, idx) => formatLine(text, idx))}
        </div>
    );
};

export default HaikuDisplay;
