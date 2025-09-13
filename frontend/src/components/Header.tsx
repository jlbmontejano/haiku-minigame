import { Button } from "@/components//ui/button";
import ModeToggle from "@/components/ModeToggle";
import { useAppContext } from "@/context/app-context";

const Header = () => {
    const { currentPage, handlePageChange } = useAppContext();

    return (
        <div className="flex w-full">
            {currentPage === "minigame" && (
                <Button onClick={() => handlePageChange("welcome")}>
                    Home
                </Button>
            )}
            <ModeToggle />
        </div>
    );
};

export default Header;
