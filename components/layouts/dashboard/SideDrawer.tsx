/* eslint-disable @next/next/no-img-element */
import React from "react";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { mainListItems } from "./MenuListItems";
import { Box, styled } from "@mui/material";
import { drawerWidth } from "../../../utils/constants";

interface SideDrawerProps {
  open: boolean;
  toggleDrawer: () => void;
}

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    backgroundColor: theme.palette.secondary.main,
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
  "& .MuiListItemText":{
    color:theme.palette.common.white
  }
}));

const SideDrawer = ({ open, toggleDrawer }: SideDrawerProps) => {
  return (
    <Drawer variant="permanent" open={open}>
      <Toolbar
        sx={(theme) => ({
          backgroundColor:theme.palette.common.white,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: [1],
        })}
      >
        <Box>
          <img
            height={50}
            width={150}
            alt="tenant_logo"
            src="/logos/SunPharma.png"
          />
        </Box>
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        {mainListItems}
        <Divider sx={{ my: 1 }} />
      </List>
    </Drawer>
  );
};

export default SideDrawer;
