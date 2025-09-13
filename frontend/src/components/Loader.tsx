import { BounceLoader } from "react-spinners";

type LoaderProps = {
    text?: string;
};

const Loader = ({ text = "Loading..." }: LoaderProps) => {
    return (
        <div className="width-control items-center" aria-label={text}>
            <BounceLoader size="6rem" color="#828B81" />
            <p className="subtitle">{text}</p>
        </div>
    );
};

export default Loader;
