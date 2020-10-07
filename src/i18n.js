import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        // we init with resources
        resources: {
            en: {
                translations: {
                    "Projects": "Projects",
                    "Skills": "Skills",
                    "About": "About",
                    "Resume": "Resume",
                    "Contact": "Contact",
                    "HI I'M ZERO DIVERSE.": "HI I'M ZERO DIVERSE.",
                    "I am an Android - Full-stack passionate developer lived in Lille, France.": "I am an Android - Full-stack passionate developer lived in Lille, France.",
                    "I love learning programming languages, new technologies, and work in a team.": "I love learning programming languages, new technologies, and work in a team."
                }
            },
            fr: {
                translations: {
                    "Projects": "Projets",
                    "Skills": "Compétences",
                    "About": "À propos de moi",
                    "Resume": "CV",
                    "Contact": "Contact",
                    "HI I'M ZERO DIVERSE.": "BONJOUR JE SUIS ZERO DIVERSE.",
                    "I am an Android - Full-stack passionate developer lived in Lille, France.": "Je suis un fullstack développeur qui habite à Lille, France",
                    "I love learning programming languages, new technologies, and work in a team.": "J'aime apprendre nouveaux technologies, langages de programmation et travailler en équipe "
                }
            }
        },
        fallbackLng: 'en',
        debug: true,

        // have a common namespace used around the full app
        ns: ['translations'],
        defaultNS: 'translations',

        keySeparator: false, // we use content as keys

        interpolation: {
            escapeValue: false, // not needed for react!!
            formatSeparator: ','
        },

        react: {
            wait: true
        }
    });

export default i18n;
