import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body className={cn(inter.className, "min-h-dvh")}>
				<header className="h-16 gap-3 border-b px-6 flex items-center">
					<Button asChild variant="ghost" className="font-bold text-xl">
						<Link href="/">LOGO</Link>
					</Button>
					<Button asChild variant="ghost">
						<Link href="/about">About</Link>
					</Button>
				</header>
				{children}
				<footer className="h-16 sticky top-full border-t px-6 flex items-center">
					footer
				</footer>
			</body>
		</html>
	);
}
