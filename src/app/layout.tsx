"use client";

// import type { Metadata } from "next";
import { Slackey } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header/header";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const slackey = Slackey({
  weight: "400",
  variable: "--font-slackey",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Illya Dmytrenko Personal Portfolio",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const page = usePathname();
  const bgColor = useMemo(() => {
    return page === "/about"
      ? "bg-(--background-about)"
      : page === "/portfolio"
      ? "bg-(--background-portfolio)"
      : page === "/contact"
      ? "bg-(--background-contact)"
      : "bg-(--background-home)";
  }, [page]);
  return (
    <html lang="en">
      <body className={`${slackey.className}`}>
        <div
          className={`flex flex-col px-8 sm:px-14 lg:px-[100px] pb-5 min-h-screen ${bgColor}`}
        >
          <Header
            pageName={
              page === "/"
                ? "Home"
                : page.replace("/", "").charAt(0).toUpperCase() +
                  page.replace("/", "").slice(1)
            }
            className={bgColor}
          />
          {children}
        </div>
      </body>
    </html>
  );
}
