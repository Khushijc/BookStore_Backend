<<<<<<< HEAD
import express from "express";
import { getBookInsights } from "../controller/ai.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
const router = express.Router();

router.get("/:bookId", protectRoute, getBookInsights);

=======
import express from "express";
import { getBookInsights } from "../controller/ai.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
const router = express.Router();

router.get("/:bookId", protectRoute, getBookInsights);

>>>>>>> 266eacda04f6dcbe394253cfe4fb903f9a389e9c
export default router;