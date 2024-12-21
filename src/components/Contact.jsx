import { useState } from 'react';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import Whatsapp from '../assets/what.png';
import Correo from '../assets/correocolor.png';
import linkedin from '../assets/linkcolor.png';
import Github from '../assets/github.png';
import Lottie from 'lottie-react';
import contact from '../assets/contact.json';
import '../config/i18n';

const Contact = () => {
	const { t } = useTranslation();

	const refForm = useRef();
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [successMessage, setSuccessMessage] = useState('');

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		setSuccessMessage('¡Enviado con éxito!');

		setFormData({ name: '', email: '', message: '' });

		setTimeout(() => {
			setSuccessMessage('');
		}, 3000);

		const serviceId = 'service_nruxnix';
		const templateId = 'template_tqpog6c';
		const key = 'HK4pTTboIdlVRgLqD';

		emailjs
			.sendForm(serviceId, templateId, refForm.current, key)
			.then()
			.catch();

		setFormData({
			name: '',
			email: '',
			message: '',
		});
	};

	return (
		<section
			id="contact"
			className="z-50 bg-red-300 relative py-10 px-5 md:px-0 dark:bg-gray-500 text-gray-800 dark:text-gray-200"
		>
			<div className="mb-16 max-w-7xl mx-auto">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="md:w-1/2 mb-8 ml-2 md:mb-0">
						<h2 className="text-3xl font-bold mb-3 text-red-600 dark:text-gray-300">
							{t('contactMe.title')}
						</h2>
						<p className="mb-4 text-black/85">{t('contactMe.subTitle')}</p>
						<div className="flex space-x-4">
							<a
								href="#"
								className="text-foreground/60 hover:text-foreground/80"
							>
								<img src={Whatsapp} alt="" className="h-6 w-6" />
							</a>
							<a
								href="#"
								className="text-foreground/60 hover:text-foreground/80"
							>
								<img src={Correo} alt="" className="h-6 w-6" />
							</a>
							<a
								href="#"
								className="text-foreground/60 hover:text-foreground/80"
							>
								<img src={linkedin} alt="" className="h-6 w-6 " />
							</a>
							<a
								href="#"
								className="text-foreground/60 hover:text-foreground/80"
							>
								<img src={Github} alt="" className="h-6 w-6 " />
							</a>
						</div>
						<Lottie
							animationData={contact}
							className="w-[350px] mx-auto lg:w-[500px]"
						/>
					</div>
					<form
						ref={refForm}
						action=""
						onSubmit={handleSubmit}
						className="w-full md:w-1/2 bg-red-100 rounded-lg border border-red-300 shadow-lg shadow-red-500 p-10 dark:bg-gray-300 text-gray-800 dark:text-gray-200 dark:shadow-gray-600"
					>
						<h1 className="text-gray-900 text-4xl font-bold mb-7">
							{t('contactMe.contac')}
						</h1>
						<div className="mb-4">
							<label
								htmlFor="name"
								className="block text-sm font-medium text-gray-700"
							>
								{t('contactMe.name')}
							</label>
							<input
								name="name"
								type="text"
								placeholder={t('placeholder.name')}
								value={formData.name}
								onChange={handleChange}
								required
								className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:text-gray-700"
							/>
						</div>
						<div className="mb-4">
							<label
								name="email"
								className="block text-sm font-medium text-gray-700"
							>
								{t('contactMe.email')}
							</label>
							<input
								name="email"
								id="email"
								type="email"
								placeholder={t('placeholder.email')}
								value={formData.email}
								onChange={handleChange}
								required
								className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:text-gray-700"
							/>
						</div>
						<div className="mb-4">
							<label
								htmlFor="message"
								className="block text-sm font-medium text-gray-700"
							>
								{t('contactMe.message')}
							</label>
							<textarea
								name="message"
								id=""
								type="text"
								placeholder={t('placeholder.message')}
								value={formData.message}
								onChange={handleChange}
								required
								className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50  dark:text-gray-700 "
							/>
						</div>
						<button className="btn hover:bg-red-700 dark:bg-red-800 text-gray-800 dark:text-gray-200 dark:hover:bg-gray-600">
							{t('contactMe.send')}
						</button>
						{successMessage && (
							<p className="mt-5 text-center text-red-700 font-medium dark:text-gray-800">
								{successMessage}
							</p>
						)}
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
