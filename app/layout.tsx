import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ClientRoot from "./client-root";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata = {
  title: "Vaibhav Somani | Full Stack Projects Showcase & Portfolio",
  description:
    "Explore personal and professional projects by Vaibhav Somani, featuring advanced UI components, data visualizations, and full-stack solutions using React, Next.js, TypeScript, and more.",
  keywords: [
    "Vaibhav Somani",
    "Vaibhav Somani Portfolio",
    "Vaibhav Somani Projects",
    "React Portfolio",
    "Frontend Developer Projects",
    "Full Stack Developer Showcase",
    "Next.js Projects",
    "Tailwind CSS UI",
    "TypeScript Components",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Vaibhav Somani | Full Stack Projects Showcase & Portfolio",
    description:
      "A curated collection of React, TypeScript, and full-stack projects by Vaibhav Somani — from advanced tables to interactive charts.",
    url: "https://your-domain.com",
    siteName: "Vaibhav Somani Portfolio",
    type: "website",
    images: [
      {
        url: "/projectes.jpg",
        width: 1200,
        height: 630,
        alt: "Vaibhav Somani Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaibhav Somani | Full Stack Projects Showcase & Portfolio",
    description:
      "Check out the interactive full-stack work of Vaibhav Somani — including advanced React tables, SVG visualizations, and more.",
    images: ["/projectes.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${plusJakarta.className} antialiased`}>
        <ClientRoot>{children}</ClientRoot>
      </body>
    </html>
  );
}
