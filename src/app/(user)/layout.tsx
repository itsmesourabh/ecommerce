import type { Metadata } from "next";
import "../../styles/globals.css";
import "slick-carousel/slick/slick.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: "LOGONs Shopping Store",
    description: "Your trusted online shopping store",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="font-display">
                <Navbar />
                {children}
            </body>
        </html>
    );
}
