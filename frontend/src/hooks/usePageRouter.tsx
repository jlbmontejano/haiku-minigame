import { useAppContext } from "@/context/app-context";
import Minigame from "@/pages/Minigame/Minigame";
import Welcome from "@/pages/Welcome";

export const usePageRouter = () => {
    const { currentPage } = useAppContext();

    const getCurrentPage = () => {
        switch (currentPage) {
            case "welcome":
                return <Welcome />;
            case "minigame":
                return <Minigame />;
            default:
                return <Welcome />;
        }
    };

    return getCurrentPage;
};
