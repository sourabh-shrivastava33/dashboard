import { SalesProfitsModel } from "../model/analyticsModel.js";
import { sortByDate } from "../utils/sortByDate.js";
export const AllSalesProfitsData = async (req, res) => {
  const { filter } = req.query;
  const data = await SalesProfitsModel.find({});

  sortByDate(data);
  const dataToSend = filter === "week" ? data.slice(-7) : data;
  res.status(200).json(dataToSend);
};
