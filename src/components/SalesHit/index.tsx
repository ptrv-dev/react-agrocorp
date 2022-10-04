import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../redux/store';

import SalesHitItem from '../SalesHitItem';

import './SalesHit.scss';

const SalesHit: React.FC = () => {
	const salesHitList = useSelector((state: RootState) => state.salesHit);
	console.log(salesHitList);
	return (
		<section className="section sales-hit">
			<div className="container">
				<div className="section__title">Хіти продажів</div>
				<div className="sales-hit__row">
					{salesHitList.map((item) => (
						<SalesHitItem key={item.id} {...item} />
					))}
				</div>
			</div>
		</section>
	);
};

export default SalesHit;
