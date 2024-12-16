import { useEffect, useState } from "react";
import {
	MapContainer,
	TileLayer,
	Marker,
	Popup,
	useMap,
	useMapEvents,
} from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import styles from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useCities } from "../../context/CitiesContext";
import { useGeolocation } from "../../hooks/useGeoLocation";
import Button from "../Button/Button";
import { useUrlPosition } from "../../hooks/useUrlPosition";

/* eslint react/prop-types: 0 */

function Map() {
	const { cities } = useCities();
	const [mapPosition, setMapPosition] = useState([40, 0]);

	const {
		isLoading: isLoadingPosition,
		position: geoPosition,
		getPosition,
	} = useGeolocation();

	const [mapLat, mapLng] = useUrlPosition();

	useEffect(
		function () {
			if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
		},
		[mapLat, mapLng]
	);

	useEffect(
		function () {
			if (geoPosition) setMapPosition([geoPosition.lat, geoPosition.lng]);
		},
		[geoPosition]
	);

	return (
		<div className={styles.mapContainer}>
			{!geoPosition && (
				<Button type="position" onClick={getPosition}>
					{isLoadingPosition
						? "Loading..."
						: "Use your current Position"}
				</Button>
			)}
			<MapContainer
				className={styles.map}
				center={mapPosition}
				zoom={13}
				scrollWheelZoom={true}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
				/>
				{cities.map((city) => (
					<Marker
						position={[city.position.lat, city.position.lng]}
						key={city.id}
						icon={
							new Icon({
								iconUrl: markerIconPng,
								iconSize: [25, 41],
								iconAnchor: [12, 41],
							})
						}>
						<Popup>
							<span>{city.emoji}</span>{" "}
							<span>{city.cityName}</span>
						</Popup>
					</Marker>
				))}
				<ChangePosition position={mapPosition} />
				<DetectClick />
			</MapContainer>
		</div>
	);
}

function ChangePosition({ position }) {
	const map = useMap();
	map.setView(position);

	return null;
}

function DetectClick() {
	//Programattic navigation.
	const navigate = useNavigate();
	useMapEvents({
		click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
	});
}

export default Map;
