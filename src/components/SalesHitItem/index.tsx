import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { SalesHitItemType } from '../../redux/slices/salesHitSlice';
import { RootState } from '../../redux/store';

import Image from 'react-image-webp';

import './SalesHitItem.scss';

const SalesHitItem: React.FC<SalesHitItemType> = (props: SalesHitItemType) => {
	const product = useSelector((state: RootState) =>
		state.products.items.find(
			({ id, categoryId }) =>
				id === props.id && categoryId === props.categoryId
		)
	);
	let path = '';
	product?.categoryId === undefined
		? (path = '1_1')
		: (path = `${product?.categoryId}_${product?.id}`);
	return (
		<div className="sales-hit-item">
			<div className="sales-hit-item__image">
				<Image
					src={require(`../../static/img/products/${path}/0.png`)}
					webp={require(`../../static/img/products/${path}/0.webp`)}
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
