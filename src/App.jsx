import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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

import { CitiesProvider, CitiesContext } from './context/CitiesContext';



function App() {
	return (
		<CitiesProvider>
			<BrowserRouter>
				<Routes>
					<Route index element={<Home />} />
					<Route path='pricing' element={<Pricing />} />
					<Route path='product' element={<Product />} />
					<Route path='login' element={<Login />} />
					<Route path='app' element={<AppLayout />}>
						<Route index element={<Navigate replace to='cities'/>} />
						<Route path='cities' element={<CityList/>} />
						<Route path='cities/:id' element={<City/>}/>
						<Route path='countries' element={<CountryList/>} />
						<Route path='form' element={<Form/>} />
					</Route>
					<Route path='*' element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>
		</CitiesProvider>
	);
}

export default App;
