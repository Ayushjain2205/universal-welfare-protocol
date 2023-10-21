"use client";
import { useRouter, usePathname } from "next/navigation";
import { Work_Sans } from "next/font/google";
import "./global.css";
import { WalletProvider } from "./modules/wallet/services/context";
import useWindowDimensions from "./utils/useWindowDimension";

const inter = Work_Sans({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { width } = useWindowDimensions();
  const router = useRouter();
  const pathname = usePathname();

  const isVerifiedRoute = pathname === "/verified";
  const bodyClass = `${inter.className} ${
    !isVerifiedRoute ? "p-[27px]" : ""
  } bg-[#FEFEFE]`;

  return (
    <html lang="en">
      <body className={bodyClass}>
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
