import { createBrowserRouter } from "react-router";
import { AboutPage } from "@/pages/about.page";
import { ReportPage } from "@/pages/report.page";
import { MapPage } from "@/pages/map.page";
import { GamePage } from "@/pages/game.page";
import { clientRoutes } from "@/client.routes";
import { AppLayout } from "@/components/layout/app-layout";
import { LandingPage } from "@/pages/landing.page";
import { ErrorBoundary } from "@/pages/error.boundary";

export const router = createBrowserRouter([
	{
		Component: AppLayout,
		ErrorBoundary,
		children: [
			{ path: clientRoutes.landing, Component: LandingPage },
			{ path: clientRoutes.about, Component: AboutPage },
			{ path: clientRoutes.report, Component: ReportPage },
			{ path: clientRoutes.map, Component: MapPage },
			{ path: clientRoutes.game, Component: GamePage },
		],
	},
]);
