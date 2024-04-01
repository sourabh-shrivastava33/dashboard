import { ActivityModel } from "../model/analyticsModel.js";
import { sortByDate } from "../utils/sortByDate.js";
export const activityController = async (req, res) => {
  const activity = await ActivityModel.find({});
  sortByDate(activity);
  const totalUser = activity.reduce((acc, curr) => {
    return acc + curr.affiliateUser + curr.newUser;
  }, 0);
  const affiliateUserPercent = Math.floor(
    (activity.reduce((acc, curr) => acc + curr.affiliateUser, 0) / totalUser) *
      100
  );
  const newUserPercent = 100 - affiliateUserPercent;

  res.status(200).json({ totalUser, newUserPercent, affiliateUserPercent });
};
