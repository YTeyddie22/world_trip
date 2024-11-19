import { createContext } from 'react';
import { useEffect, useState, useContext } from 'react';

const BASE_URL = 'http://localhost:9000';

const CitiesContext = createContext();

// eslint-disable-next-line react/prop-types
function CitiesProvider({children}) {
	const [cities, setCities] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [currentCity, setCurrentCity] = useState({});


	useEffect(function() {
		async function fetchCities() {

			try {
				setIsLoading(true)
				const result = await fetch(`${BASE_URL}/cities`);
				const data = await result.json();
				setCities(data)
			} catch (error) {
				alert("There was an error fetching data")
			} finally {
				setIsLoading(false)
			}
			
		}
		fetchCities()
	},[])

	async function getCity(id) {
		try {
			setIsLoading(true)
			const result = await fetch(`${BASE_URL}/cities/${id}`);
			const data = await result.json();
			setCurrentCity(data)
		} catch (error) {
			alert("There was an error fetching data")
		} finally {
			setIsLoading(false)
		}
	}

    return (
		<CitiesContext.Provider value={{
				cities,
				isLoading,
				currentCity,
				getCity
			}}>
				{children}
		</CitiesContext.Provider>
    )
}

function useCities() {
	const context = useContext(CitiesContext);

	if(context === undefined) throw new Error(`CitiesContext used outside CitiesProvider`);

	return context;
}

export {useCities, CitiesProvider}