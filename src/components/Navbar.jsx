import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Logo from '../assets/logonay.png';
import { Menu, X } from 'lucide-react';
import '../config/i18n';
import ModeToggle from './ModeToggle';

const Navbar = () => {
	const { t } = useTranslation();

	const [mobileMenuOpen, setmMobileMenuOpen] = useState(false);
	return (
		<header className="overflow-hidden fixed top-0 left-0 w-full bg-opacity-30 backdrop-blur-md z-50 bg-purple-300 dark:bg-gray-400 text-gray-800 dark:text-gray-200 dark:bg-opacity-40 ">
			<div className=" max-w-7xl mx-auto flex h-14 items-center ">
				<div className="md:mr-4 flex justify-between w-full ">
					<a href="#" className="mr-6 flex items-center space-x-2">
						<img src={Logo} alt="" className="w-20 px-3" />
					</a>
					<div className="flex justify-center items-center h-screen">
						<nav className="md:flex hidden items-center space-x-6 text-lg font-medium ">
							<a href="#" className="hover:text-purple-500">
								{t('nav.home')}
							</a>
							<a href="#about" className="hover:text-purple-500">
								{t('nav.about')}
							</a>
							<a href="#projects" className="hover:text-purple-500">
								{t('nav.project')}
							</a>
							<a href="#testimonials" className="hover:text-purple-500">
								{t('nav.tests')}
							</a>
							<a href="#contact" className="hover:text-purple-500">
								{t('nav.contc')}
							</a>
							<ModeToggle />
						</nav>
					</div>
				</div>

				<button
					className="inline-flex items-center justify-center rounded-md md:hidden dark:text-black "
					onClick={() => setmMobileMenuOpen(!mobileMenuOpen)}
				>
					<span className="sr-only">Open main menu</span>
					{mobileMenuOpen ? (
						<X className="h-6 w-6" aria-hidden="true" />
					) : (
						<Menu className="h-6 w-6" aria-hidden="true" />
					)}
				</button>
			</div>
			{mobileMenuOpen && (
				<div className="md:hidden ">
					<div className="space-y-1 px-2 pb-3 pt-2 ">
						<a
							href="#"
							className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-purple-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-600"
						>
							{t('nav.home')}
						</a>
						<a
							href="#about"
							className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-purple-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-600"
						>
							{t('nav.about')}
						</a>
						<a
							href="#projects"
							className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-purple-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-600"
						>
							{t('nav.project')}
						</a>
						<a
							href="#testimonials"
							className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-purple-100  hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-600"
						>
							{t('nav.tests')}
						</a>
						<a
							href="#contact"
							className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-purple-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-600"
						>
							{t('nav.contc')}
						</a>
					</div>
				</div>
			)}
		</header>
	);
};

export default Navbar;
