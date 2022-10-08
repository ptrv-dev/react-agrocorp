import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../redux/store';

import SalesHitItem from '../SalesHitItem';

import './SalesHit.scss';

const SalesHit: React.FC = () => {
	const salesHitList = useSelector(
		(state: RootState) => state.salesHit.items
	);

	return (
		<section className="section sales-hit">
			<div className="container">
				<div className="section__title">Хіти продажів</div>
				<div className="sales-hit__row">
					{salesHitList.map((item, index) => (
						<SalesHitItem key={index} {...item} />
					))}
				</div>
			</div>
		</section>
	);
};

export default SalesHit;
