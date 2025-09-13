import App from "@/App.tsx";
import { ThemeProvider } from "@/context/theme-provider.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import { AppProvider } from "./context/app-context";
import "./globals.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
    <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <AppProvider>
                <App />
            </AppProvider>
        </ThemeProvider>
    </QueryClientProvider>,
);
