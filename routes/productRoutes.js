import express from "express";
import {
  getByProductId,
  productByCategory,
} from "../controllers/productController.js";

const router = express.Router();

// List of Products by categoryId || GET
router.get("/category/:categoryId", productByCategory);

// Get products by product Id

router.get("/:productId", getByProductId);

export default router;
