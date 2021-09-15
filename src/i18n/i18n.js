import i18n from 'i18next';
import {initReactI18next} from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        // we init with resources
        resources:
        {
            en: {
                translations: {
                    "Projects": "Projects",
                    "Skills": "Skills",
                    "About": "About",
                    "Resume": "Resume",
                    "Contact": "Contact",
                    "HI I'M ZERO DIVERSE.": "HI I'M ZERO DIVERSE.",
                    "I am an student, Mobile - Backend developer lived in Lille, France.": "I am an student, Mobile - Backend developer lived in Lille, France.",
                    "I love learning programming languages, new technologies, and work in a team.": "I love learning programming languages, new technologies, and work in a team.",
                    "My projects": "My projects",
                    "Frontend Developer": "Frontend Developer",
                    "Backend Developer": "Backend Developer",
                    "Mobile Developer": "Mobile Developer",
                    "Web frontend projects": "Web frontend projects",
                    "Web application projects": "Web application projects",
                    "Language i speak": "Language i speak",
                    "Dev tools": "Dev tools",
                    "More about me": "More about me",
                    "I'm a student from Licence 3 Computer Science at University of Lille and also the Co-Creator of Trostrum Networks. I come from Hanoi, Vietnam and i want to become an software developer/engineering. And i'm am looking for my first professional experience in France ! And here's another thing, i love helping people with their projects. Answering and solving their questions, because it's the best way to learn new stuffs for me.": "I'm a student from Licence 3 Computer Science at University of Lille and also the Co-Creator of Trostrum Networks. I come from Hanoi, Vietnam and i want to become an software developer/engineering. And i'm am looking for my first professional experience in France ! And here's another thing, i love helping people with their projects. Answering and solving their questions, because it's the best way to learn new stuffs for me.",
                    "Collaborating": "Collaborating",
                    "If you have a project that you want to get started, think you need my help with something or just fancy saying hey, then get in touch.": "If you have a project that you want to get started, think you need my help with something or just fancy saying hey, then get in touch. ",
                    "CONTACT": "CONTACT",
                    "Technology is best when it brings people together": "Technology is best when it brings people together",
                    "Powered by SCSS": "Powered by SCSS",
                    "My Recent Work Here are a few projects I've worked on recently. Want to see more?": "My Recent Work Here are a few projects I've worked on recently. Want to see more?",
                    "EMAIL ME": "EMAIL ME",
                    "You message was sent successfully!": "You message was sent successfully!",
                    "Thanks for CONTACTING ME!": "Thanks for CONTACTING ME!",
                    "Firstname": "Firstname",
                    "Lastname": "Lastname",
                    "Email": "Email",
                    "Subject": "Subject",
                    "Message": "Message",
                    "Send": "Send"
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
                    "I am an student, Mobile - Backend developer lived in Lille, France.": "Je suis un étudiant - backend développeur qui habite à Lille, France",
                    "I love learning programming languages, new technologies, and work in a team.": "J'aime apprendre nouveaux technologies, langages de programmation et travailler en équipe ",
                    "My projects": "Mes projets",
                    "More about me": "En savoir plus sur moi",
                    "I'm a student from Licence 3 Computer Science at University of Lille and also the Co-Creator of Trostrum Networks. I come from Hanoi, Vietnam and i want to become an software developer/engineering. And i'm am looking for my first professional experience in France ! And here's another thing, i love helping people with their projects. Answering and solving their questions, because it's the best way to learn new stuffs for me.": "Je m'appelle Quan NGUYEN, Je suis étudiant en Licence 3 Informatique à l'Université de Lille. Je suis aussi co-fondateur de T.Rostrum Networks. Je viens d'Hanoi, Vietnam et je veux dévenir un genie logiciel. Je suis entrain de chercher mon premiere éxpérience en France, donc si vous êtes intéressé par mon portfiolio, veuillez-vous me contacter et on peut se discuter.",
                    "Android projects": "Mobile projets",
                    "Web frontend projects": "Web frontend projets",
                    "Web application projects": "Web application projets",
                    "Frontend Developer": "Développeur frontend",
                    "Backend Developer": "Développer backend",
                    "Mobile Developer": "Déveloper mobile",
                    "Language i speak": "Langages je parle",
                    "Dev tools": "Outils",
                    "Collaborating": "Collaboration",
                    "If you have a project that you want to get started, think you need my help with something or just fancy saying hey, then get in touch.": "Si vous avez un projet à commencer, une idée ou des problèmes, envoyez-moi une message !!",
                    "CONTACT": "CONTACT",
                    "Technology is best when it brings people together": "Informatique : Alliance d'une science inexacte et d'une activité humaine faillible.",
                    "Powered by SCSS": "Fabriqué en SCSS",
                    "My Recent Work Here are a few projects I've worked on recently. Want to see more?": "Mes travails - Ici ce sont quelques projets que je faire récemment.",
                    "EMAIL ME": "Envoyez-moi un email si vous voulez regarder plus.",
                    "You message was sent successfully!": "Votre message a été bien envoyé! Merci beaucoup!",
                    "Thanks for CONTACTING ME!": "Merci pour ME CONTACTER",
                    "Firstname": "Prénom",
                    "Lastname": "Nom",
                    "Email": "Email",
                    "Subject": "Sujet",
                    "Message": "Message",
                    "Send": "Envoyez"
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
