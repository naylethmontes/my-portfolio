import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';
import { Quote, Star } from 'lucide-react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../config/i18n';

const Testimonials = () => {
	const { t } = useTranslation();

	const testimonials = [
		{
			id: 1,
			name: 'Emily Rosales',
			rating: 5,
			text: t('testimonials.texts.text'),
		},
		{
			id: 2,
			name: 'Michael Smith',
			rating: 4,
			text: t('testimonials.texts2.text'),
		},
		{
			id: 3,
			name: 'Sarah Thompson',
			rating: 5,
			text: t('testimonials.texts3.text'),
		},
		{
			id: 4,
			name: 'David Rodriguez',
			rating: 5,
			text: t('testimonials.texts4.text'),
		},
		{
			id: 5,
			name: 'Lisa Ladel',
			rating: 4,
			text: t('testimonials.texts5.text'),
		},
	];

	return (
		<div
			id="testimonials"
			className="py-10 bg-white relative dark:bg-gray-800 text-gray-700 dark:text-black"
		>
			<h1 className="uppercase mb-7text-2xl text-center text-2xl lg:text-4xl font-bold text-black">
				{t('testimonls.title')}
			</h1>
			<div className=" max-w-6xl mx-auto py-10 px-5 ">
				<Swiper
					style={{
						'--swiper-pagination-color': '#EF4444',
						'--swiper-pagination-bullet-inactive-color': '#999999',
						'--swiper-pagination-bullet-inactive-opacity': '1',
						'--swiper-pagination-bullet-size': '10px',
						'--swiper-pagination-bullet-horizontal-gap': '6px',
					}}
					modules={[Pagination, Autoplay]}
					loop={true}
					speed={600}
					autoplay={{ delay: 5000 }}
					slidesPerView={3}
					spaceBetween={30}
					breakpoints={{
						320: { slidesPerView: 1 },
						480: { slidesPerView: 1 },
						768: { slidesPerView: 2 },
						1024: { slidesPerView: 3 },
					}}
					pagination={{
						el: '.swiper-pagination',
						type: 'bullets',
						clickable: true,
					}}
					className="mySwiper text-black"
				>
					{testimonials.map((item) => {
						return (
							<SwiperSlide key={item.id} className="min-h-64">
								<div className="border border-purple-400 dark:border-white shadow-md rounded-lg flex flex-col p-4 dark:bg-gray-500 text-gray-700 dark:text-black">
									{item.rating === 4 ? (
										<div className="flex">
											<Star fill="true" />
											<Star fill="true" />
											<Star fill="true" />
											<Star fill="true" />
											<Star />
										</div>
									) : (
										<div className="flex">
											<Star fill="true" />
											<Star fill="true" />
											<Star fill="true" />
											<Star fill="true" />
											<Star fill="true" />
										</div>
									)}
									<p className="py-3">{item.text}</p>
									<div className="flex justify-between items-center">
										<div>
											<h3 className="font-semibold text-purple-800 text-lg dark:text-gray-900">
												{item.name}
											</h3>
										</div>
										<Quote className="text-gray-500" />
									</div>
								</div>
							</SwiperSlide>
						);
					})}
					<div className="swiper-pagination my-10 gap-1 relative"></div>
				</Swiper>
			</div>
		</div>
	);
};

export default Testimonials;
