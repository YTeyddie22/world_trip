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
				<Route index element={<Home />} />
				<Route path='/pricing' element={<Pricing />} />
				<Route path='/product' element={<Product />} />
				<Route path='/login' element={<Login />} />
				<Route path='/app' element={<AppLayout />}>
					<Route index element={<p>List</p>} />
					<Route path='cities' element={<p>List of cities</p>} />
					<Route path='countries' element={<p>Countires</p>} />
					<Route path='form' element={<p>Form</p>} />
				</Route>
				<Route path='*' element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
