import express from "express";
import { addToCart } from "../controllers/cartController.js";
import { requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

// add product to cart || POST
router.post("/add", requireSignIn, addToCart);

export default router;
