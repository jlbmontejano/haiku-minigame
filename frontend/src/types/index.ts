export type CurrentPage = "welcome" | "minigame" | "rating";

export type Haiku = {
    text: string[];
    suggestions: string[];
    topic: string;
    missingLine: number;
};

export type Rating = {
    rating: number;
    comment: string;
};
