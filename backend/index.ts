import { configDotenv } from "dotenv";
import app from "./src/app";

async function main() {
	configDotenv();

	app.listen(process.env.PORT, () => {
		console.log("App listening on port: ", process.env.PORT);
	});
}

main();
