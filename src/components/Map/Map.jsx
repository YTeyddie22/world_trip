import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import styles from './Map.module.css'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useCities } from '../../context/CitiesContext';

/* eslint react/prop-types: 0 */

function Map() {
	
	const {cities} = useCities();

	const [mapPosition,setMapPosition] = useState([40,0]);
	const [searchParams] = useSearchParams();

	const mapLat =searchParams.get('lat');
	const mapLng = searchParams.get('lng');
	
	useEffect(function() {
		if(mapLat && mapLng) setMapPosition([mapLat,mapLng]);
	},[mapLat, mapLng]);


	return (
		<div className={styles.mapContainer}>
			<MapContainer className={styles.map} center={mapPosition} zoom={13} scrollWheelZoom={true}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
				/>
				{cities.map((city)=>(
					<Marker position={[city.position.lat,city.position.lng]} key={city.id} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
						<Popup>
							<span>{city.emoji}</span> <span>{city.cityName}</span>
						</Popup>
					</Marker>
				))}
				<ChangePosition position={mapPosition}/>
				<DetectClick/>
			</MapContainer>
		</div>
	)
}

function ChangePosition({position}) {
	const map = useMap();
	map.setView(position);

	return null
}

function DetectClick() {
	//Programattic navigation.
	const navigate = useNavigate();
	useMapEvents({
		click: (e) => navigate(`form`),
	})
}

export default Map;
