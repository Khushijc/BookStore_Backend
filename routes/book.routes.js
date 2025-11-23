<<<<<<< HEAD
import express from "express";
import { addBook, getAllBooks, getBookById } from "../controller/book.controller.js";
import {upload} from "../middleware/upload.middleware.js"
import { protectRoute, isAdmin } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/addbook",protectRoute,isAdmin,upload.single("image"),addBook)
router.get("/", getAllBooks)
router.get("/:id", getBookById)

=======
import express from "express";
import { addBook, getAllBooks, getBookById } from "../controller/book.controller.js";
import {upload} from "../middleware/upload.middleware.js"
import { protectRoute, isAdmin } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/addbook",protectRoute,isAdmin,upload.single("image"),addBook)
router.get("/", getAllBooks)
router.get("/:id", getBookById)

>>>>>>> 266eacda04f6dcbe394253cfe4fb903f9a389e9c
export default router;