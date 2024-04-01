import React, { useState } from "react";
import Drawer from "@mui/material/Drawer"; // Drawer for sidebar
import MenuIcon from "@mui/icons-material/MenuOutlined";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";
import VideoLabelOutlinedIcon from "@mui/icons-material/VideoLabelOutlined";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import styled from "@emotion/styled";
const StyledListItemText = styled(ListItemText)`
  span {
    font-size: 1.4rem;
    color: rgb(113, 119, 132);
  }
`;
const StyledListItemIcon = styled(ListItemIcon)`
  justify-content: center;
  svg {
    width: 1.7rem;
    height: 1.7rem;
    color: rgb(113, 119, 132);
  }
`;
const StyledListButton = styled(ListItemButton)`
  border: "4px solid transparent";
  padding: 0 3rem;
  gap: 1rem;
`;
const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <IconButton onClick={() => setSidebarOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      >
        <Box width="300px">
          <Typography
            noWrap
            variant="h5"
            display="flex"
            alignItems="center"
            gap="1rem"
            fontSize="24px"
            sx={{ padding: "1rem", letterSpacing: "1.4px" }}
            fontWeight="600"
            marginTop="1.3rem"
            justifyContent="center"
            color="rgb(0, 0, 0)"
            fontFamily="Roboto"
          >
            NS Affiliate
          </Typography>
        </Box>
        <Divider />
        <List
          sx={{
            marginTop: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <ListItem disablePadding onClick={() => setSidebarOpen(false)}>
            <StyledListButton
              sx={{
                border: "4px solid transparent",
                "&:hover": { borderLeftColor: "rgb(88, 59, 237)" },
                "&:hover .MuiListItemIcon-root svg, &:hover .MuiListItemText-primary":
                  {
                    color: "rgb(88, 59, 237)",
                  },
              }}
            >
              <StyledListItemIcon>
                <VideoLabelOutlinedIcon />
              </StyledListItemIcon>
              <StyledListItemText primary="Overview" />
            </StyledListButton>
          </ListItem>
          <ListItem
            disablePadding
            onClick={() => setSidebarOpen(false)}
            className="active"
          >
            <StyledListButton
              sx={{
                border: "4px solid transparent",
                borderLeftColor: "rgb(88, 59, 237)",
                bgcolor: "rgb(246, 244, 254)",
                "& .MuiListItemIcon-root svg, & .MuiListItemText-primary": {
                  color: "rgb(88, 59, 237)",
                },
              }}
            >
              <StyledListItemIcon>
                <SpaceDashboardOutlinedIcon />
              </StyledListItemIcon>
              <StyledListItemText primary="Dashbord" />
            </StyledListButton>
          </ListItem>
          <ListItem disablePadding onClick={() => setSidebarOpen(false)}>
            <StyledListButton
              sx={{
                border: "4px solid transparent",
                "&:hover": { borderLeftColor: "rgb(88, 59, 237)" },
                "&:hover .MuiListItemIcon-root svg, &:hover .MuiListItemText-primary":
                  {
                    color: "rgb(88, 59, 237)",
                  },
              }}
            >
              <StyledListItemIcon>
                <InboxIcon />
              </StyledListItemIcon>
              <StyledListItemText primary="Inbox" />
            </StyledListButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
