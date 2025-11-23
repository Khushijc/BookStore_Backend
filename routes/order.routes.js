<<<<<<< HEAD
import express from "express";
import { placeOrder,getOrderHistory } from "../controller/order.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
const router = express.Router();

router.post("/placeorder",protectRoute, placeOrder)
router.get("/history",protectRoute, getOrderHistory);

=======
import express from "express";
import { placeOrder,getOrderHistory } from "../controller/order.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
const router = express.Router();

router.post("/placeorder",protectRoute, placeOrder)
router.get("/history",protectRoute, getOrderHistory);

>>>>>>> 266eacda04f6dcbe394253cfe4fb903f9a389e9c
export default router;