import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';

import Home from './pages/Home';

import './App.scss';

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route index element={<Home />} />
				<Route path="*" element={<div>Not Found</div>} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
