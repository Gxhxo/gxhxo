import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AuthDialog from "@/components/AuthDialog";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DigitalStore — Productos digitales",
  description:
    "Plantillas, cursos, presets y recursos digitales creados por creadores independientes.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <AuthProvider>
          <CartProvider>
            <Header />
            {children}
            <Footer />
            <CartDrawer />
            <AuthDialog />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
