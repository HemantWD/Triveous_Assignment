import express from "express";
import { getCategories } from "../controllers/categoryController.js";

const router = express.Router();

// GET list of categories
router.get("/list", getCategories);

export default router;
