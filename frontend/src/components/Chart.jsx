import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
} from "chart.js";
import { Line, Pie } from "react-chartjs-2";
import { formateDate } from "../utils/formatDate";
ChartJS.register(
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement
);

export const LineChart = ({ salesData }) => {
  console.log(salesData);
  const labels = salesData.map((data) => formateDate(data.date));
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Sales Profits Overview",
      },
      tooltip: {
        enabled: true, // Enable tooltips
        mode: "index", // Display tooltips for all data points at the same index
        intersect: false, // Allow tooltips to intersect with other elements
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: "Sales",
        data: salesData.map((data) => data.sales),
        borderColor: "rgba(107,70,193,0.5)",
        backgroundColor: "rgb(107, 70, 193)",
      },
    ],
  };
  return <Line options={options} data={data} />;
};
export const PieChart = ({ activityData }) => {
  const totalUser = activityData.totalUser;
  const affiliateUserPercent = activityData.affiliateUserPercent;
  const newUserPercent = activityData.newUserPercent;
  const data = {
    labels: ["New User", "Affiliate User"],
    datasets: [
      {
        label: "User Distribution",
        data: [newUserPercent, affiliateUserPercent],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)", // Red for New User
          "rgba(54, 162, 235, 0.6)", // Blue for Affiliate User
        ],
        borderWidth: 1,
      },
    ],
  };
  return <Pie data={data} options={{ responsive: true }} />;
};

const Chart = () => {
  return null;
};

export default Chart;
