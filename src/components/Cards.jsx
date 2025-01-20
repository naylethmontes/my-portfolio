import { useTranslation } from 'react-i18next';
import '../config/i18n';

const Cards = ({ item }) => {
	const { t } = useTranslation();
	return (
		<div className="border border-purple-400 rounded-lg w-[350px] lg:w-[400px] bg-blue-50 dark:bg-gray-300 text-gray-800 dark:text-black ">
			<img src={item.image} alt="" className="rounded-lg" />
			<div className="p-4">
				<h1 className="font-semibold text-xl mb-2">{item.title}</h1>
				<p>{item.desc}</p>
				<div className="flex gap-3 mt-4 ">
					<button className="bg-purple-300 hover:bg-purple-500 text-white px-3 py-2 rounded-md dark:bg-gray-500 dark:text-white dark:hover:bg-gray-400">
						<a href={item.live} target="_blank">
							{t('cards.title')}
						</a>
					</button>
					<button className="bg-black hover:bg-purple-500  text-white px-3 py-2 rounded-md dark:bg-gray-800  dark:text-gray-200 dark:hover:bg-gray-400 ">
						<a href={item.github} target="_blank" className="flex gap-1 ">
							{t('cards.subTitle')}
						</a>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Cards;
