import React from 'react';
import { useTranslation } from 'react-i18next';
import '../config/i18n';

const Footer = () => {
	const { t } = useTranslation();

	return (
		<footer className="relative bg-white py-4 dark:bg-gray-300 text-gray-700 dark:text-black">
			<div className="container mx-auto px-4 text-center">
				<p>&copy; 2024, {t('footer.title')}</p>
			</div>
		</footer>
	);
};

export default Footer;
