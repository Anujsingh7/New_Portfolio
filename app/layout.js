import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import { ThemeProvider } from "./providers/theme-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Anuj Singh - Full Stack Developer",
  description:
    "This is the portfolio of Anuj Singh. I am a full stack developer and Information Technology graduate from HBTU Kanpur. I am passionate about Data Structures and Algorithms and Web Development. I love to learn new things and I am always open to collaborating with others on exciting projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <ToastContainer />
          <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] dark:text-white">
            <Navbar />
            {children}
            <ScrollToTop />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
