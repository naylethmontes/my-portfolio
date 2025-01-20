import React from 'react';
import { useTranslation } from 'react-i18next';
import Hotel from '../assets/hotel.png';
import RickandMorty from '../assets/rick and morty.png';
import Usuarios from '../assets/usuarios.png';
import Clima from '../assets/clima.png';
import Cards from './Cards';
import '../config/i18n';

const Projects = () => {
	const { t } = useTranslation();
	const projectJson = [
		{
			title: t('projects.hotel.title'),
			desc: t('projects.hotel.desc'),
			image: Hotel,
			live: 'https://deliverable-end-react-hotel.netlify.app/',
			github: 'https://github.com/naylethmontes/deliverable-final-react',
		},
		{
			title: t('projects.rickAndMorty.title'),
			desc: t('projects.rickAndMorty.desc'),
			image: RickandMorty,
			live: 'https://deliverable03-rick-and-morty.netlify.app/',
			github: 'https://github.com/naylethmontes/deliverable03-rick-and-morty',
		},
		{
			title: t('projects.crud.title'),
			desc: t('projects.crud.desc'),
			image: Usuarios,
			live: 'https://deliverable04-users-react-deploy.netlify.app/',
			github: 'https://github.com/naylethmontes/deliverable04-usuarios',
		},
		{
			title: t('projects.weather.title'),
			desc: t('projects.weather.desc'),
			image: Clima,
			live: 'https://deliverable2-weather-app.netlify.app/',
			github: 'https://github.com/naylethmontes/deliverable02-s02',
		},
	];

	return (
		<section
			id="projects"
			className="relative bg-purple-200 py-10 px-4 dark:bg-gray-500 text-gray-800 dark:text-gray-200"
		>
			<div className="mb-16 max-w-7xl mx-auto dark:bg-gray-800 text-gray-700 dark:text-black">
				<h2 className="text-3xl font-bold mb-8 text-black border-b border-purple-600 w-max pb-4">
					{t('project.title')}
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
					{projectJson.map((items, index) => {
						return <Cards key={items.id || index} item={items} />;
					})}
				</div>
			</div>
		</section>
	);
};

export default Projects;
