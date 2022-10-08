import React from 'react';

import './News.scss';

const News: React.FC = () => {
	return (
		<section className="section news">
			<div className="container">
				<h2 className="section__title">Новини</h2>
				<div className="news__body">
					<div className="news-item">
						<div className="news-item__column news-item__column_small">
							<iframe
								width="1280"
								height="720"
								src="https://www.youtube.com/embed/GtwghvcP528"
								title="ПРТ-7к агрегат для внесения сухого птичьего"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							></iframe>
						</div>
						<div className="news-item__column">
							<h3 className="news-item__title">
								ПРТ-7к агрегат для внесення сухого пташиного
							</h3>
							<p className="news-item__description">
								Розкидач органічних добрив ПРТ - це
								багатофункціональна сільськогосподарська машина,
								що призначена для переміщення та внесення в
								ґрунт твердих органічних добрив методом
								поверхневого розподілу.
							</p>
						</div>
					</div>
					<hr />
					<div className="news-item">
						<div className="news-item__column">
							<h3 className="news-item__title">
								Культиватора КПГ4.5
							</h3>
							<p className="news-item__description">
								Культиватори серії KPG призначені для суцільного
								передпосівного обробітку ґрунту та обробітку
								парів з одночасним боронуванням, з питомим
								опором ґрунту до 0,5 кгс/см? (0,05 МПа) і
								вологістю до 27%. Для агрегатування
								рекомендується використовувати трактор тягового
								класу 1.4.
							</p>
						</div>
						<div className="news-item__column news-item__column_small">
							<iframe
								width="1280"
								height="720"
								src="https://www.youtube.com/embed/5Kmkoz7STBw"
								title="Культиватора КПГ4.5"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							></iframe>
						</div>
					</div>
					<hr />
					<div className="news-item">
						<div className="news-item__column news-item__column_small">
							<iframe
								width="1280"
								height="720"
								src="https://www.youtube.com/embed/mW9nJ-UyriU"
								title="Кормораздатчика КТУ-10"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							></iframe>
						</div>
						<div className="news-item__column">
							<h3 className="news-item__title">
								Кормороздавача КТУ-10
							</h3>
							<p className="news-item__description">
								Дана модель застосовується для перевезення і
								рівномірної роздачі кормів тваринам на вільних
								вигулах і в спеціалізованих спорудах, з висотою
								і шириною воріт 2,6 метрів, шириною кормового
								проходу не менше 2,2 метрів і висотою годівниць
								до 75 см. За потреби можлива двостороння подача
								корму.
							</p>
						</div>
					</div>
					<hr />
					<div className="news-item">
						<div className="news-item__column">
							<h3 className="news-item__title">
								Сільгосптехніка нашого виробництва
							</h3>
							<p className="news-item__description">
								Наша спеціалізована компанія з виробництва
								сільськогосподарської техніки та обладнання
								дасть вам змогу купити сільгосптехніку в Україні
								за найкращими цінами
							</p>
						</div>
						<div className="news-item__column news-item__column_small">
							<iframe
								width="1280"
								height="720"
								src="https://www.youtube.com/embed/K0bDGYCNkZ4"
								title="Сельхозтехника нашего производства"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							></iframe>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default News;
