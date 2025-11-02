import express from "express";
import { addIncome, getIncomes, getSummary } from "../controllers/incomeController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, addIncome).get(protect, getIncomes);
router.route("/summary").get(protect, getSummary);

export default router;
