import { clientRoutes } from "@/client.routes";
import { CONFIG } from "@/lib/config";
import { Link } from "react-router";

export function AppFooter() {
	const navLinks = [
		{ path: clientRoutes.landing, label: "Ana Sayfa" },
		{ path: clientRoutes.report, label: "İhbar Et" },
		{ path: clientRoutes.about, label: "Hakkımızda" },
		{ path: clientRoutes.map, label: "Kazı Haritası" },
		{ path: clientRoutes.game, label: "Oyun" },
	];

	return (
		<footer className="mt-auto bg-gray-800 py-8 text-white">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
					<div>
						<h3 className="mb-4 text-xl font-bold">{CONFIG.appName}</h3>
						<p className="text-gray-300">
							Milli kaynaklarımızı korumak ve arkeolojik mirasımızı gelecek nesillere aktarmak için
							çalışıyoruz.
						</p>
					</div>
					<div>
						<h3 className="mb-4 text-xl font-bold">Hızlı Bağlantılar</h3>
						<ul className="space-y-2">
							{navLinks.map((link) => (
								<li key={link.path}>
									<Link to={link.path} className="text-gray-300 hover:text-white">
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div>
						<h3 className="mb-4 text-xl font-bold">İletişim</h3>
						<p className="text-gray-300">Bu bir lise sosyal sorumluluk projesidir.</p>
					</div>
				</div>
				<div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
					<p>&copy; 2025 {CONFIG.appName}. Tüm hakları saklıdır.</p>
				</div>
			</div>
		</footer>
	);
}
