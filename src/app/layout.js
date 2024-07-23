import { Inter } from "next/font/google";
import "./globals.css";

import { Providers } from "./provider.jsx";
import NavBar from "./components/navbar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <NavBar />
          <div className="container mx-auto">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
