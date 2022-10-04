import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';

import Home from './pages/Home';

import './App.scss';
import NotFound from './components/NotFound';

const App: React.FC = () => {
	React.useEffect(() => {}, []);

	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route index element={<Home />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
