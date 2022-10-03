import React from 'react';

import './Hero.scss';

const Hero: React.FC = () => {
	return (
		<div className="hero">
			<div className="container">
				<div className="hero__decorator hero__decorator_small"></div>
				<div className="hero__column">
					<h1 className="hero__title">
						Виробник сільськогосподарської техніки та запасних
						частин
					</h1>
					<div className="hero__row">
						<button className="button hero__button">
							Зв'язатися з нами
						</button>
						<button className="button button_o hero__button">
							У каталог
							<svg
								width="18"
								height="18"
								viewBox="0 0 18 18"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M10.125 3.875L9.32062 4.65856L13.5844 8.9375H2.25V10.0625H13.5844L9.32062 14.3223L10.125 15.125L15.75 9.5L10.125 3.875Z"
									fill="#153548"
								/>
							</svg>
						</button>
					</div>
				</div>
				<div className="hero__image">
					<img
						src={require('../../static/img/hero/hero-image.png')}
						alt="Трактор"
					/>
				</div>
				<div className="hero__decorator"></div>
			</div>
		</div>
	);
};

export default Hero;
