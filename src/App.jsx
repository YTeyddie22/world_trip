import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product/Product";
import Pricing from "./pages/Pricing/Pricing";
import Home from "./pages/Home/Home";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout/AppLayout";
import Login from "./pages/Login/Login";
import CityList from './components/City/CityList';
import { useEffect, useState } from 'react';


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
				alert("THere was an error fetching data")
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
				<Route path='/pricing' element={<Pricing />} />
				<Route path='/product' element={<Product />} />
				<Route path='/login' element={<Login />} />
				<Route path='/app' element={<AppLayout />}>
					<Route index element={<CityList cities={cities} isLoading={isLoading}/>} />
					<Route path='cities' element={<CityList cities={cities} isLoading={isLoading}/>} />
					<Route path='countries' element={<p>Countires</p>} />
					<Route path='form' element={<p>Form</p>} />
				</Route>
				<Route path='*' element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
