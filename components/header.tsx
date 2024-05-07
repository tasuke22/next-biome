import UserMenu from "@/components/user-menu";
import { MobileNav } from "@/components/mobile-nav";
import Nav from "@/components/nav";

export const Header = () => (
	<header className="h-16 gap-3 border-b px-6 flex items-center">
		<MobileNav />
		<Nav />
		<span className="flex-1" />
		<UserMenu />
	</header>
);
