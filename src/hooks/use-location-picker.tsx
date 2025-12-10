import axios from "axios";
import type { LatLng } from "leaflet";
import { useState, useTransition } from "react";

interface NominatimResult {
	display_name: string;
	address: {
		city?: string;
		town?: string;
		village?: string;
		municipality?: string;
		state?: string;
		country?: string;
		[key: string]: string | undefined;
	};
}

export function useLocationPicker() {
	const [location, setLocation] = useState("");
	const [isPending, startPending] = useTransition();

	async function onLocationSelect(latlng: LatLng) {
		startPending(async () => {
			const res = await axios.get<NominatimResult>("https://nominatim.openstreetmap.org/reverse", {
				params: {
					format: "json",
					lat: latlng.lat,
					lon: latlng.lng,
					"accept-language": "tr",
					zoom: 18,
					addressdetails: 1,
				},
			});
			setLocation(res.data.display_name);
		});
	}

	return { location, isPending, onLocationSelect };
}
