import mongoose from "mongoose";
const SalesProfitsSchema = new mongoose.Schema({
  date: String,
  profits: Number,
  sales: Number,
});
const ActivityAnalyticsSchema = new mongoose.Schema({
  date: String,
  newUser: Number,
  affiliateUser: Number,
});
export const SalesProfitsModel = mongoose.model(
  "sales&profits",
  SalesProfitsSchema
);

export const ActivityModel = mongoose.model(
  "activity",
  ActivityAnalyticsSchema
);
