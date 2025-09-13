import { useAppContext } from "@/context/app-context";
import { BiSolidError } from "react-icons/bi";
import { Button } from "./ui/button";

const Error = () => {
    const { handlePageChange } = useAppContext();
    return (
        <div className="width-control items-center">
            <div className="flex items-center gap-2">
                <BiSolidError />
                <p className="subtitle">Error</p>
            </div>
            <p>Something unexpected happened.</p>
            <Button onClick={() => handlePageChange("welcome")}>Home</Button>
        </div>
    );
};

export default Error;
