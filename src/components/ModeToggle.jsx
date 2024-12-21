import React, { useState, useEffect } from 'react';

function ModeToggle() {
	const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

	useEffect(() => {
		document.documentElement.classList.toggle('dark', theme === 'dark');
		localStorage.setItem('theme', theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
	};

	return (
		<div className="absolute bottom-5 right-5 md:bottom-10">
			<button
				onClick={toggleTheme}
				className="py-5 px-4 rounded-full w-full md:w-auto bg-gray-200 hover:bg-red-600 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
			>
				{theme === 'light' ? '🌙 ' : '🌞 '}
			</button>
		</div>
	);
}

export default ModeToggle;
