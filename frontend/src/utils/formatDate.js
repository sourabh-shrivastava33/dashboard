import { parse, format } from "date-fns";

export const formateDate = (str) => {
  const date = parse(str, "MM/dd/yyyy", new Date());
  const formattedDate = format(date, "MM/dd/yyyy");
  return format(date, "dd");
};
