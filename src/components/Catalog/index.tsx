import React from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import CatalogItem from '../CatalogItem';

import './Catalog.scss';

const Catalog: React.FC = () => {
	const catalog = useSelector((state: RootState) => state.catalog);
	return (
		<section className="section catalog">
			<div className="container">
				<h2 className="section__title">Наша продукція</h2>
				<div className="catalog__grid">
					{catalog.map((item) => (
						<CatalogItem key={item.id} {...item} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Catalog;
