import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { SalesHitItemType } from '../../redux/slices/salesHitSlice';
import { RootState } from '../../redux/store';

import './SalesHitItem.scss';

const SalesHitItem: React.FC<SalesHitItemType> = (props: SalesHitItemType) => {
	const product = useSelector((state: RootState) =>
		state.products.find(
			({ id, categoryId }) =>
				id === props.id && categoryId === props.categoryId
		)
	);
	return (
		<div className="sales-hit-item">
			<div className="sales-hit-item__image">
				<img
					src={require(`../../static/img/products/${product?.categoryId}_${product?.id}/0.png`)}
					alt={product?.title}
				/>
			</div>
			<h4 className="sales-hit-item__title">{product?.title}</h4>
			<p className="sales-hit-item__description">
				{product?.description.substring(0, 200)}.....
			</p>
			<Link
				to={`catalog/${product?.categoryId}/${product?.id}`}
				className="sales-hit-item__link"
			>
				Детальніше
			</Link>
		</div>
	);
};

export default SalesHitItem;
