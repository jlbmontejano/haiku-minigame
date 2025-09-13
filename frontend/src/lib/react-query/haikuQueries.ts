import type { Haiku, Rating } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import QUERY_KEYS from "./queryKeys";

export const useGetHaiku = () => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_HAIKU],
        queryFn: async () => {
            const response = await fetch(import.meta.env.VITE_API_URL, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const data: Haiku = await response.json();

            return data;
        },
        refetchOnWindowFocus: false,
        refetchInterval: false,
        staleTime: Infinity,
    });
};

export const useRateHaiku = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (reqBody: {
            text: string[];
            topic: string;
            userInput: string;
        }) => {
            const response = await fetch(import.meta.env.VITE_API_URL, {
                method: "POST",
                body: JSON.stringify(reqBody),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                console.log("Error in response");
                throw new Error("Error in response");
            }

            const data: Rating = await response.json();

            console.log(data);

            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GET_HAIKU] });
        },
    });
};
