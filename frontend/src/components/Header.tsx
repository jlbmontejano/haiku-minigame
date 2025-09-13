import { useAppContext } from "@/context/app-context";
import ModeToggle from "./ModeToggle";
import { Button } from "./ui/button";

const Header = () => {
    const { currentPage, handlePageChange } = useAppContext();

    return (
        <div className="flex w-full">
            {currentPage === "minigame" && (
                <Button onClick={() => handlePageChange("welcome")}>
                    Back
                </Button>
            )}
            <ModeToggle />
        </div>
    );
};

export default Header;
