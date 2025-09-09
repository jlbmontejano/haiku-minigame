import { Router } from "express";
import { getHaiku, rateHaiku } from "../controllers/haiku.controller";

const router = Router();

router.get("/", getHaiku);
router.post("/", rateHaiku);

export default router;
