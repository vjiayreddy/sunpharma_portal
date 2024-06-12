import React from "react";
import { Typography, TypographyProps } from "@mui/material";

interface CopyrightProps extends TypographyProps {
  title: string;
  link?: string;
}

const Copyright = ({ title, ...props }: CopyrightProps) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      {title}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;
