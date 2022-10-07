import React from 'react';
import { Link } from 'react-router-dom';

import { CatalogItemType } from '../../redux/slices/catalogSlice';

import Image from 'react-image-webp';

import './CatalogItem.scss';

const CatalogItem: React.FC<CatalogItemType> = ({ id, imageUrl, title }) => {
	return (
		<Link to={`/catalog/${id}`} className="catalog-item">
			<div className="catalog-item__image">
				<Image
					src={require('../../static/img/catalog/' + imageUrl)}
					webp={require('../../static/img/catalog/' +
						imageUrl.substring(0, imageUrl.length - 4) +
						'.webp')}
					alt="Категория"
				/>
			</div>
			<h4 className="catalog-item__title">{title}</h4>
		</Link>
	);
};

export default CatalogItem;
