import React from 'react';
import { Link } from 'react-router-dom';
import ContactButton from '../UI/ContactButton';

import Image from 'react-image-webp';

import './Hero.scss';

const Hero: React.FC = () => {
	return (
		<div className="hero">
			<div className="hero__decorator hero__decorator_small"></div>
			<div className="container">
				<div className="hero__column">
					<h1 className="hero__title">
						Виробник сільськогосподарської техніки та запасних
						частин
					</h1>
					<div className="hero__row">
						<ContactButton />

						<Link
							to={'/catalog'}
							className="button button_o hero__button"
						>
							У каталог
							<svg
								width="18"
								height="19"
								viewBox="0 0 18 19"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M10.125 3.875L9.32062 4.65856L13.5844 8.9375H2.25V10.0625H13.5844L9.32062 14.3223L10.125 15.125L15.75 9.5L10.125 3.875Z"
									fill="#153548"
								/>
							</svg>
						</Link>
					</div>
				</div>
				<div className="hero__image">
					<Image
						src={require('../../static/img/hero/hero-image.png')}
						webp={require('../../static/img/hero/hero-image.webp')}
						alt="Трактор"
					/>
				</div>
			</div>
			<div className="hero__decorator"></div>
		</div>
	);
};

export default Hero;
