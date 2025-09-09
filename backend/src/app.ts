import express from "express";
import { rateLimit } from "express-rate-limit";
import errorHandler from "./middleware/errorHandler";
import haikuRoutes from "./routes/haiku.route";
import cors from "cors";

const app = express();

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window`
	standardHeaders: true,
	legacyHeaders: false,
});

app.use(express.json());
app.use(cors());
app.use(limiter);

app.use("/api", haikuRoutes);

app.use(errorHandler);

export default app;
