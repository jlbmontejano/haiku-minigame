import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import ModeToggle from "@/components/ModeToggle";
import { useHaikuContext } from "@/context/haiku-context";
import Minigame from "@/pages/Minigame/Minigame";
import Rating from "@/pages/Rating/Rating";
import Welcome from "@/pages/Welcome/Welcome";
import { useEffect } from "react";

function App() {
    const { currentPage, isLoading, fetchHaiku } = useHaikuContext();

    useEffect(() => {
        fetchHaiku();
    }, []);

    const handleCurrentPage = () => {
        switch (currentPage) {
            case "welcome":
                return <Welcome />;
            case "minigame":
                return isLoading ? <Loader /> : <Minigame />;
            case "rating":
                return <Rating />;
            default:
                return <Welcome />;
        }
    };

    return (
        <main className="main-container">
            <ModeToggle />
            {handleCurrentPage()}
            <Footer />
        </main>
    );
}

export default App;
