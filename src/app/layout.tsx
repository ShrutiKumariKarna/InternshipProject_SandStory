import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";


// import Footer from "./component/footer/"
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  preload: true,
});

export const metadata: Metadata = {
  title: "SandStory",
  description: "Unleash your creativity with SandStory",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Embed Sofia Pro font using cdn */}
        <link
          href="https://fonts.cdnfonts.com/css/sofia-pro"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} font-sofia-pro antialiased`}>
       
        {children}
        
      </body>
    </html>
  );
}
