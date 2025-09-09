import { useHaikuContext } from "@/context/haiku-context";

const SudokuDisplay = () => {
    const { haiku, userInput } = useHaikuContext();

    if (!haiku) return <p>Error!</p>;

    const formatLine = (text: string, line: number) => {
        if (haiku.missingLine === line) {
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
            {haiku.text.map((text, idx) => formatLine(text, idx))}
        </div>
    );
};

export default SudokuDisplay;
