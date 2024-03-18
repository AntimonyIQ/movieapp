
import "./globals.css";

export const metadata = {
    title: "Movie App",
    description: "Netflix like Movie App",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
