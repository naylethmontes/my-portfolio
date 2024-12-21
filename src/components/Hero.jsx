import React from 'react';
import { useTranslation } from 'react-i18next';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import hero from '../assets/fotoheroia.png';
import reactLogo from '../assets/React.png';
import reduxLogo from '../assets/Redux.png';
import tailwind from '../assets/Tailwind Css.png';
import '../config/i18n';
import ShinyEffect from './ShinyEffect';
import ModeToggle from './ModeToggle';

const Hero = () => {
	const { t, i18n } = useTranslation();

	const toggleLanguage = () => {
		const newLang = i18n.language === 'es' ? 'en' : 'es';
		i18n.changeLanguage(newLang);
		localStorage.setItem('language', newLang);
	};

	const whatsappLink = 'https://wa.me/573156538991';
	const emailLink = 'mailto:montesnayleth.99@gmail.com';

	const handleContact = () => {
		window.open(whatsappLink, '_blank');
		window.open(emailLink, '_blank');
	};
	return (
		<section className="px-7 top-0 mt-18 max-w-[1600px] mx-auto relative  dark:bg-gray-500 text-black dark:text-black">
			<div className="py-7">
				<div className="flex flex-col md:flex-row items-center lg:h-[90vh] justify-between ">
					<div className="md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10 text-center md:text-left ">
						<div className="w-full flex justify-center md:justify-start gap-6 ">
							<motion.div
								initial={{ opacity: 0, y: -50 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 1 }}
							>
								<TypeAnimation
									sequence={[
										'Web Dev',
										1000,
										'Fullstack',
										1000,

										1000,
										'Web Design',
									]}
									speed={50}
									repeat={Infinity}
									className="font-bold text-orange-800 text-xl md:text-5xl italic- mb-4"
								/>
								<motion.p
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									viewport={{ once: true }}
									transition={{ duration: 1, delay: 0.5 }}
									className="text-gray-200 md:text-6xl text-4xl tracking-tight mb-4"
								>
									Hey, {t('hero.title')} <br />
									<span className="text-orange-600">Nayleth</span>
								</motion.p>
								<motion.p
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									viewport={{ once: true }}
									transition={{ duration: 1, delay: 1 }}
									className="text-gray-900 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
								>
									{t('hero.description')}
								</motion.p>
							</motion.div>
						</div>

						<div className="w-full flex gap-4 items-center justify-center md:justify-start">
							<button
								onClick={toggleLanguage}
								className="btn  py-2 px-3 rounded-md text-sm hover:bg-red-400 dark:bg-gray-800 text-gray-800 dark:text-white dark:hover:bg-gray-600"
							>
								{i18n.language === 'en' ? 'Español' : 'English'}
							</button>

							<button className="bg-black text-white px-3 py-2 w-max rounded-md hover:bg-red-500 dark:hover:bg-gray-700">
								<a href={t('hero.cvLink')} download target="_blank">
									{t('hero.cvButton')}
								</a>
							</button>
							<button
								onClick={handleContact}
								className="bg-black text-white px-3 py-2 w-max rounded-md hover:bg-red-500 dark:hover:bg-gray-700"
							>
								{t('hero.contac')}
							</button>
						</div>
					</div>
					<div className="md:w-1/2 relative flex justify-center items-end">
						<motion.img
							src={hero}
							className="w-[300px] md:w-[500px]"
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 1 }}
						/>

						<img
							src={reactLogo}
							alt=""
							className="absolute w-10 top-36 left-0 rounded-full md:hidden"
						/>
						<img
							src={reduxLogo}
							alt=""
							className="absolute w-10 top-0 right-5 md:hidden"
						/>
						<img
							src={tailwind}
							alt=""
							className="absolute w-10 rounded-full right-0 bottom-36 md:hidden"
						/>
					</div>
					<div className="absolute inset-0 hidden md:block -z-10">
						<ShinyEffect left={0} top={0} size={1400} />
					</div>
				</div>
			</div>
			<div className="ml-4">
				<ModeToggle />
			</div>
		</section>
	);
};

export default Hero;
