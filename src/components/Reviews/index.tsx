import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

import './Reviews.scss';

const Reviews: React.FC = () => {
	const reviewsList = useSelector((state: RootState) => state.reviews);
	const [currentSlide, setCurrentSlide] = React.useState<number>(0);
	const reviewItem = React.useRef<HTMLDivElement>(null);

	const onClickPrev = () => setCurrentSlide((prev) => prev - 1);
	const onClickNext = () => setCurrentSlide((prev) => prev + 1);

	return (
		<section className="section reviews">
			<div className="container">
				<div className="section__title">Відгуки про нас</div>
				<div className="reviews-slider">
					<button
						disabled={currentSlide <= 0}
						onClick={onClickPrev}
						className="reviews-slider__button reviews-slider__button_prev"
					>
						<svg
							width="12"
							height="10"
							viewBox="0 0 12 10"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M6.875 9.375L6.25813 8.75813L9.57438 5.4375H0.75V4.5625H9.57438L6.25813 1.24187L6.875 0.625L11.25 5L6.875 9.375Z"
								fill="white"
							/>
						</svg>
					</button>
					<div className="reviews-slider__body">
						{reviewsList.map((item) => (
							<div
								key={item.id}
								ref={reviewItem}
								className="review-slider__item reviews-slider-item"
								style={{
									transform: `translateX( calc( ${currentSlide} * -${
										(reviewItem.current
											?.offsetWidth as number) + 30
									}px))`,
								}}
							>
								<div className="reviews-slider-item__column">
									<div className="reviews-slider-item__image">
										<img
											src={require(`../../static/img/reviews/${item.imageUrl}`)}
											alt={item.name}
										/>
									</div>
								</div>
								<div className="reviews-slider-item__column">
									<h4 className="reviews-slider-item__name">
										{item.name}
									</h4>
									<p className="reviews-slider-item__text">
										{item.text}
									</p>
								</div>
								<div className="reviews-slider-item__quote">
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g opacity="0.5">
											<path
												d="M3 21C6 21 10 20 10 13V5.00003C10 3.75003 9.244 2.98303 8 3.00003H4C2.75 3.00003 2 3.75003 2 4.97203V11C2 12.25 2.75 13 4 13C5 13 5 13 5 14V15C5 16 4 17 3 17C2 17 2 17.008 2 18.031V20C2 21 2 21 3 21Z"
												stroke="#153548"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												d="M15 21C18 21 22 20 22 13V5.00003C22 3.75003 21.243 2.98303 20 3.00003H16C14.75 3.00003 14 3.75003 14 4.97203V11C14 12.25 14.75 13 16 13H16.75C16.75 15.25 17 17 14 17V20C14 21 14 21 15 21Z"
												stroke="#153548"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</g>
									</svg>
								</div>
							</div>
						))}
					</div>
					<button
						disabled={currentSlide >= reviewsList.length - 1}
						onClick={onClickNext}
						className="reviews-slider__button reviews-slider__button_next"
					>
						<svg
							width="12"
							height="10"
							viewBox="0 0 12 10"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M6.875 9.375L6.25813 8.75813L9.57438 5.4375H0.75V4.5625H9.57438L6.25813 1.24187L6.875 0.625L11.25 5L6.875 9.375Z"
								fill="white"
							/>
						</svg>
					</button>
				</div>
			</div>
		</section>
	);
};

export default Reviews;
