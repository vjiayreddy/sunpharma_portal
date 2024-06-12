/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import { Hidden } from "@mui/material";
import Button from "@mui/material/Button";
import LockIcon from "@mui/icons-material/Lock";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { signIn, signOut, useSession } from "next-auth/react";

const StyledTabsList = styled(Tabs)(({ theme }) => ({
  minHeight: 62,
  "& .MuiTabs-indicator": {
    display: "none",
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
const StyledTab = styled(Tab)<{ ref?: React.Ref<HTMLDivElement> }>(
  ({ theme }) => ({
    minHeight: 62,
    fontWeight: 600,
    fontSize: 16,
    color: theme.palette.secondary.main,
  })
);

const StyledNavigationWrapper = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  paddingLeft: 120,
}));

const AppBarComponent = () => {
  const [tabIndex, setTabIndex] = React.useState<string | boolean>(false);
  const { data: session, status } = useSession();
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Hidden only={["lg", "xl", "md"]}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <img src="/logos/logo.png" alt="logo" width={150} />
          <StyledNavigationWrapper>
            <StyledTabsList
              variant="scrollable"
              value={tabIndex}
              onChange={(_, value) => setTabIndex(value)}
            >
              <StyledTab value="0" label="Case Study" />
              <StyledTab value="1" label="Process" />
              <StyledTab value="2" label="Contact" />
            </StyledTabsList>
          </StyledNavigationWrapper>
          <Box>
            {!session?.user && (
              <Button
                disabled={status === "loading" ? true : false}
                onClick={() => signIn("cognito")}
                startIcon={<LockIcon />}
                size="medium"
                variant="outlined"
                color="secondary"
              >
                Login
              </Button>
            )}
            {session?.user && (
              <Button
                onClick={() => signOut()}
                startIcon={<PowerSettingsNewIcon />}
                size="medium"
                variant="contained"
                color="error"
              >
                LogOut
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppBarComponent;
