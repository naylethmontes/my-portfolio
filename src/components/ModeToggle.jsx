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
		<div className="">
			<button
				onClick={toggleTheme}
				className="py-2 px-3 rounded-full w-full md:w-auto bg-gray-200 drop-shadow-md hover:bg-purple-400 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
			>
				{theme === 'light' ? '🌙 ' : '🌞 '}
			</button>
		</div>
	);
}

export default ModeToggle;

// el className para el botom absolute bottom-5 right-5 md:bottom-10
