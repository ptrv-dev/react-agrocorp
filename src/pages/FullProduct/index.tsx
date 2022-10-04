import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../redux/store';

import './FullProduct.scss';

const FullProduct: React.FC = () => {
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const params = useParams();

	const catalogId = Number(params.categoryId);
	const productId = Number(params.productId);

	const product = useSelector((state: RootState) =>
		state.products.find(
			({ id, categoryId }) => id === productId && categoryId === catalogId
		)
	);

	const [currentSlide, setCurrentSlide] = React.useState<number>(0);

	return (
		<section className="section product-section">
			<div className="container">
				<div className="full-product">
					<div className="full-product-slider">
						<div className="full-product-slider__main">
							<img
								src={require(`../../static/img/products/${catalogId}_${productId}/${currentSlide}.png`)}
								alt="Перший слайд"
							/>
						</div>
						<div className="full-product-slider__nav">
							{[...Array(product?.imageCount)].map((_, index) => (
								<div
									key={index}
									onClick={() => setCurrentSlide(index)}
									className={`full-product-slider__slide ${
										index === currentSlide ? 'active' : ''
									}`}
								>
									<img
										src={require(`../../static/img/products/${catalogId}_${productId}/${index}.png`)}
										alt={'Слайд №' + (index + 1)}
									/>
								</div>
							))}
						</div>
					</div>
					<div className="full-product__body">
						<div className="full-product__top">
							<h3 className="full-product__title">
								{product?.title}
							</h3>
							<p className="full-product__price">
								{product?.price},00 ₴
							</p>
						</div>
						<div className="full-product__bottom">
							<div className="full-product__column">
								{product?.description && (
									<>
										<p className="full-product__subtitle">
											Опис:
										</p>
										<p className="full-product__description">
											{product?.description}
										</p>
									</>
								)}

								<p className="full-product__column-footer">
									{product?.footer}
								</p>
								<button className="button full-product__button">
									Зв'язатися з нами
								</button>
							</div>
							<div className="full-product__column">
								<table>
									<tbody>
										{product?.table.map((item, index) => (
											<tr key={index}>
												<td>{item[0]}</td>
												<td>{item[1]}</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FullProduct;
