import * as z from "zod";

const INPUT_REGEX = /^[A-Za-z\s.,!?;:'"()-]*$/;

const RateHaikuSchema = z.object({
	haiku: z
		.array(z.string("Invalid input type."))
		.length(3, "Haiku must have exactly 3 lines."),
	topic: z.string().nonempty(),
	userInput: z
		.string()
		.nonempty()
		.regex(INPUT_REGEX, "Invalid characters detected."),
});

export default RateHaikuSchema;
