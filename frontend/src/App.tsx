import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";
import { usePageRouter } from "@/hooks/usePageRouter";

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
