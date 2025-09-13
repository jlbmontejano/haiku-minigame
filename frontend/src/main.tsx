import App from "@/App.tsx";
import { AppProvider } from "@/context/app-context";
import { ThemeProvider } from "@/context/theme-provider.tsx";
import "@/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Analytics } from "@vercel/analytics/next";
import { createRoot } from "react-dom/client";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
    <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <AppProvider>
                <Analytics />
                <App />
            </AppProvider>
        </ThemeProvider>
    </QueryClientProvider>,
);
