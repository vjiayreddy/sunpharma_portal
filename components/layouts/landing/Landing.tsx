import React, { Fragment } from "react";
import AppBarComponent from "../../navigation/AppBar";

interface LandingLayoutProps {
  children: React.ReactNode;
}

const LandingLayout = ({ children }: LandingLayoutProps) => {
  return (
    <Fragment>
      <AppBarComponent />
      {children}
    </Fragment>
  );
};

export default LandingLayout;
