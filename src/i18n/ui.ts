export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export const ui = {
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Nosotros',
    'nav.blog': 'Blog',
    'nav.services': 'Servicios',
    'nav.yoga': 'Clases de Yoga',
    'nav.sound': 'Terapia de Sonido',
    'nav.rituals': 'Rituales Sagrados',
    'nav.corporate': 'Bienestar Corporativo',
    'nav.aboutme': 'Sobre Mí',
    'nav.faq': 'Preguntas Frecuentes',
    'nav.contact': 'Contacto',
    'nav.cta': 'Contáctenos',
    'footer.explore': 'Explora',
    'footer.contact': 'Contacto y Ubicación',
    'footer.visit': 'Visítanos',
    'footer.services': 'Servicios',
    'footer.address': 'Cl. 11A Sur #46-12 Barrio La Aguacatala, El Poblado, Antioquia',
    'footer.byline': 'Espacios sagrados para la transformación personal a través del Kundalini Yoga, el sonido y la conciencia.',
    'hero.title': 'Bienvenido a mi sitio',
    'hero.cta': 'Contáctame',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.blog': 'Blog',
    'nav.services': 'Services',
    'nav.yoga': 'Yoga Classes',
    'nav.sound': 'Sound Therapy',
    'nav.rituals': 'Sacred Rituals',
    'nav.corporate': 'Corporate Wellness',
    'nav.aboutme': 'About Me',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.cta': 'Contact Us',
    'footer.explore': 'Explore',
    'footer.contact': 'Contact & Location',
    'footer.visit': 'Visit Us',
    'footer.services': 'Services',
    'footer.address': 'Cl. 11A Sur #46-12 Barrio La Aguacatala, El Poblado, Antioquia',
    'footer.byline': 'Sacred spaces for personal transformation through Kundalini Yoga, sound, and consciousness.',
    'hero.title': 'Welcome to my site',
    'hero.cta': 'Contact Me',
  },
} as const;

export function useTranslations(lang) {
  return function t(key) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}
