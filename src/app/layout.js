import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const title = "Roshan Vivek - Software Developer & DevOps Engineer";
const description =
  "Portfolio of Roshan Vivek, a software developer focused on full-stack platforms, cloud automation, and production-ready DevOps pipelines.";

export const metadata = {
  title,
  description,
  keywords: [
    "full-stack developer",
    "software engineer",
    "spring boot",
    "react",
    "cloud computing",
    "devops",
    "kubernetes",
  ],
  authors: [{ name: "Roshan Vivek" }],
  openGraph: {
    title,
    description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-950 text-slate-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
