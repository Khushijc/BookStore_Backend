<<<<<<< HEAD
import express from "express";
import {signup , login} from "../controller/user.controller.js"

const router = express.Router();

router.post("/signup", signup)
router.post("/login", login)

=======
import express from "express";
import {signup , login} from "../controller/user.controller.js"

const router = express.Router();

router.post("/signup", signup)
router.post("/login", login)

>>>>>>> 266eacda04f6dcbe394253cfe4fb903f9a389e9c
export default router;