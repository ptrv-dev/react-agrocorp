import React from 'react';
import { Link } from 'react-router-dom';

import { ProductItemType } from '../../redux/slices/productsSlice';

import './ProductsItem.scss';

const ProductsItem: React.FC<ProductItemType> = ({
	id,
	categoryId,
	title,
	description,
	price,
}) => {
	return (
		<div className="products-item">
			<div className="products-item__image">
				<img
					src={require(`../../static/img/products/${categoryId}_${id}/0.png`)}
					alt={title}
				/>
			</div>
			<div className="products-item__column">
				<h3 className="products-item__title">{title}</h3>
				<p className="products-item__description">
					{description.substring(0, 300)}.....
				</p>
				<div className="products-item__row">
					<div className="products-item__price">{price},00 ₴</div>
					<Link
						to={`/catalog/${categoryId}/${id}`}
						className="button products-item__button"
					>
						Докладніше...
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ProductsItem;
