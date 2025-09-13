import { useAppContext } from "@/context/app-context";
import { useGetHaiku } from "@/lib/react-query/haikuQueries";
import { Button } from "./ui/button";

const RefetchButton = () => {
    const { resetGameState } = useAppContext();
    const { refetch } = useGetHaiku();

    const handleRefetch = () => {
        resetGameState();
        refetch();
    };

    return (
        <Button onClick={handleRefetch} className="max-w-[250px] self-center">
            Get a new haiku
        </Button>
    );
};

export default RefetchButton;
