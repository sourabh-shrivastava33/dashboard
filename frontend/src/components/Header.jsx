import React from "react";
import {
  AppBar,
  Toolbar,
  TextField,
  Typography,
  Box,
  InputAdornment,
  Button,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItem,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import Sidebar from "./Sidebar";
const Header = () => {
  return (
    <AppBar sx={{ boxShadow: "none", position: "relative" }}>
      <Toolbar
        sx={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-between",
          flexShrink: 1,
          boxShadow: "none",
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          gap="1.5rem"
          sx={{ width: "40%" }}
        >
          <Sidebar />
          <TextField
            label=""
            variant="outlined"
            sx={{
              width: "100%",
              "@media (max-width:540px)": {
                display: "none",
              },
            }}
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Search sx={{ cursor: "pointer" }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box display="flex" alignItems="center" gap="1.5rem">
          <List>
            <ListItem sx={{ padding: 0 }}>
              <ListItemButton>
                <Button size="small" variant="contained">
                  Share
                </Button>
              </ListItemButton>
            </ListItem>
          </List>

          <Box
            display="flex"
            alignItems="center"
            gap="1rem"
            padding="0 1rem"
            sx={{
              "@media (max-width:540px)": {
                display: "none",
              },
            }}
          >
            <List sx={{ display: "flex" }}>
              <ListItem sx={{ padding: 0 }}>
                <ListItemIcon sx={{ justifyContent: "center" }}>
                  <ModeCommentOutlinedIcon
                    fontSize="medium"
                    sx={{ color: "rgb(185,185,185)", cursor: "pointer" }}
                  />
                </ListItemIcon>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <ListItemIcon sx={{ justifyContent: "center" }}>
                  <NotificationsNoneOutlinedIcon
                    fontSize="medium"
                    sx={{ color: "rgb(185,185,185)", cursor: "pointer" }}
                  />
                </ListItemIcon>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <ListItemIcon
                  sx={{
                    justifyContent: "center",
                    transition: "all",
                    "&:hover svg": { color: "red" },
                  }}
                >
                  <AppsOutlinedIcon
                    fontSize="medium"
                    sx={{ color: "rgb(185,185,185)", cursor: "pointer" }}
                  />
                </ListItemIcon>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Toolbar>
      <Divider variant="middle" />
    </AppBar>
  );
};

export default Header;
