import { Session } from "next-auth";
import { headers } from "next/headers";
import { Poppins } from "@next/font/google";
import Header from "../components/Header";
import "../styles/global.scss";

const poppins = Poppins({
    weight: ["400", "500", "700", "900"],
    subsets: ["latin"],
});

// async function getSession(cookie: string): Promise<Session> {
//     const response = await fetch(
//         `${process.env.LOCAL_AUTH_URL}/api/auth/session`,
//         { headers: { cookie } },
//     );

//     const session = await response.json();
//     return Object.keys(session).length > 0 ? session : null;
// }

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // const session = await getSession(headers().get("cookie") ?? "");
    return (
        <html lang="en" className={poppins.className}>
            <body>
                {/* <AuthContext session={session}> */}
                <Header />
                {children}
                {/* </AuthContext> */}
            </body>
        </html>
    );
}
