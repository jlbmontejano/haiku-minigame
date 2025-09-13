import { useGetHaiku } from "@/lib/react-query/haikuQueries";

export const useMissingLine = () => {
    const { data: haiku } = useGetHaiku();

    if (!haiku?.text) return { lineNumber: 1, syllables: 5 };

    const missingLineIndex = haiku.text.findIndex((line) => line.includes("_"));
    const syllableCounts = [5, 7, 5];

    return {
        lineNumber: missingLineIndex,
        syllables: syllableCounts[missingLineIndex] || 5,
    };
};
