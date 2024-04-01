import { apiSlice } from "./apiSlice";
import { SALES_URL, ACTIVITY_URL } from "../utils/baseUrls";
const activityApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSales: builder.query({
      query: (query) => ({
        url: `${SALES_URL}`,
        params: { filter: query },
      }),
    }),
    getActivityData: builder.query({
      query: () => ({
        url: `${ACTIVITY_URL}`,
      }),
    }),
  }),
});
export const { useGetSalesQuery, useGetActivityDataQuery } = activityApiSlice;
