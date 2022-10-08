import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductsItem from '../../components/ProductsItem';

import { RootState } from '../../redux/store';

const CatalogPage: React.FC = () => {
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const categoryId = Number(useParams().categoryId);
	const products = useSelector((state: RootState) => state.products.items);
	const catalog = useSelector((state: RootState) => state.catalog);

	const title = catalog.items.find(({ id }) => id === categoryId)?.title;

	return (
		<section className="section products">
			<div className="container">
				<h2 className="section__title">{title}</h2>
				<div className="products__body">
					{products
						.filter((item) => item.categoryId === categoryId)
						.map((item) => (
							<ProductsItem
								key={`${item.categoryId}_${item.id}`}
								{...item}
							/>
						))}
				</div>
			</div>
		</section>
	);
};

export default CatalogPage;
