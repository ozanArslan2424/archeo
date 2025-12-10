import { clientRoutes } from "@/client.routes";
import { CONFIG } from "@/lib/config";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router";

export function AppHeader() {
	const location = useLocation();

	const navLinks = [
		{ path: clientRoutes.landing, label: "Ana Sayfa" },
		{ path: clientRoutes.report, label: "İhbar Et" },
		{ path: clientRoutes.about, label: "Hakkımızda" },
		{ path: clientRoutes.map, label: "Kazı Haritası" },
		{ path: clientRoutes.game, label: "Oyun" },
	];

	return (
		<nav className="bg-card shadow-md">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<Link to={clientRoutes.landing} className="text-2xl font-bold">
						{CONFIG.appName}
					</Link>
					<ul>
						{navLinks.map((link) => (
							<li className="inline-block" key={link.path}>
								<Link
									to={link.path}
									className={cn(
										"group hover:text-foreground relative mx-1 px-1 py-2 transition-colors duration-200",
										location.pathname === link.path ? "text-foreground" : "text-muted-foreground",
									)}
								>
									{link.label}
									<span
										className={cn(
											"bg-primary absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-300",
											location.pathname === link.path ? "w-full" : "group-hover:w-full",
										)}
									/>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
}
