import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { RootState } from '../../redux/store';
import ContactButton from '../UI/ContactButton';

import Image from "react-image-webp";

import './Header.scss';

const Header: React.FC = () => {
	const catalog = useSelector((state: RootState) => state.catalog);

	const [isNavOpen, setIsNavOpen] = React.useState<boolean>(false);
	const [isButtonMoved, setIsButtonMoved] = React.useState<boolean>(
		window.innerWidth < 520
	);

	React.useEffect(() => {
		const resize = () => {
			if (window.innerWidth < 520) setIsButtonMoved(true);
			else setIsButtonMoved(false);
		};
		window.addEventListener('resize', resize);
		return () => {
			document.body.removeEventListener('click', resize);
		};
	}, []);

	const location = useLocation();

	React.useEffect(() => {
		setIsNavOpen(false);
	}, [location]);

	const onBurgerClick = () => setIsNavOpen((prev) => !prev);

	return (
		<header className="header">
			<div className="header__top">
				<div className="container">
					<Link to="/" className="logo">
						<div className="logo__image">
							<Image
								src={require('../../static/img/logo.png')}
								webp={require('../../static/img/logo.webp')}
								alt="Logo"
							/>
						</div>
						<div className="logo__text">
							<h3>ТОВ «Агрокорп»</h3>
						</div>
					</Link>
					<div className="header__contacts">
						<a
							href="tel:+380984491149"
							className="header__contacts-item header__phone"
						>
							<svg
								width="18"
								height="18"
								viewBox="0 0 18 18"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M14.625 16.3125H14.5294C3.47625 15.6769 1.90688 6.35063 1.6875 3.50438C1.66983 3.28308 1.69599 3.06046 1.76449 2.84929C1.833 2.63812 1.9425 2.44255 2.08672 2.27377C2.23094 2.10499 2.40704 1.96632 2.60495 1.86572C2.80285 1.76512 3.01865 1.70456 3.24 1.6875H6.33938C6.56469 1.68728 6.78488 1.75472 6.97142 1.88109C7.15796 2.00746 7.30226 2.18693 7.38563 2.39625L8.24063 4.5C8.32295 4.7045 8.34338 4.92867 8.29938 5.14468C8.25538 5.36068 8.14888 5.559 7.99313 5.715L6.795 6.92438C6.98216 7.98792 7.49148 8.96831 8.25407 9.73291C9.01666 10.4975 9.9957 11.0094 11.0588 11.1994L12.2794 9.99C12.4377 9.83596 12.6379 9.73195 12.855 9.69094C13.072 9.64993 13.2964 9.67373 13.5 9.75938L15.6206 10.6088C15.8268 10.6947 16.0027 10.8402 16.1259 11.0265C16.2491 11.2128 16.3141 11.4316 16.3125 11.655V14.625C16.3125 15.0726 16.1347 15.5018 15.8182 15.8182C15.5018 16.1347 15.0726 16.3125 14.625 16.3125ZM3.375 2.8125C3.22582 2.8125 3.08274 2.87176 2.97725 2.97725C2.87177 3.08274 2.8125 3.22582 2.8125 3.375V3.42C3.07125 6.75 4.73063 14.625 14.5913 15.1875C14.6652 15.1921 14.7392 15.182 14.8092 15.1579C14.8792 15.1338 14.9438 15.0961 14.9992 15.0469C15.0546 14.9978 15.0997 14.9382 15.132 14.8716C15.1644 14.805 15.1832 14.7327 15.1875 14.6587V11.655L13.0669 10.8056L11.4525 12.4087L11.1825 12.375C6.28875 11.7619 5.625 6.86813 5.625 6.8175L5.59125 6.5475L7.18875 4.93313L6.345 2.8125H3.375Z"
									fill="white"
								/>
							</svg>
							<span>+(380) 98 449 11 49</span>
						</a>
						<a
							href="mailto:tov.agrocorp@gmail.com"
							className="header__contacts-item header__email"
						>
							<svg
								width="18"
								height="19"
								viewBox="0 0 18 19"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M15.75 3.875H2.25C1.95163 3.875 1.66548 3.99353 1.4545 4.2045C1.24353 4.41548 1.125 4.70163 1.125 5V14C1.125 14.2984 1.24353 14.5845 1.4545 14.7955C1.66548 15.0065 1.95163 15.125 2.25 15.125H15.75C16.0484 15.125 16.3345 15.0065 16.5455 14.7955C16.7565 14.5845 16.875 14.2984 16.875 14V5C16.875 4.70163 16.7565 4.41548 16.5455 4.2045C16.3345 3.99353 16.0484 3.875 15.75 3.875ZM14.5125 5L9 8.81375L3.4875 5H14.5125ZM2.25 14V5.51187L8.67938 9.96125C8.77354 10.0266 8.8854 10.0616 9 10.0616C9.1146 10.0616 9.22647 10.0266 9.32063 9.96125L15.75 5.51187V14H2.25Z"
									fill="white"
								/>
							</svg>
							<span>tov.agrocorp@gmail.com</span>
						</a>
					</div>
					<div className="header__actions">
						{!isButtonMoved && <ContactButton />}
						<button
							onClick={onBurgerClick}
							className={`header-burger ${
								isNavOpen ? 'active' : ''
							}`}
						>
							<span></span>
							<span></span>
							<span></span>
						</button>
					</div>
				</div>
			</div>
			<div className={`header__bottom ${isNavOpen ? 'active' : ''}`}>
				<div className="container">
					<nav className="nav header__nav">
						<ul className="nav__list">
							<li className="nav__item">
								<Link
									to={'/'}
									className={`nav__link ${
										useLocation().pathname === '/'
											? 'active'
											: ''
									}`}
								>
									Головна
								</Link>
							</li>
							<li className="nav__item">
								<Link
									to={'catalog'}
									className={`nav__link ${
										useLocation().pathname.includes(
											'catalog'
										)
											? 'active'
											: ''
									}`}
								>
									Продукція
								</Link>
								<ul className="drop-down">
									{catalog.map((item) => (
										<li
											key={item.id}
											className="drop-down__item"
										>
											<Link
												to={`/catalog/${item.id}`}
												className="drop-down__link"
											>
												{item.title}
											</Link>
										</li>
									))}
								</ul>
							</li>
							<li className="nav__item">
								<Link
									to={'news'}
									className={`nav__link ${
										useLocation().pathname === '/news'
											? 'active'
											: ''
									}`}
								>
									Новини
								</Link>
							</li>
							<li className="nav__item">
								<Link
									to={'about-us'}
									className={`nav__link ${
										useLocation().pathname === '/about-us'
											? 'active'
											: ''
									}`}
								>
									Про нас
								</Link>
							</li>
							<li className="nav__item">
								<Link
									to={'contact'}
									className={`nav__link ${
										useLocation().pathname === '/contact'
											? 'active'
											: ''
									}`}
								>
									Контакти
								</Link>
							</li>
							{isButtonMoved && <ContactButton />}
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
