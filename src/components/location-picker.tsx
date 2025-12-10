import { useState, type ComponentProps } from "react";
import { Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer } from "@/components/map-container";
import type { LatLng } from "leaflet";
import { CONFIG } from "@/lib/config";
import { useLocationPicker } from "@/hooks/use-location-picker";

function LocationMarker({ onLocationSelect }: { onLocationSelect: (latLng: LatLng) => void }) {
	const [position, setPosition] = useState<LatLng | null>(null);

	useMapEvents({
		click(e) {
			setPosition(e.latlng);
			onLocationSelect(e.latlng);
		},
	});

	return position === null ? null : <Marker position={position} />;
}

export function LocationPicker(props: ComponentProps<"input">) {
	const { location, onLocationSelect, isPending } = useLocationPicker();

	return (
		<div className="w-full space-y-2">
			<div className="relative">
				<input type="text" {...props} value={isPending ? "Yükleniyor..." : location} />
			</div>

			<div className="h-64 overflow-hidden rounded-lg">
				<MapContainer center={CONFIG.turkeyCenter} zoom={8} className="h-full w-full">
					<LocationMarker onLocationSelect={onLocationSelect} />
				</MapContainer>
			</div>
		</div>
	);
}
