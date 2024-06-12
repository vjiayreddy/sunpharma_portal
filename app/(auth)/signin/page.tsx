/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import { signIn } from "next-auth/react";

const StyledLoginPageWrapper = styled(Box)(({ theme }) => ({
  width: "100dvw",
  height: "100dvh",
  backgroundColor: theme.palette.grey[200],
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  "& .__login_wrapper__box": {
    width: 350,
    textAlign: "center",
  },
}));

const LoginPage = () => {
  return (
    <StyledLoginPageWrapper>
      <Box component="div" className="__login_wrapper__box">
        <Card>
          <CardContent>
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
              spacing={3}
            >
              <Grid item>
                <img width={200} alt="sglabs" src="/logos/sglabs.png" />
              </Grid>
              <Grid item>
                <Typography variant="body2" textAlign="center">
                  Machine Vision-Based Data Capture and Barcode Scanning
                  Solutions for the Healthcare Industry
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  onClick={() => signIn("cognito")}
                  startIcon={
                    <img
                      style={{ marginRight: 10 }}
                      width={25}
                      alt="aws_cogninto"
                      src="/logos/cognito.png"
                    />
                  }
                  color="inherit"
                >
                  Login with AWS Cognito
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </StyledLoginPageWrapper>
  );
};

export default LoginPage;
