import { Button } from "@/components/ui/button";
import Link from "next/link";

const navItems = [
	{ label: "About", href: "/about" },
	{ label: "Todo", href: "/todo" },
	{ label: "Todo components", href: "/todo-components" },
	{ label: "UI Library", href: "/ui-library" },
];

const Nav = () => {
	return navItems.map((navItem) => (
		<div key={navItem.label}>
			<Button asChild variant="ghost">
				<Link href={navItem.href}>{navItem.label}</Link>
			</Button>
		</div>
	));
};

export default Nav;
