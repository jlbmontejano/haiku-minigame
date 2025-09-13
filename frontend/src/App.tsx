import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import Header from "./components/Header";
import { usePageRouter } from "./hooks/usePageRouter";

function App() {
    const getCurrentPage = usePageRouter();

    return (
        <>
            <main className="main-container">
                <Header />
                {getCurrentPage()}
                <Footer />
            </main>
            <Toaster />
        </>
    );
}

export default App;
