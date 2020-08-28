import React, { useState, useRef, useCallback } from 'react'
import './Home.scss';
import { Link } from 'react-router-dom';

export default function Home() {
    const observer = useRef()
    const rootMargin = '0px';
    const [isScrollDown, setIsScrollDown] = useState(false)

    const scrollRef = useCallback(node => {
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setIsScrollDown(true);
            }
            else{
                setIsScrollDown(false);
            }
        }, {
            rootMargin
        })
        if (node) observer.current.observe(node)
    }, [isScrollDown])

    return (
        <div>
            <main role="main">
                <section className="introduction-section" id="introduction">
                    <div className="intro-main">
                        <h1>HI I'M ZERO DIVERSE.</h1>
                        <p>
                            I am an Android - Full-stack passionate developer lived in Lille, France.</p>
                        <p>I love learning programming languages, programming, and work in a team.</p>
                    </div>
                </section>
                <div ref={scrollRef}>
                    <section className="projects-section" id="projects">
                        <div className="section-intro">
                            <h2>MY PROJECTS</h2>
                            <h3>My Recent Work Here are a few projects I've worked on recently. Want to see more? EMAIL ME</h3>
                        </div>
                        <article className="project">
                            <div className="project-intro">
                                <div className="icon-project">
                                    <video autoPlay loop muted playsInline>
                                        <source src="https://zerodiverse.s3.eu-west-3.amazonaws.com/webm/android.webm" />
                                    </video>
                                </div>
                                <div className="description">
                                    <h3 className="desc">ANDROID PROJECTS</h3>
                                    <p>
                                        Android project based on freeCodeCamp web project, help people finding weather in the local position or
                                        weather in others city used OpenWeatherAPI and Retrofit in Kotlin.Android project based on CodeCamp web
                                        project, help people finding weather in the local position or weather in others city.
              </p>
                                </div>
                            </div>
                            <div className="projects">
                                <div className="project-img">
                                    <div>
                                        <img src="https://zerodiverse.s3.eu-west-3.amazonaws.com/webp/saint_giong.webp" alt="Thanh Giong AR" />
                                        <div className="project-content">
                                            <p className="project-title">ANDROID AR APP - THANH GIONG</p>
                                            <p className="project-description">
                                                Simple Cross-platform project using Unity and Vuforia for a graduated project in Vietnam.You can simply
                                                find 'Thanh Giong AR' in google
                  </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="project-img">
                                    <div>
                                        <img src="https://zerodiverse.s3.eu-west-3.amazonaws.com/webp/saint_giong.webp" alt="Thanh Giong AR" />
                                        <div className="project-content">
                                            <p className="project-title">ANDROID AR APP - THANH GIONG</p>
                                            <p className="project-description">
                                                Simple Cross-platform project using Unity and Vuforia for a graduated project in Vietnam.You can simply
                                                find 'Thanh Giong AR' in google
                  </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="project-img">
                                    <div>
                                        <img src="https://zerodiverse.s3.eu-west-3.amazonaws.com/webp/saint_giong.webp" alt="Thanh Giong AR" />
                                        <div className="project-content">
                                            <p className="project-title">ANDROID AR APP - THANH GIONG</p>
                                            <p className="project-description">
                                                Simple Cross-platform project using Unity and Vuforia for a graduated project in Vietnam.You can simply
                                                find 'Thanh Giong AR' in google
                  </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="project-img">
                                    <div>
                                        <img src="https://zerodiverse.s3.eu-west-3.amazonaws.com/webp/saint_giong.webp" alt="Thanh Giong AR" />
                                        <div className="project-content">
                                            <p className="project-title">ANDROID AR APP - THANH GIONG</p>
                                            <p className="project-description">
                                                Simple Cross-platform project using Unity and Vuforia for a graduated project in Vietnam.You can simply
                                                find 'Thanh Giong AR' in google
                  </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="project-img">
                                    <div>
                                        <img src="https://zerodiverse.s3.eu-west-3.amazonaws.com/webp/saint_giong.webp" alt="Thanh Giong AR" />
                                        <div className="project-content">
                                            <p className="project-title">ANDROID AR APP - THANH GIONG</p>
                                            <p className="project-description">
                                                Simple Cross-platform project using Unity and Vuforia for a graduated project in Vietnam.You can simply
                                                find 'Thanh Giong AR' in google
                  </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="project-img">
                                    <div>
                                        <img src="https://zerodiverse.s3.eu-west-3.amazonaws.com/webp/saint_giong.webp" alt="Thanh Giong AR" />
                                        <div className="project-content">
                                            <p className="project-title">ANDROID AR APP - THANH GIONG</p>
                                            <p className="project-description">
                                                Simple Cross-platform project using Unity and Vuforia for a graduated project in Vietnam.You can simply
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
                                        <source src="https://zerodiverse.s3.eu-west-3.amazonaws.com/webm/dev.webm" />
                                    </video>
                                </div>
                                <div className="description">
                                    <h3 className="desc">WEB FRONTEND PROJECTS</h3>
                                    <p>
                                        Android project based on freeCodeCamp web project, help people finding weather in the local position or
                                        weather in others city used OpenWeatherAPI and Retrofit in Kotlin.Android project based on CodeCamp web
                                        project, help people finding weather in the local position or weather in others city.
              </p>
                                </div>
                            </div>
                            <div className="projects">
                                <div className="project-img">
                                    <div>
                                        <img src="https://zerodiverse.s3.eu-west-3.amazonaws.com/webp/saint_giong.webp" alt="Thanh Giong AR" />
                                        <div className="project-content">
                                            <p className="project-title">ANDROID AR APP - THANH GIONG</p>
                                            <p className="project-description">
                                                Simple Cross-platform project using Unity and Vuforia for a graduated project in Vietnam.You can simply
                                                find 'Thanh Giong AR' in google
                  </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="project-img">
                                    <div>
                                        <img src="https://zerodiverse.s3.eu-west-3.amazonaws.com/webp/saint_giong.webp" alt="Thanh Giong AR" />
                                        <div className="project-content">
                                            <p className="project-title">ANDROID AR APP - THANH GIONG</p>
                                            <p className="project-description">
                                                Simple Cross-platform project using Unity and Vuforia for a graduated project in Vietnam.You can simply
                                                find 'Thanh Giong AR' in google
                  </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="project-img">
                                    <div>
                                        <img src="https://zerodiverse.s3.eu-west-3.amazonaws.com/webp/saint_giong.webp" alt="Thanh Giong AR" />
                                        <div className="project-content">
                                            <p className="project-title">ANDROID AR APP - THANH GIONG</p>
                                            <p className="project-description">
                                                Simple Cross-platform project using Unity and Vuforia for a graduated project in Vietnam.You can simply
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
                                        <source src="https://zerodiverse.s3.eu-west-3.amazonaws.com/webm/www.webm" />
                                    </video>
                                </div>
                                <div className="description">
                                    <h3 className="desc">WEB APPLICATION PROJECTS</h3>
                                    <p>
                                        Android project based on freeCodeCamp web project, help people finding weather in the local position or
                                        weather in others city used OpenWeatherAPI and Retrofit in Kotlin.Android project based on CodeCamp web
                                        project, help people finding weather in the local position or weather in others city.
              </p>
                                </div>
                            </div>

                            <div className="projects">
                                <div className="project-img">
                                    <div>
                                        <img src="https://zerodiverse.s3.eu-west-3.amazonaws.com/webp/saint_giong.webp" alt="Thanh Giong AR" />
                                        <div className="project-content">
                                            <p className="project-title">ANDROID AR APP - THANH GIONG</p>
                                            <p className="project-description">
                                                Simple Cross-platform project using Unity and Vuforia for a graduated project in Vietnam.You can simply
                                                find 'Thanh Giong AR' in google
                  </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="project-img">
                                    <div>
                                        <img src="https://zerodiverse.s3.eu-west-3.amazonaws.com/webp/saint_giong.webp" alt="Thanh Giong AR" />
                                        <div className="project-content">
                                            <p className="project-title">ANDROID AR APP - THANH GIONG</p>
                                            <p className="project-description">
                                                Simple Cross-platform project using Unity and Vuforia for a graduated project in Vietnam.You can simply
                                                find 'Thanh Giong AR' in google
                  </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="project-img">
                                    <div>
                                        <img src="https://zerodiverse.s3.eu-west-3.amazonaws.com/webp/saint_giong.webp" alt="Thanh Giong AR" />
                                        <div className="project-content">
                                            <p className="project-title">ANDROID AR APP - THANH GIONG</p>
                                            <p className="project-description">
                                                Simple Cross-platform project using Unity and Vuforia for a graduated project in Vietnam.You can simply
                                                find 'Thanh Giong AR' in google
                  </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </section>
                    <section className="skills-section" id="skills">
                        <div className="section-intro">
                            <h2>
                                SKILLS
          </h2>
                        </div>
                        <article className="skills">
                            <div className="skill">
                                <video autoPlay loop muted playsInline>
                                    <source src="https://zerodiverse.s3.eu-west-3.amazonaws.com/webm/browser.webm" />
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
                                    <source src="https://zerodiverse.s3.eu-west-3.amazonaws.com/webm/code.webm" />
                                </video>
                                <h3 className="skill-title">
                                    Backend Developer
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
                                    <source src="https://zerodiverse.s3.eu-west-3.amazonaws.com/webm/mobile.webm" />
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
                    <section className="about-section" id="about">
                        <div className="section-intro">
                            <video autoPlay loop muted playsInline>
                                <source src="https://zerodiverse.s3.eu-west-3.amazonaws.com/webm/pc.webm" />
                            </video>
                        </div>
                        <div className="section-main">
                            <h2>More about me</h2>
                            <p>
                                I'm a student from Licence 3 at University of Lille. Also i'm the co-founder of T. Rostrum Networks. I come
                                from Hanoi, Vietnam and i want to become an application developer ( Web Application and Mobile Application).
                                I've done many personal projects but i never had a professional experience. And i'm still currently looking
                                for it ! And here's another thing, i love helping people with their projects. Collaboration or answer their
                                question, because it's the best way to learn new things for me.
          </p>
                        </div>
                    </section>
                </div>
            </main>

            <footer>
                <section className="collab-section" id="collab">
                    <h2>
                        Collaborating?
        </h2>
                    <p>
                        If you have a project that you want to get started, think you need my help with something or just fancy saying
          hey, then get in touch. </p>
                    <Link to="/contact">
                        <button className="btn btn-primary">
                            CONTACT
          </button>
                    </Link>
                </section>
                <div>
                    <h3>
                        “Technology is best when it brings people together”
        </h3>
                </div>
                <div className="footer-socials">
                    <ul className="footer-socials_links">
                        <li className="footer-socials_link">
                            <a href="https://github.com/ZeroDiverse" aria-label="github">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.6537 25.2848C10.6537 25.4102 10.506 25.5104 10.3197 25.5104C10.1078 25.5292 9.96013 25.4289 9.96013 25.2848C9.96013 25.1595 10.1078 25.0593 10.2941 25.0593C10.4867 25.0405 10.6537 25.1408 10.6537 25.2848ZM8.65651 25.0029C8.61156 25.1282 8.73999 25.2723 8.93265 25.3099C9.09961 25.3726 9.29226 25.3099 9.33079 25.1846C9.36932 25.0593 9.24731 24.9152 9.05466 24.8588C8.88769 24.815 8.70146 24.8776 8.65651 25.0029ZM11.4949 24.8964C11.3087 24.9403 11.1803 25.0593 11.1995 25.2034C11.2188 25.3287 11.3858 25.4102 11.5784 25.3663C11.7646 25.3224 11.8931 25.2034 11.8738 25.0781C11.8545 24.9591 11.6812 24.8776 11.4949 24.8964ZM15.7204 0.888672C6.81347 0.888672 0 7.48579 0 16.1754C0 23.1234 4.48238 29.069 10.8849 31.1615C11.7068 31.3056 11.9958 30.8106 11.9958 30.4034C11.9958 30.015 11.9766 27.8723 11.9766 26.5567C11.9766 26.5567 7.48133 27.4964 6.53734 24.6897C6.53734 24.6897 5.80526 22.8665 4.75209 22.3967C4.75209 22.3967 3.28151 21.413 4.85484 21.4318C4.85484 21.4318 6.45385 21.5571 7.33363 23.0482C8.73999 25.4665 11.0968 24.7711 12.0151 24.3576C12.1628 23.3552 12.5802 22.6598 13.0426 22.2463C9.45281 21.8579 5.83094 21.3504 5.83094 15.3234C5.83094 13.6005 6.319 12.7359 7.34648 11.6333C7.17951 11.226 6.63366 9.547 7.51344 7.37928C8.85559 6.97205 11.9444 9.07085 11.9444 9.07085C13.2288 8.72001 14.6095 8.53832 15.9773 8.53832C17.3451 8.53832 18.7258 8.72001 20.0102 9.07085C20.0102 9.07085 23.099 6.96579 24.4412 7.37928C25.3209 9.55326 24.7751 11.226 24.6081 11.6333C25.6356 12.7422 26.2649 13.6068 26.2649 15.3234C26.2649 21.3692 22.4825 21.8516 18.8928 22.2463C19.4836 22.7412 19.9845 23.681 19.9845 25.1533C19.9845 27.2646 19.9652 29.8771 19.9652 30.3909C19.9652 30.7981 20.2606 31.2931 21.0762 31.149C27.4979 29.069 31.8519 23.1234 31.8519 16.1754C31.8519 7.48579 24.6274 0.888672 15.7204 0.888672ZM6.24194 22.4969C6.15845 22.5595 6.17772 22.7036 6.28689 22.8227C6.38964 22.9229 6.53734 22.9668 6.62082 22.8853C6.7043 22.8227 6.68504 22.6786 6.57587 22.5595C6.47312 22.4593 6.32542 22.4154 6.24194 22.4969ZM5.54839 21.9894C5.50343 22.0709 5.56765 22.1711 5.69609 22.2338C5.79883 22.2964 5.92727 22.2776 5.97222 22.1899C6.01717 22.1085 5.95296 22.0082 5.82452 21.9456C5.69609 21.908 5.59334 21.9268 5.54839 21.9894ZM7.62903 24.2198C7.52628 24.3012 7.56481 24.4892 7.71251 24.6082C7.86021 24.7523 8.04644 24.7711 8.12993 24.6709C8.21341 24.5894 8.17488 24.4015 8.04645 24.2824C7.90517 24.1383 7.71251 24.1195 7.62903 24.2198ZM6.89695 23.2988C6.79421 23.3615 6.79421 23.5244 6.89695 23.6685C6.9997 23.8126 7.17309 23.8752 7.25657 23.8126C7.35932 23.7311 7.35932 23.5682 7.25657 23.4241C7.16667 23.28 6.9997 23.2174 6.89695 23.2988Z"
                                        fill="white" />
                                </svg>
                            </a>
                        </li>
                        <li className="footer-socials_link">
                            <a href="https://www.facebook.com/profile.php?id=100035922562774" aria-label="facebook">
                                <svg width="19" height="32" viewBox="0 0 19 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M17.4608 18.0428L18.3825 12.2378H12.6198V8.47074C12.6198 6.88259 13.4248 5.33454 16.0058 5.33454H18.6256V0.392181C18.6256 0.392181 16.2482 0 13.9751 0C9.22936 0 6.12733 2.78035 6.12733 7.81356V12.2378H0.852051V18.0428H6.12733V32.0762H12.6198V18.0428H17.4608Z"
                                        fill="white" />
                                </svg>
                            </a>
                        </li>
                        <li className="footer-socials_link">
                            <a href="https://www.behance.net/minhquannguyn" aria-label="Behance">
                                <svg width="38" height="24" viewBox="0 0 38 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M15.5432 10.8634C17.5879 9.91111 18.6553 8.47015 18.6553 6.22726C18.6553 1.80415 15.2731 0.726562 11.3701 0.726562H0.625488V22.9299H11.6723C15.8133 22.9299 19.7034 20.994 19.7034 16.4831C19.7034 13.6952 18.3467 11.634 15.5432 10.8634ZM5.63449 4.51691H10.3349C12.1417 4.51691 13.7685 5.01185 13.7685 7.05425C13.7685 8.94003 12.5018 9.6981 10.7142 9.6981H5.63449V4.51691ZM10.9907 19.1583H5.63449V13.0436H11.0936C13.2991 13.0436 14.6944 13.9395 14.6944 16.2137C14.6944 18.4566 13.029 19.1583 10.9907 19.1583ZM34.0424 4.07836H24.8025V1.89186H34.0424V4.07836ZM37.6625 15.1236C37.6625 10.3685 34.8076 6.40269 29.6314 6.40269C24.6031 6.40269 21.1888 10.0865 21.1888 14.9106C21.1888 19.9164 24.4231 23.3496 29.6314 23.3496C33.573 23.3496 36.1258 21.6205 37.3539 17.9429H33.3544C32.9236 19.3149 31.1489 20.0417 29.7729 20.0417C27.1173 20.0417 25.7219 18.5255 25.7219 15.9506H37.624C37.6432 15.6875 37.6625 15.4055 37.6625 15.1236ZM25.7284 13.1689C25.8763 11.0576 27.3166 9.73568 29.49 9.73568C31.7662 9.73568 32.9107 11.0388 33.1036 13.1689H25.7284Z"
                                        fill="white" />
                                </svg>
                            </a>
                        </li>
                        <li className="footer-socials_link">
                            <a href="mailto:minhquan.nguyen.fr@gmail.com" aria-label="gmail">
                                <svg width="34" height="25" viewBox="0 0 34 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M30.1996 0.00976562H3.71815C2.03123 0.00976562 0.662598 1.35671 0.662598 3.01691V21.0598C0.662598 22.7199 2.03123 24.0669 3.71815 24.0669H30.1996C31.8866 24.0669 33.2552 22.7199 33.2552 21.0598V3.01691C33.2552 1.35671 31.8866 0.00976562 30.1996 0.00976562ZM30.1996 3.01691V5.57298C28.7737 6.71945 26.4948 8.49867 21.6314 12.2451C20.5619 13.072 18.4358 15.0705 16.9589 15.0455C15.482 15.0705 13.3559 13.072 12.2864 12.2451C7.42302 8.49867 5.14408 6.71945 3.71815 5.57298V3.01691H30.1996ZM3.71815 21.0598V9.43214C5.17591 10.5786 7.24478 12.1824 10.3958 14.6069C11.7899 15.6845 14.2216 18.0651 16.9589 18.0526C19.6771 18.0651 22.0833 15.7221 23.522 14.6132C26.673 12.1824 28.7419 10.5786 30.1996 9.43214V21.0598H3.71815Z"
                                        fill="white" />
                                </svg>
                            </a>
                        </li>
                        <li className="footer-socials_link">
                            <a href="https://www.linkedin.com/in/quan-nguyen-1b9a31199/" aria-label="linkedin">
                                <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6.5568 27.8892H0.71983V9.39459H6.5568V27.8892ZM3.63518 6.87176C1.7691 6.87176 0.254883 5.35064 0.254883 3.51417C0.254883 1.6777 1.7691 0.1875 3.63518 0.1875C5.50125 0.1875 7.01547 1.6777 7.01547 3.51417C7.01547 5.35064 5.50125 6.87176 3.63518 6.87176ZM28.3968 27.8892H22.5724V18.8861C22.5724 16.7405 22.5284 13.9889 19.5376 13.9889C16.5029 13.9889 16.038 16.32 16.038 18.7315V27.8892H10.2073V9.39459H15.8055V11.9174H15.8872C16.6663 10.4643 18.57 8.93083 21.41 8.93083C27.3161 8.93083 28.403 12.7584 28.403 17.7298V27.8892H28.3968Z"
                                        fill="white" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-copyright">
                    <p>Handcrafted by me Ⓒ Zero</p>
                    <p>Powered by SCSS </p>
                </div>
            </footer>
            <a href="#introduction">
                <div className={!isScrollDown ? "down-arrow" : "down-arrow visible-o1"}>
                    <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20.7455 12.1011C21.003 11.8398 21.1475 11.4868 21.1475 11.1189C21.1475 10.751 21.003 10.3979 20.7455 10.1367L11.9811 1.32191C11.7217 1.06094 11.37 0.913939 11.0031 0.91309C10.6362 0.91224 10.2839 1.05761 10.0233 1.31738L1.25893 10.1321C1.00017 10.3941 0.854935 10.7483 0.854935 11.1176C0.854935 11.4869 1.00017 11.8411 1.25893 12.1031C1.52 12.3616 1.87181 12.5062 2.23816 12.5056C2.6045 12.5051 2.95587 12.3594 3.21615 12.1001L11.0004 4.27309L18.7862 12.1036C19.0466 12.3641 19.3991 12.5101 19.7664 12.5096C20.1336 12.5092 20.4857 12.3622 20.7455 12.1011Z"
                            fill="white" />
                    </svg>
                </div>
            </a>
        </div>
    )
}

