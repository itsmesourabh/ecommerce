import "../../styles/globals.css";
export const metadata = {
    title: "LOGONs",
    description: "LOGONs Store",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
