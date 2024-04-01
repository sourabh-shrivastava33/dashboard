import express from "express";
import { ActivityModel } from "../model/analyticsModel.js";
import { activityController } from "../controller/activityAnalytics.js";
const router = express.Router();
router.get("/", activityController);
export default router;
