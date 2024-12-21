import i18n from 'i18next';
import { initReactI18next, Translation } from 'react-i18next';
import enTranslation from '../locales/en.json';
import esTranslation from '../locales/es.json';

// Configuración de i18next
i18n.use(initReactI18next).init({
	resources: {
		en: { translation: enTranslation },
		es: { translation: esTranslation },
	},
	lng: 'es',
	fallbackLng: 'en', // Idioma por defecto si no se detecta otro
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
