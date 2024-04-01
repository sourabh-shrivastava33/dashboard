import express from "express";
import { AllSalesProfitsData } from "../controller/sales&profits.js";
const router = express.Router();
router.get("/", AllSalesProfitsData);
export default router;
