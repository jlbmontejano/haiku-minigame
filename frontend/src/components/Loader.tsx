import { BounceLoader } from "react-spinners";

type LoaderProps = {
    text?: string;
};

const Loader = ({ text = "Loading..." }: LoaderProps) => {
    return (
        <section className="width-control items-center" aria-label={text}>
            <BounceLoader size="6rem" color="#828B81" />
            <h1 className="subtitle">{text}</h1>
        </section>
    );
};

export default Loader;
