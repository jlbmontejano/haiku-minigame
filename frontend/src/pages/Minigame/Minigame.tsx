import Error from "@/components/Error";
import Loader from "@/components/Loader";
import RefetchButton from "@/components/RefetchButton";
import { useAppContext } from "@/context/app-context";
import { useHaikuRating } from "@/hooks/useHaikuRating";
import { useGetHaiku } from "@/lib/react-query/haikuQueries";
import Options from "./sections/Options";
import RatingDisplay from "./sections/RatingDisplay";
import HaikuDisplay from "./sections/HaikuDisplay";
import Suggestions from "./sections/Suggestions";
import UserInput from "./sections/UserInput";

const Minigame = () => {
    const { isRated } = useAppContext();
    const { data: haiku, error, isFetching } = useGetHaiku();
    const { handleRateHaiku, isPending } = useHaikuRating();

    if (isFetching) return <Loader text="Getting your haiku..." />;
    if (isPending) return <Loader text="AI is rating your haiku..." />;
    if (error || !haiku) return <Error />;

    const { text, suggestions, topic } = haiku;

    return (
        <section className="width-control">
            <HaikuDisplay wholeText={text} />
            {isRated ? (
                <>
                    <RatingDisplay />
                    <RefetchButton />
                </>
            ) : (
                <>
                    <UserInput handleRateHaiku={() => handleRateHaiku(haiku)} />
                    <Suggestions topic={topic} suggestions={suggestions} />
                    <Options handleRateHaiku={() => handleRateHaiku(haiku)} />
                </>
            )}
        </section>
    );
};

export default Minigame;
