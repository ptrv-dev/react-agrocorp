import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import NotFound from './components/NotFound';

import Home from './pages/Home';
import CatalogPage from './pages/CatalogPage';

import './App.scss';
import FullProduct from './pages/FullProduct';
import Catalog from './components/Catalog';
import PopUp from './components/PopUp';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';

const App: React.FC = () => {
	React.useEffect(() => {}, []);

	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route index element={<Home />} />
				<Route path="/catalog/:categoryId" element={<CatalogPage />} />
				<Route
					path="/catalog/:categoryId/:productId"
					element={<FullProduct />}
				/>
				<Route path="/catalog" element={<Catalog />} />
				<Route path="/about-us" element={<AboutUs />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<PopUp />
			<Footer />
		</BrowserRouter>
	);
};

export default App;
