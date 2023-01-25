import { Poppins, Roboto } from "@next/font/google";
import Header from "../components/Header";
import "../styles/global.scss";

const poppins = Poppins({
	weight: ["400", "500", "700", "900"],
	subsets: ["latin"],
});

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
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
