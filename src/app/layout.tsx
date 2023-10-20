"use client";
import { Inter } from "next/font/google";
import "./lib/ui/globals.css";
import { WalletProvider } from "./modules/wallet/services/context";
import useWindowDimensions from "./utils/useWindowDimension";

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { width } = useWindowDimensions();
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <WalletProvider>
          {width <= 768 ? (
            children
          ) : (
            <div className="flex justify-center items-center h-screen text-xl text-gray-700">
              Please open on mobile for a better experience.
            </div>
          )}
        </WalletProvider>
      </body>
    </html>
  );
}
