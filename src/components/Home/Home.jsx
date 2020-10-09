import React, {useCallback, useRef, useState} from 'react'
import './Home.scss';

import Projects from './Projects'
import Skills from './Skills'
import About from "./About";
import Footer from "../Footer/Footer";
import {withTranslation} from 'react-i18next';

function Home(props) {
    const { t } = props;

    const observer = useRef()
    const rootMargin = '0px';
    const [isScrollDown, setIsScrollDown] = useState(false)

    const scrollRef = useCallback(node => {
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setIsScrollDown(true);
            } else {
                setIsScrollDown(false);
            }
        }, {
            rootMargin
        })
        if (node) observer.current.observe(node)
    }, [])

    const closeMenuIfOpen = () => {
        if (props.menuOpen === true) {
            props.onMenuOpen()
        }
    }

    return (
        <div className={props.menuOpen ? "opacity-30" : ""} onClick={closeMenuIfOpen}>
            <main role="main">
                <section className="introduction-section" id="introduction">
                    <div className="intro-main">
                        <h1>{t("HI I'M ZERO DIVERSE.")}</h1>
                        <p>{t("I am an student, Mobile - Backend developer lived in Lille, France.")}</p>
                        <p>{t("I love learning programming languages, new technologies, and work in a team.")}</p>
                    </div>
                </section>
                <div ref={scrollRef}>
                    <Projects/>
                    <Skills/>
                    <About/>
                </div>
            </main>
            <Footer/>
            <a href="#introduction" aria-label={"Intro"}>
                <div className={!isScrollDown ? "down-arrow" : "down-arrow visible-o1"}>
                    <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20.7455 12.1011C21.003 11.8398 21.1475 11.4868 21.1475 11.1189C21.1475 10.751 21.003 10.3979 20.7455 10.1367L11.9811 1.32191C11.7217 1.06094 11.37 0.913939 11.0031 0.91309C10.6362 0.91224 10.2839 1.05761 10.0233 1.31738L1.25893 10.1321C1.00017 10.3941 0.854935 10.7483 0.854935 11.1176C0.854935 11.4869 1.00017 11.8411 1.25893 12.1031C1.52 12.3616 1.87181 12.5062 2.23816 12.5056C2.6045 12.5051 2.95587 12.3594 3.21615 12.1001L11.0004 4.27309L18.7862 12.1036C19.0466 12.3641 19.3991 12.5101 19.7664 12.5096C20.1336 12.5092 20.4857 12.3622 20.7455 12.1011Z"
                            fill="white"/>
                    </svg>
                </div>
            </a>
        </div>
    )
}

export default withTranslation('translations')(Home);
