import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import { SalesProfitsModel } from "./model/analyticsModel.js";
import { ActivityModel } from "./model/analyticsModel.js";
import activityData from "../frontend/src/data/activityType.json" assert { type: "json" };
import profitSales from "../frontend/src/data/profitSalesData.json" assert { type: "json" };

async function populate() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    await SalesProfitsModel.deleteMany();
    await SalesProfitsModel.insertMany(profitSales);
    console.log("success");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
populate();
