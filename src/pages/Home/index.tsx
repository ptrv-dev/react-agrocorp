import React from 'react';
import Advantages from '../../components/Advantages';
import Catalog from '../../components/Catalog';

import Hero from '../../components/Hero';

const Home: React.FC = () => {
	return (
		<>
			<Hero />
			<Advantages />
			<Catalog />
		</>
	);
};

export default Home;
