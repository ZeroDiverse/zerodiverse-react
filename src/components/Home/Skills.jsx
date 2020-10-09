import React from 'react'
import './Skills.scss'
import browser from '../../images/browser.webm'
import code from '../../images/code.webm'
import mobile from '../../images/mobile.webm'
import {withTranslation, Trans} from 'react-i18next'

function Skills() {

    return (
        <section className="skills-section" id="skills">
            <div className="section-intro">
                <h2>
                    <Trans>Skills</Trans>
                </h2>
            </div>
            <article className="skills">
                <div className="skill">
                    <video autoPlay loop muted playsInline>
                        <source src={browser}/>
                    </video>
                    <h3 className="skill-title">
                        <Trans>Frontend Developer</Trans>
                    </h3>
                    <div className="skill-language">
                        <p className="h4">
                            <Trans>Language i speak</Trans>
                        </p>
                        <p className="language">
                            HTML5, CSS3, JS, SCSS, Angular^7, VUEJS
                        </p>
                    </div>
                    <div className="skill-tools">
                        <p className="h4">
                            <Trans>Dev tools</Trans>
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
                        <Trans>Backend Developer</Trans>
                    </h3>
                    <div className="skill-language">
                        <p className="h4">
                            <Trans>Language i speak</Trans>
                        </p>
                        <p className="language">
                            HTML5, CSS3, JS, SCSS, Angular^7, ReactJS
                        </p>
                    </div>
                    <div className="skill-tools">
                        <p className="h4">
                            <Trans>Dev tools</Trans>
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
                        <Trans>Mobile Developer</Trans>
                    </h3>
                    <div className="skill-language">
                        <p className="h4">
                            <Trans>Language i speak</Trans>
                        </p>
                        <p className="language">
                            HTML5, CSS3, JS, SCSS, Angular^7, VUEJS
                        </p>
                    </div>
                    <div className="skill-tools">
                        <p className="h4">
                            <Trans>Dev tools</Trans>
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

export default withTranslation('translations')(Skills)
