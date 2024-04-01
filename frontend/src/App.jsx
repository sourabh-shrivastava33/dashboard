import Header from "./components/Header";
import React from "react";

import AppBar from "@mui/material/AppBar"; // AppBar for header (optional)
import { Box, Container, Divider } from "@mui/material";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <Dashboard />
    </Box>
  );
}

export default App;
