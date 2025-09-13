export type CurrentPage = "welcome" | "minigame";

export type Haiku = {
    text: string[];
    suggestions: string[];
    topic: string;
};

export type Rating = {
    grade: number;
    comment: string;
};
