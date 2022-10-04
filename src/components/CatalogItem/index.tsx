import React from 'react';
import { Link } from 'react-router-dom';

import { CatalogItemType } from '../../redux/slices/catalogSlice';

import './CatalogItem.scss';

const CatalogItem: React.FC<CatalogItemType> = ({ id, imageUrl, title }) => {
	return (
		<Link to={`catalog/${id}`} className="catalog-item">
			<div className="catalog-item__image">
				<img
					src={require('../../static/img/catalog/' + imageUrl)}
					alt="Категория"
				/>
			</div>
			<h4 className="catalog-item__title">{title}</h4>
		</Link>
	);
};

export default CatalogItem;
