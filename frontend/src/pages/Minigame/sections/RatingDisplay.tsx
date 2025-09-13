import { useAppContext } from "@/context/app-context";

const RatingDisplay = () => {
    const { rating } = useAppContext();

    if (!rating) {
        return (
            <div className="flex flex-col gap-4 text-center">
                <p className="text-red-500">Unable to display rating</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-4 text-center">
            <p className="text-4xl font-semibold">{rating.grade}/10</p>
            <p className="text-sm">
                <span className="font-semibold">AI comment: </span>
                {rating.comment}
            </p>
        </div>
    );
};

export default RatingDisplay;
