import {
  Box,
  Grid,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { LineChart, PieChart } from "./Chart";
import {
  useGetActivityDataQuery,
  useGetSalesQuery,
} from "../slices/analyticsApiSlice";
import styled from "@emotion/styled";
const StyledHeadBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 580px) {
    justify-content: space-around;
    .sales-overview {
      font-size: 1.4rem;
    }
    .total-sales {
      display: none;
    }
    .form-control {
      width: 8rem;
    }
  }
`;
const Dashboard = () => {
  const [filter, setFilter] = useState("week");
  const [oneColumnGrid, setOneColumnGrid] = useState(false);
  const { data: salesApiData, isLoading: salesApiLoading } =
    useGetSalesQuery(filter);
  const { data: activityApiData, isLoading: activityApiLoading } =
    useGetActivityDataQuery();
  const onChange = (e) => {
    setFilter(e.target.value);
  };
  const totalSales = useMemo(() => {
    return salesApiData?.reduce((acc, curr) => {
      return acc + curr.sales;
    }, 0);
  }, [salesApiData]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1048) {
        setOneColumnGrid(true);
      } else if ((window, innerWidth >= 1048)) {
        setOneColumnGrid(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    () => window.removeEventListener("resize", handleResize);
  }, []);

  if (salesApiLoading || activityApiLoading) return null;
  return (
    <Grid
      container
      sx={{
        height: "calc(100vh - 64.6px)",
        maxWidth: "100vw",
        paddingTop: "1rem",
      }}
    >
      <Grid item xs={12} height="50%" width="50%" padding="0 2rem">
        <StyledHeadBox>
          <h2
            style={{ justifyContent: "flex-start" }}
            className="sales-overview"
          >
            Sales Overview
          </h2>
          <p
            style={{ fontSize: "1.2rem", fontWeight: "500" }}
            className="total-sales"
          >
            <span>Total sales:- </span>
            <span>${totalSales}</span>
          </p>
          <Box>
            <FormControl
              sx={{ width: "12rem", height: "3rem" }}
              className="form-control"
            >
              <InputLabel id="demo-simple-select-label">Filter</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={filter}
                onChange={onChange}
                label="Filter"
              >
                <MenuItem value="month">This month</MenuItem>
                <MenuItem value="week">This week</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </StyledHeadBox>
        <Box
          height="100%"
          width="100%"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LineChart salesData={salesApiData} />
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        height="50%"
        sx={{
          display: "flex",
          alignItems: "center",
          paddingTop: "1rem",
          justifyContent: "center",
        }}
      >
        <Box
          maxHeight="90%"
          width="90%"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "@media (max-width:540px)": {
              flexDirection: "column",
              width: "67%",
            },
            // flexDirection: "column",
          }}
        >
          <PieChart activityData={activityApiData} />
          <Box>
            <p
              style={{
                display: "flex",
                gap: "1rem",
                fontWeight: 700,
                fontSize: "1.3rem",
              }}
            >
              <span>New User%</span>
              <span>{activityApiData.newUserPercent}%</span>
            </p>
            <p
              style={{
                display: "flex",
                gap: "1rem",
                fontWeight: 700,
                fontSize: "1.3rem",
              }}
            >
              <span>Affiliate User%</span>
              <span>{activityApiData.affiliateUserPercent}%</span>
            </p>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
