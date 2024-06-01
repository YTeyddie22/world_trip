import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product/Product";
import Pricing from "./pages/Pricing/Pricing";
import Home from "./pages/Home/Home";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout/AppLayout";
import Login from "./pages/Login/Login";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/pricing' element={<Pricing />} />
				<Route path='/product' element={<Product />} />
				<Route path='/login' element={<Login />} />
				<Route path='/app' element={<AppLayout />} />
				<Route path='*' element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
