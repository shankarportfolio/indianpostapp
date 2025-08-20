import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Home | India Post Lookup",
  description: "Lookup Indian postal information by pincode or branch name. Get details about post offices, delivery status, and locations instantly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        <div className="wrapper">
          <Header />
          <div className="contentwrapper">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
