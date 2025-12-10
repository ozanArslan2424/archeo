import { Outlet } from "react-router";
import { AppHeader } from "./app-header";
import { AppFooter } from "./app-footer";

export function AppLayout() {
	return (
		<div className="flex min-h-screen flex-col">
			<AppHeader />
			<main className="flex-1">
				<Outlet />
			</main>
			<AppFooter />
		</div>
	);
}
