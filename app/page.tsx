"use client";
import DashboardLayout from "../components/layouts/dashboard/Dashboard";
import {useSession} from "next-auth/react";

const LandingPage = () => {

  const {data:session} = useSession();
  console.log(session);
  return <DashboardLayout />;
};
export default LandingPage;
