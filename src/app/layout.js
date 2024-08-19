import { Montserrat } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar/sidebar";
import Container from "@/components/container";
import Head from "next/head";
import Information from "@/components/information";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "ZuAi",
  description: "IB Coursework Evaluation Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className={inter.className}>
        <main className="relative">
          <Sidebar />
          <div className="py-20 md:py-16">
            <Container>{children}</Container>
          </div>
          <Information/>
        </main>
      </body>
    </html>
  );
}
