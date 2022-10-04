import React from 'react';

import './NotFound.scss';

const NotFound: React.FC = () => {
	return (
		<div className="not-found">
			<div className="container">
				<div className="not-found__image">
					<svg
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink"
						x="0px"
						y="0px"
						viewBox="0 0 490 490"
					>
						<g>
							<path
								d="M140.1,364.15c4.396-3.26,108.773-78.91,214.584,0l18.303-24.554c-124.399-92.81-249.965-0.912-251.221,0.015L140.1,364.15
		z"
							/>
							<polygon
								points="138.171,228.76 166.449,200.48 194.726,228.76 216.379,207.107 188.101,178.827 216.379,150.546 194.726,128.893 
		166.449,157.173 138.171,128.893 116.519,150.546 144.797,178.827 116.519,207.107 	"
							/>
							<polygon
								points="295.274,228.76 323.551,200.48 351.829,228.76 373.481,207.107 345.203,178.827 373.481,150.546 351.829,128.893 
		323.551,157.173 295.274,128.893 273.621,150.546 301.899,178.827 273.621,207.107 	"
							/>
							<path
								d="M69.086,490h351.829C459.001,490,490,459.001,490,420.914V69.086C490,30.991,459.001,0,420.914,0H69.086
		C30.999,0,0,30.991,0,69.086v351.829C0,459.001,30.999,490,69.086,490z M30.625,69.086c0-21.204,17.256-38.461,38.461-38.461
		h351.829c21.204,0,38.461,17.257,38.461,38.461v351.829c0,21.204-17.257,38.461-38.461,38.461H69.086
		c-21.204,0-38.461-17.257-38.461-38.461V69.086z"
							/>
						</g>
					</svg>
				</div>
				<h2 className="not-found__title">Сторінку не знайдено</h2>
				<p className="not-found__text">
					За вашим запитом нічого немає...
				</p>
			</div>
		</div>
	);
};

export default NotFound;
