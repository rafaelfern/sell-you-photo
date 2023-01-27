import { Poppins } from "@next/font/google";
import Header from "../components/Header";
import "../styles/global.scss";

const poppins = Poppins({
    weight: ["400", "500", "700", "900"],
    subsets: ["latin"],
});

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={poppins.className}>
            <body>
                <Header />
                {children}
            </body>
        </html>
    );
}
