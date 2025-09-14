import * as z from "zod";

const INPUT_REGEX = /^[A-Za-z\s.,!?;:'"()-]*$/;

const UserInputSchema = z.string().regex(INPUT_REGEX);

export default UserInputSchema;
