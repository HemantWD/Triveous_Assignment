import express from "express";
import {
  addToCart,
  removeFromCart,
  updateQuantity,
  viewCart,
} from "../controllers/cartController.js";
import { requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

// add product to cart || POST
router.post("/add", requireSignIn, addToCart);

// get users cart
router.get("/:userId", requireSignIn, viewCart);

// update cart
router.put("/update/:cartItemId", requireSignIn, updateQuantity);

// remove item from cart
router.delete('/remove/"cartItemId', requireSignIn, removeFromCart);

export default router;
