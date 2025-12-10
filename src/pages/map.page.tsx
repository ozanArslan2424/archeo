import { useMemo, useState } from "react";
import { digSitesData, type DigSite } from "../data/digSites";
import { MapContainer } from "@/components/map-container";
import { Marker, Popup } from "react-leaflet";
import { CONFIG } from "@/lib/config";
import { XIcon } from "lucide-react";

export function MapPage() {
	const [searchFocused, setSearchFocused] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const [site, setSite] = useState<(typeof digSitesData)[0] | null>(null);

	const filteredSites = useMemo(
		() => digSitesData.filter((s) => s.name.toLowerCase().includes(searchTerm.toLowerCase())),
		[searchTerm],
	);

	function handleSiteClick(s: DigSite) {
		setSearchTerm(s.name);
		setSite(s);
	}

	function handleDrawerClose() {
		setSite(null);
	}

	return (
		<div className="relative h-screen">
			{/* Search Bar */}
			<div className="absolute top-4 left-1/2 z-1000 w-full max-w-md -translate-x-1/2 transform px-4">
				<input
					type="search"
					placeholder="Kazı alanı ara..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					onFocus={() => setSearchFocused(true)}
					onBlur={() => setSearchFocused(false)}
					className="border-primary w-full border-2 px-4 py-3 text-base focus:outline-none"
				/>

				{searchFocused && (
					<div className="card mt-2 shadow-lg">
						<ul className="max-h-80 overflow-y-auto">
							{filteredSites.map((site) => (
								<li
									className="button ghost sm w-full justify-start"
									key={site.id}
									onClick={() => handleSiteClick(site)}
								>
									{site.name}
								</li>
							))}
						</ul>
					</div>
				)}
			</div>

			{/* Map */}
			<MapContainer
				center={CONFIG.turkeyCenter}
				zoom={6}
				className="h-full w-full"
				style={{ height: "100%", width: "100%" }}
			>
				{filteredSites.map((site) => (
					<Marker
						key={site.id}
						position={site.coordinates}
						eventHandlers={{
							click: () => {
								setSite(site);
							},
						}}
					>
						<Popup>
							<div className="text-sm">
								<h3 className="font-bold text-amber-800">{site.name}</h3>
								<p className="mt-1 text-gray-600">{site.shortInfo}</p>
							</div>
						</Popup>
					</Marker>
				))}
			</MapContainer>

			{site && (
				<div className="bg-card absolute top-0 right-0 z-1001 h-full w-full overflow-y-auto shadow-2xl md:w-96">
					<div className="p-6">
						<div className="mb-4 flex items-start justify-between">
							<h2 className="text-2xl font-bold text-gray-800">{site.name}</h2>
							<button onClick={handleDrawerClose} className="square secondary" aria-label="Kapat">
								<XIcon />
							</button>
						</div>

						<div className="space-y-6">
							<div>
								<h3 className="mb-2 text-sm font-semibold text-amber-800 uppercase">Genel Bilgi</h3>
								<p className="text-gray-700">{site.shortInfo}</p>
							</div>

							<div>
								<h3 className="mb-2 text-sm font-semibold text-amber-800 uppercase">Buluntular</h3>
								<ul className="space-y-2">
									{site.findings.map((finding, index) => (
										<li key={index} className="flex items-start">
											<span className="mr-2 text-amber-600">•</span>
											<span className="text-gray-700">{finding}</span>
										</li>
									))}
								</ul>
							</div>

							<div>
								<h3 className="mb-2 text-sm font-semibold text-amber-800 uppercase">
									Bulunma Yılı
								</h3>
								<p className="text-gray-700">{site.discoveryYear}</p>
							</div>

							<div>
								<h3 className="mb-2 text-sm font-semibold text-amber-800 uppercase">Ek Bilgiler</h3>
								<p className="leading-relaxed text-gray-700">{site.additionalInfo}</p>
							</div>

							<div className="border-t border-gray-200 pt-4">
								<p className="text-xs text-gray-500">
									Koordinatlar: {site.coordinates[0].toFixed(4)}, {site.coordinates[1].toFixed(4)}
								</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
