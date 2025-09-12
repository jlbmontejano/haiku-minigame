import { configDotenv } from "dotenv";
configDotenv();

import app from "./src/app";

async function main() {
	if (!process.env.GEMINI_API_KEY) {
		throw new Error("API Key missing.");
	}

	app.listen(process.env.PORT, () => {
		console.log("App listening on port: ", process.env.PORT);
	});
}

main();
