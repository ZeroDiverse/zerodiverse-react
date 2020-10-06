import React from 'react'
import './Skills.scss'
import browser from '../../images/browser.webm'
import code from '../../images/code.webm'
import mobile from '../../images/mobile.webm'

export default function Skills() {

    return (
        <section className="skills-section" id="skills">
            <div className="section-intro">
                <h2>
                    SKILLS
                </h2>
            </div>
            <article className="skills">
                <div className="skill">
                    <video autoPlay loop muted playsInline>
                        <source src={browser}/>
                    </video>
                    <h3 className="skill-title">
                        FRONTEND DEVELOPER
                    </h3>
                    <div className="skill-language">
                        <p className="h4">
                            LANGUAGE I SPEAK
                        </p>
                        <p className="language">
                            HTML5, CSS3, JS, SCSS, Angular^7, VUEJS
                        </p>
                    </div>
                    <div className="skill-tools">
                        <p className="h4">
                            DEV TOOLS
                        </p>
                        <ul>
                            <li>Visual Studio Code</li>
                            <li>Webstorm</li>
                            <li>Codepen.io</li>
                            <li>Github</li>
                        </ul>
                    </div>
                </div>
                <div className="skill">
                    <video autoPlay loop muted playsInline>
                        <source src={code}/>
                    </video>
                    <h3 className="skill-title">
                        Backend Developer
                    </h3>
                    <div className="skill-language">
                        <p className="h4">
                            LANGUAGE I SPEAK
                        </p>
                        <p className="language">
                            HTML5, CSS3, JS, SCSS, Angular^7, ReactJS
                        </p>
                    </div>
                    <div className="skill-tools">
                        <p className="h4">
                            DEV TOOLS
                        </p>
                        <ul>
                            <li>Visual Studio Code</li>
                            <li>Webstorm</li>
                            <li>Codepen.io</li>
                            <li>Github</li>
                        </ul>
                    </div>
                </div>
                <div className="skill">
                    <video autoPlay loop muted playsInline>
                        <source src={mobile}/>
                    </video>
                    <h3 className="skill-title">
                        Mobile Developer
                    </h3>
                    <div className="skill-language">
                        <p className="h4">
                            LANGUAGE I SPEAK
                        </p>
                        <p className="language">
                            HTML5, CSS3, JS, SCSS, Angular^7, VUEJS
                        </p>
                    </div>
                    <div className="skill-tools">
                        <p className="h4">
                            DEV TOOLS
                        </p>
                        <ul>
                            <li>Visual Studio Code</li>
                            <li>Webstorm</li>
                            <li>Codepen.io</li>
                            <li>Github</li>
                        </ul>
                    </div>
                </div>
            </article>
        </section>

    )
}

