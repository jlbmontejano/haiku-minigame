import App from "@/App.tsx";
import { ThemeProvider } from "@/context/theme-provider.tsx";
import { createRoot } from "react-dom/client";
import "./globals.css";
import { HaikuProvider } from "./context/haiku-context";

createRoot(document.getElementById("root")!).render(
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <HaikuProvider>
            <App />
        </HaikuProvider>
    </ThemeProvider>,
);
