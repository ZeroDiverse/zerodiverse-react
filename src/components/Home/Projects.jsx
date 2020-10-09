import React from 'react'
import thanh_giong from "../../images/saint_giong.webp";
import android from '../../images/android.webm'
import dev from '../../images/dev.webm'
import www from '../../images/www.webm'

import './Projects.scss'
import {withTranslation, Trans} from "react-i18next";

function Projects() {
    return (
        <section className="projects-section" id="projects">
            <div className="section-intro">
                <h2><Trans>My projects</Trans></h2>
                <h3><Trans>My Recent Work Here are a few projects I've worked on recently. Want to see more?</Trans> <a style={{color: "#207BE6"}} href="mailto:minhquan.nguyen.etu@univ-lille.fr"><Trans>EMAIL
                    ME</Trans></a></h3>
            </div>
            <article className="project">
                <div className="project-intro">
                    <div className="icon-project">
                        <video autoPlay loop muted playsInline>
                            <source src={android}/>
                        </video>
                    </div>
                    <div className="description">
                        <h3 className="desc"><Trans>Android projects</Trans></h3>
                        <p>
                            Android project based on freeCodeCamp web project, help people finding weather
                            in the local position or
                            weather in others city used OpenWeatherAPI and Retrofit in Kotlin.Android
                            project based on CodeCamp web
                            project, help people finding weather in the local position or weather in others
                            city.
                        </p>
                    </div>
                </div>
                <div className="projects">
                    <div className="project-img">
                        <div className="project-main">
                            <img src={thanh_giong}
                                 alt="Thanh Giong AR"/>
                            <div className="project-content">
                                <p className="project-title">ANDROID AR APP - THANH GIONG</p>
                                <p className="project-description">
                                    Simple Cross-platform project using Unity and Vuforia for a graduated
                                    project in Vietnam.You can simply
                                    find 'Thanh Giong AR' in google
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="project-img">
                        <div className="project-main">
                            <img src={thanh_giong}
                                 alt="Thanh Giong AR"/>
                            <div className="project-content">
                                <p className="project-title">ANDROID AR APP - THANH GIONG</p>
                                <p className="project-description">
                                    Simple Cross-platform project using Unity and Vuforia for a graduated
                                    project in Vietnam.You can simply
                                    find 'Thanh Giong AR' in google
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="project-img">
                        <div className="project-main">
                            <img src={thanh_giong}
                                 alt="Thanh Giong AR"/>
                            <div className="project-content">
                                <p className="project-title">ANDROID AR APP - THANH GIONG</p>
                                <p className="project-description">
                                    Simple Cross-platform project using Unity and Vuforia for a graduated
                                    project in Vietnam.You can simply
                                    find 'Thanh Giong AR' in google
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="project-img">
                        <div className="project-main">
                            <img src={thanh_giong}
                                 alt="Thanh Giong AR"/>
                            <div className="project-content">
                                <p className="project-title">ANDROID AR APP - THANH GIONG</p>
                                <p className="project-description">
                                    Simple Cross-platform project using Unity and Vuforia for a graduated
                                    project in Vietnam.You can simply
                                    find 'Thanh Giong AR' in google
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="project-img">
                        <div className="project-main">
                            <img src={thanh_giong}
                                 alt="Thanh Giong AR"/>
                            <div className="project-content">
                                <p className="project-title">ANDROID AR APP - THANH GIONG</p>
                                <p className="project-description">
                                    Simple Cross-platform project using Unity and Vuforia for a graduated
                                    project in Vietnam.You can simply
                                    find 'Thanh Giong AR' in google
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="project-img">
                        <div className="project-main">
                            <img src={thanh_giong}
                                 alt="Thanh Giong AR"/>
                            <div className="project-content">
                                <p className="project-title">ANDROID AR APP - THANH GIONG</p>
                                <p className="project-description">
                                    Simple Cross-platform project using Unity and Vuforia for a graduated
                                    project in Vietnam.You can simply
                                    find 'Thanh Giong AR' in google
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <article className="project">
                <div className="project-intro">
                    <div className="icon-project">
                        <video autoPlay loop muted playsInline>
                            <source src={dev}/>
                        </video>
                    </div>
                    <div className="description">
                        <h3 className="desc"><Trans>Web frontend projects</Trans></h3>
                        <p>
                            Android project based on freeCodeCamp web project, help people finding weather
                            in the local position or
                            weather in others city used OpenWeatherAPI and Retrofit in Kotlin.Android
                            project based on CodeCamp web
                            project, help people finding weather in the local position or weather in others
                            city.
                        </p>
                    </div>
                </div>
                <div className="projects">
                    <div className="project-img">
                        <div className="project-main">
                            <img src={thanh_giong}
                                 alt="Thanh Giong AR"/>
                            <div className="project-content">
                                <p className="project-title">ANDROID AR APP - THANH GIONG</p>
                                <p className="project-description">
                                    Simple Cross-platform project using Unity and Vuforia for a graduated
                                    project in Vietnam.You can simply
                                    find 'Thanh Giong AR' in google
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="project-img">
                        <div className="project-main">
                            <img src={thanh_giong}
                                 alt="Thanh Giong AR"/>
                            <div className="project-content">
                                <p className="project-title">ANDROID AR APP - THANH GIONG</p>
                                <p className="project-description">
                                    Simple Cross-platform project using Unity and Vuforia for a graduated
                                    project in Vietnam.You can simply
                                    find 'Thanh Giong AR' in google
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="project-img">
                        <div className="project-main">
                            <img src={thanh_giong}
                                 alt="Thanh Giong AR"/>
                            <div className="project-content">
                                <p className="project-title">ANDROID AR APP - THANH GIONG</p>
                                <p className="project-description">
                                    Simple Cross-platform project using Unity and Vuforia for a graduated
                                    project in Vietnam.You can simply
                                    find 'Thanh Giong AR' in google
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <article className="project">
                <div className="project-intro">
                    <div className="icon-project">
                        <video autoPlay loop muted playsInline>
                            <source src={www}/>
                        </video>
                    </div>
                    <div className="description">
                        <h3 className="desc"><Trans>Web application projects</Trans></h3>
                        <p>
                            Android project based on freeCodeCamp web project, help people finding weather
                            in the local position or
                            weather in others city used OpenWeatherAPI and Retrofit in Kotlin.Android
                            project based on CodeCamp web
                            project, help people finding weather in the local position or weather in others
                            city.
                        </p>
                    </div>
                </div>

                <div className="projects">
                    <div className="project-img">
                        <div className="project-main">
                            <img src={thanh_giong}
                                 alt="Thanh Giong AR"/>
                            <div className="project-content">
                                <p className="project-title">ANDROID AR APP - THANH GIONG</p>
                                <p className="project-description">
                                    Simple Cross-platform project using Unity and Vuforia for a graduated
                                    project in Vietnam.You can simply
                                    find 'Thanh Giong AR' in google
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="project-img">
                        <div className="project-main">
                            <img src={thanh_giong}
                                 alt="Thanh Giong AR"/>
                            <div className="project-content">
                                <p className="project-title">ANDROID AR APP - THANH GIONG</p>
                                <p className="project-description">
                                    Simple Cross-platform project using Unity and Vuforia for a graduated
                                    project in Vietnam.You can simply
                                    find 'Thanh Giong AR' in google
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="project-img">
                        <div className="project-main">
                            <img src={thanh_giong}
                                 alt="Thanh Giong AR"/>
                            <div className="project-content">
                                <p className="project-title">ANDROID AR APP - THANH GIONG</p>
                                <p className="project-description">
                                    Simple Cross-platform project using Unity and Vuforia for a graduated
                                    project in Vietnam.You can simply
                                    find 'Thanh Giong AR' in google
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default withTranslation('translations')(Projects)
