import NextAuthSessionProvider from "./api/auth/[...nextauth]/providers/sessionProvider";
import MuiThemeProvider from "../mui/provider";
import { ReduxStateProviders } from "../redux/provider";
import { Inter } from "next/font/google";
import { app_description } from "../utils/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SGLABS Inc.",
  description: app_description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ReduxStateProviders>
          <NextAuthSessionProvider>
            <MuiThemeProvider>{children}</MuiThemeProvider>
          </NextAuthSessionProvider>
        </ReduxStateProviders>
      </body>
    </html>
  );
}
