import React from 'react';
import { Link } from 'react-router-dom';
import { SalesHitItemType } from '../../redux/slices/salesHitSlice';

import './SalesHitItem.scss';

const SalesHitItem: React.FC<SalesHitItemType> = ({
	id,
	title,
	categoryId,
	description,
}) => {
	return (
		<div className="sales-hit-item">
			<div className="sales-hit-item__image">
				<img
					// src={require(`../../static/img/products/${id}/0.png`)}
					alt={title}
				/>
			</div>
			<h4 className="sales-hit-item__title">{title}</h4>
			<p className="sales-hit-item__description">{description}</p>
			<Link
				to={`catalog/${categoryId}/${id}`}
				className="sales-hit-item__link"
			>
				Детальніше
			</Link>
		</div>
	);
};

export default SalesHitItem;
