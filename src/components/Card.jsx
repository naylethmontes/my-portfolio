import React from 'react';
import { useTranslation } from 'react-i18next';
import impulsar from '../assets/impulsar.png';
import creativo from '../assets/creativo.png';
import calidad from '../assets/calidad.png';
import '../config/i18n';

const Card = () => {
	const { t } = useTranslation();

	const cardList = [
		{
			img: impulsar,
			title: t('card.boost.title'),
			description: t('card.boost.desc'),
		},

		{
			img: creativo,
			title: t('card.creative.title'),
			description: t('card.creative.desc'),
		},

		{
			img: calidad,
			title: t('card.quality.title'),
			description: t('card.quality.desc'),
		},
	];

	return (
		<>
			{cardList.map((card, id) => (
				<div
					key={id}
					className="flex flex-col cursor-pointer bg-purple-100 justify-center py-6 px-10 text-center items-center rounded-tl-[35px] rounded-br-[35px] shadow-2xl w-full md:min-h-[340px] min-h-[260px] card-item-div dark:bg-gray-400 text-gray-700 dark:text-gray-300"
				>
					<img src={card.img} alt="card-image" className="w-[75px] mb-5" />
					<p className="text-[24px] font-bold uppercase mb-7">{card.title}</p>
					<p className="text-[15px] font-medium leading-2 w-full">
						{card.description}
					</p>
				</div>
			))}
		</>
	);
};

export default Card;
