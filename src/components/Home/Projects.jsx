import React from 'react'
import thanh_giong from '../../images/saint_giong.webp'
import sonriceart from '../../images/sonriceart.webp'
import zerodiverse from '../../images/zerodiverse.webp'
import teamhub from '../../images/newcastle-organizer.webp'
import crossblock from '../../images/crossblock.webp'
import pfc from '../../images/pfc.webp'
import progress from '../../images/progress.webp'
import admin from '../../images/admin.webp'
import android from '../../images/android.webm'
import dev from '../../images/dev.webm'
import www from '../../images/www.webm'

import './Projects.scss'
import {Trans, withTranslation} from "react-i18next";


function Projects() {
    return (
        <section className="projects-section" id="projects">
            <div className="section-intro">
                <h2><Trans>My projects</Trans></h2>
                <h3><Trans>My Recent Work Here are a few projects I've worked on recently. Want to see more?</Trans> <a
                    style={{color: "#207BE6"}} href="mailto:minhquan.nguyen.etu@univ-lille.fr"><Trans>EMAIL
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
                        AR and Android fun stuffs here! This is where i placed my projects with Raw Studio and Projects from Developer Android
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
                                    Simple Android project using Unity and Vuforia for a graduated
                                    project in Vietnam.You can simply
                                    find 'Thanh Giong AR' in google
                                </p>
                                <a href={"https://www.behance.net/gallery/98837471/THANH-GIONG-AR-Sach-minh-ha-thc-t-o"}
                                   rel="noopener noreferrer" target={"_blank"}>
                                    <button className={"btn btn-primary"}>See live</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="project-img">
                        <div className="project-main">
                            <img src={progress}
                                 alt="Thanh Giong AR"/>
                            <div className="project-content">
                                <p className="project-title">IN DEVELOPMENT</p>
                                <p className="project-description">

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="project-img">
                        <div className="project-main">
                            <img src={progress}
                                 alt="Thanh Giong AR"/>
                            <div className="project-content">
                                <p className="project-title">IN DEVELOPMENT</p>
                                <p className="project-description">

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
                            Project that i made according to need of me and my best friend ( a designer who collaborate
                            with me through a lot of projects and upon). The technical stacks is surround SPA ( React,
                            NextJS) and SCSS
                        </p>
                    </div>
                </div>
                <div className="projects">
                    <div className="project-img">
                        <div className="project-main">
                            <img src={sonriceart}
                                 alt="Thanh Giong AR"/>
                            <div className="project-content">
                                <p className="project-title">PORTFOLIO FOR MY FRIEND</p>
                                <p className="project-description">
                                    A portfolio for my friend (designer) . Made with NEXTJS, Typescript and SCSS
                                </p>
                                <a href={"https://sonriceart.vercel.app/"} rel="noopener noreferrer" target={"_blank"}>
                                    <button className={"btn btn-primary"}>See live</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="project-img">
                        <div className="project-main">
                            <img src={zerodiverse}
                                 alt="Thanh Giong AR"/>
                            <div className="project-content">
                                <p className="project-title">PERSONAL PORTFOLIO</p>
                                <p className="project-description">
                                    Personal portfolio made with ReactJS, SCSS, mail function with Nodejs, Gmail Api
                                    (Oauth2) and Nodemailer
                                </p>
                                <a href={"https://zerodiverse.com/"} rel="noopener noreferrer" target={"_blank"}>
                                    <button className={"btn btn-primary"}>See live</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="project-img">
                        <div className="project-main">
                            <img src={crossblock}
                                 alt="Thanh Giong AR"/>
                            <div className="project-content">
                                <p className="project-title">Crossblock</p>
                                <p className="project-description">
                                    Part-time project made with NuxtJS: In this project, i create pages according to design, implement new features.
                                </p>
                                <a href={"https://dev.crossblock.de"} rel="noopener noreferrer" target={"_blank"}>
                                    <button className={"btn btn-primary"}>See live</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <button className={"btn btn-primary mt-2"}>See more</button>
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
                            These are the projects i have done from freelance jobs, personal - team projects, some based
                            on Javascript ( ExpressJS - ExpressJS (Typescript) mainly ), front-end with SPA (VueJS,
                            ReactJS) and MongoDB as
                            database.
                        </p>
                    </div>
                </div>

                <div className="projects">
                    <div className="project-img">
                        <div className="project-main">
                            <img src={admin}
                                 alt="betterSpace admin"/>
                            <div className="project-content">
                                <p className="project-title">Digital Hotel</p>
                                <p className="project-description">
                                    Freelance project : frontend with VueJS, backend with ExpressJS and MongoDB as
                                    database.</p>
                                <a href={"https://dev.app.digital-hotel.net/"} rel="noopener noreferrer" target={"_blank"}>
                                    <button className={"btn btn-primary"}>See live</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="project-img">
                        <div className="project-main">
                            <img src={teamhub}
                                 alt="Newcastle organizer"/>
                            <div className="project-content">
                                <p className="project-title">TeamHUB</p>
                                <p className="project-description">
                                    Web application for project management system for team - In Development, Beta testing
                                </p>
                                <a href={"https://teamhub.vercel.app/"} rel="noopener noreferrer" target={"_blank"}>
                                    <button className={"btn btn-primary"}>See live</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="project-img">
                        <div className="project-main">
                            <img src={pfc}
                                 alt="Pierre Feuille Ciseau"/>
                            <div className="project-content">
                                <p className="project-title">TeamHUB</p>
                                <p className="project-description">
                                    Web application with Socket.io, ExpressJS for multiple players rock-paper-scissor game
                                </p>
                                <a href={"https://pfc-univ.herokuapp.com/"} rel="noopener noreferrer" target={"_blank"}>
                                    <button className={"btn btn-primary"}>See live</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <button className={"btn btn-primary mt-2"}>See more</button>
            </article>
        </section>
    )
}

export default withTranslation('translations')(Projects)
