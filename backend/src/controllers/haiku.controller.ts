import { GoogleGenAI } from "@google/genai";
import { NextFunction, Request, Response } from "express";

const ai = new GoogleGenAI({
	apiKey: "AIzaSyAnpO8xgsMV2MRVZIAe41B2qm35nv4PB8g",
});

export const getHaiku = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const missingLine = Math.floor(Math.random() * 3);

	const response = await ai.models.generateContent({
		model: "gemini-2.5-flash",
		contents: `You are a haiku master. Please give me random 1 haiku with it's topic. The line number ${missingLine} (0-based indexing, where 0 = first line, 1 = second line, 2 = third line) must be missing. Also give me 3 suggestions to fill this missing line. Respond only with a JSON object. The object must contain three keys: 'text', 'suggestions', and 'topic'. The 'text' key should have an array of strings for the haiku lines, with the missing line represented by a string of underscores. The 'suggestions' key should have an array of three strings for the suggested lines. The 'topic' key should have a string for the haiku's subject.`,
	});

	if (!response.text) {
		throw new Error("Error creating haiku.");
	}

	console.log(response.text, missingLine);

	const haiku = formatResponse(response.text);

	return res
		.status(200)
		.json({ success: true, data: { ...haiku, missingLine } });
};

export const rateHaiku = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	console.log(req.body);
	const { haiku, missingLine, topic, userInput } = req.body;

	const response = await ai.models.generateContent({
		model: "gemini-2.5-flash",
		contents: `You are a haiku master. Here is an incomplete haiku you gave me on the topic of ${topic}: ${haiku}. This haiku was missing the line ${missingLine}, which I decided to complete with this phrase ${userInput}. Rate how I did on a scale from 1 to 10 and give a one-sentence comment on how I could improve. Respond only with a JSON object containing a "rating" (number) and a "comment" (string) key.`,
	});

	if (!response.text) {
		throw new Error("Error creating rating.");
	}

	console.log(response.text, typeof response.text);

	const rating = formatResponse(response.text);

	return res.status(200).json({ success: true, data: rating });
};

const formatResponse = (text: string) => {
	const cleanResponse = text.replace(/```json\n|```/g, "").trim();

	return JSON.parse(cleanResponse);
};
