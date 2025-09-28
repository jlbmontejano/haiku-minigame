import { Button } from "@/components/ui/button";
import { useAppContext } from "@/context/app-context";
import { BiSolidError } from "react-icons/bi";

const Error = () => {
    const { handlePageChange } = useAppContext();
    return (
        <section className="width-control items-center">
            <div className="flex flex-col items-center">
                <div className="flex items-center gap-2">
                    <BiSolidError className="text-lg" aria-hidden="true" />
                    <h1 className="subtitle">Error</h1>
                </div>
                <p>Something unexpected happened.</p>
            </div>
            <Button onClick={() => handlePageChange("welcome")}>Home</Button>
        </section>
    );
};

export default Error;
