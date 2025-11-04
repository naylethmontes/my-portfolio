import { useTranslation } from 'react-i18next';
import Html from '../assets/Html.png';
import Css from '../assets/CSS.png';
import Javascript from '../assets/JS.png';
import ReactLogo from '../assets/React.png';
import Tailwind from '../assets/Tailwind Css.png';
import NodeJs from '../assets/NodeLogo.png';
import PostgreSql from '../assets/postgresql.png';
import Typescript from '../assets/typescript.png';
import Nextjs from '../assets/nextjsicon.png';
import Strapi from '../assets/strapiicon.png';
import Shadcn from '../assets/shadcn.png';
import Card from './CardSkill';
import '../config/i18n';

const About = () => {
	const { t } = useTranslation();
	return (
		<div className="relative " id="about">
			<div className=" py-12 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h2 className="text-base text-purple-400 font-semibold tracking-wide uppercase dark:text-gray-500">
							{t('aboutMe.title')}
						</h2>
						<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-black sm:text-4xl">
							{t('aboutMe.subTitle')}
						</p>
						<p className="mt-4 max-w-xs text-base text-center text-gray-600 mx-auto sm:max-w-md sm:text-lg md:max-w-2xl md:text-xl-900 dark:text-slate-300">
							{t('aboutMe.description')}
						</p>
					</div>
					<div className="mt-10">
						<h3 className="text-2xl text-center font-semibold text-purple-700 uppercase dark:text-gray-300">
							{t('aboutMe.par')}
						</h3>
						<section className="container mx-auto flex flex-col items-center justify-between m-10 gap-10 max-w-full">
							<div className="w-full">
								<div className="about-cards grid grid-cols-[repeat(auto-fill,minmax(min(340px,100%),1fr))] gap-4 mt-12">
									<Card />
								</div>
							</div>
						</section>
					</div>

					<div className=" bg-purple-100 container mx-auto justify-center p-8 dark:bg-gray-500 text-gray-800 dark:text-gray-200">
						<div className=" bg-purple-300 rounded-lg md:p-7 py-7 flex flex-col gap-10 items-center shadow-lg shadow-white-400 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
							<h3 className="text-[24px] mb-3 text-2xl text-center sm:text-lefttext-[24px] font-bold uppercase mb-7text-2xl text-gray-900 dark:text-slate-300">
								{t('aboutMe.skill')}
							</h3>
							<div className=" flex items-center justify-center flex-wrap gap-3 ">
								<div className="border border-white flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-white bg-red-100 dark:bg-gray-500 text-gray-800 dark:text-gray-200 dark:shadow-gray-400">
									<img src={Html} alt="" className="w-10" />
									<span className="font-semibold">HTML</span>
								</div>
								<div className="border border-white flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-white bg-red-100 dark:bg-gray-500 text-gray-800 dark:text-gray-200 dark:shadow-gray-400">
									<img src={Css} alt="" className="w-8" />
									<span className="font-semibold">CSS</span>
								</div>
								<div className="border border-white flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-white bg-red-100 dark:bg-gray-500 text-gray-800 dark:text-gray-200 dark:shadow-gray-400">
									<img src={Nextjs} alt="" className="w-8" />
									<span className="font-semibold">Nextjs</span>
								</div>
								<div className="border border-white flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-white bg-red-100 dark:bg-gray-500 text-gray-800 dark:text-gray-200 dark:shadow-gray-400">
									<img src={Strapi} alt="" className="w-8" />
									<span className="font-semibold">Strapi</span>
								</div>
								<div className="border border-white flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-white bg-red-100 dark:bg-gray-500 text-gray-800 dark:text-gray-200 dark:shadow-gray-400">
									<img src={Shadcn} alt="" className="w-8" />
									<span className="font-semibold">Shadcn</span>
								</div>
								<div className="border border-white flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-white bg-red-100 dark:bg-gray-500 text-gray-800 dark:text-gray-200 dark:shadow-gray-400">
									<img src={Javascript} alt="" className="w-10" />
									<span className="font-semibold">Javascript</span>
								</div>
								<div className="border border-white flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-white bg-red-100 dark:bg-gray-500 text-gray-800 dark:text-gray-200 dark:shadow-gray-400">
									<img src={ReactLogo} alt="" className="w-8 rounded-full" />
									<span className="font-semibold">React</span>
								</div>
								<div className="border border-white flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-white bg-red-100 dark:bg-gray-500 text-gray-800 dark:text-gray-200 dark:shadow-gray-400">
									<img src={Tailwind} alt="" className="w-8 rounded-full" />
									<span className="font-semibold">Tailwind Css</span>
								</div>
								<div className="border border-white flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-white bg-red-100 dark:bg-gray-500 text-gray-800 dark:text-gray-200 dark:shadow-gray-400">
									<img src={NodeJs} alt="" className="w-10" />
									<span className="font-semibold">Node Js</span>
								</div>
								<div className="border border-white flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-white bg-red-100 dark:bg-gray-500 text-gray-800 dark:text-gray-200 dark:shadow-gray-400">
									<img src={PostgreSql} alt="" className="w-10" />
									<span className="font-semibold">PostgreSQL</span>
								</div>
								<div className="border border-white flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-white bg-red-100 dark:bg-gray-500 text-gray-800 dark:text-gray-200 dark:shadow-gray-400">
									<img src={Typescript} alt="" className="w-10" />
									<span className="font-semibold">TypeScript</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
