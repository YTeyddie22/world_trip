import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product/Product";
import Pricing from "./pages/Pricing/Pricing";
import Home from "./pages/Home/Home";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout/AppLayout";
import Login from "./pages/Login/Login";
import CityList from './components/City/CityList';
import CountryList from './components/Country/CountryList';
import City from './components/City/City';
import Form from './components/Form/Form'


const BASE_URL = 'http://localhost:9000';

function App() {

	// eslint-disable-next-line no-unused-vars
	const [cities, setCities] = useState([]);
	// eslint-disable-next-line no-unused-vars
	const [isLoading, setIsLoading] = useState(false);

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
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route path='pricing' element={<Pricing />} />
				<Route path='product' element={<Product />} />
				<Route path='login' element={<Login />} />
				<Route path='app' element={<AppLayout />}>
					<Route index element={<CityList cities={cities} isLoading={isLoading}/>} />
					<Route path='cities' element={<CityList cities={cities} isLoading={isLoading}/>} />
					<Route path='cities/:id' element={<City/>}/>
					<Route path='countries' element={<CountryList cities={cities} isLoading={isLoading}/>} />
					<Route path='form' element={<Form/>} />
				</Route>
				<Route path='*' element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
