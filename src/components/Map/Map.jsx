import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import styles from './Map.module.css'
import { useNavigate, useSearchParams } from 'react-router-dom';

function Map() {
	//Programattic navigation.
	const navigate = useNavigate()
	const [mapPosition,setMapPosition] = useState([40,0]);
	const [searchParams, setSearchParams] = useSearchParams()

	const lat =searchParams.get('lat')
	const lng = searchParams.get('lng')


	return (
		<div className={styles.mapContainer}>
			<MapContainer className={styles.map} center={mapPosition} zoom={13} scrollWheelZoom={true}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
				/>
				<Marker position={mapPosition} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
					<Popup>
					A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</MapContainer>
		</div>
	)
}

export default Map;
