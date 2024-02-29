import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import ScrollTopButton from "./components/ScrollTopButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Van's Web Coding Exercises",
  description: "Technical Exam for Web Developer Position",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* I import the NavBar & ScrollTOpButton components so that it will appear on all pages of this website. */}
        <NavBar />
        <ScrollTopButton />
        {children}
      </body>
    </html>
  );
}
