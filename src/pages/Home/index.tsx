import React from 'react';
import Hero from '../../components/Hero';
import Advantages from '../../components/Advantages';
import Catalog from '../../components/Catalog';
import SalesHit from '../../components/SalesHit';
import Reviews from '../../components/Reviews';

const Home: React.FC = () => {
	return (
		<>
			<Hero />
			<Advantages />
			<Catalog />
			<SalesHit />
			<Reviews />
		</>
	);
};

export default Home;
