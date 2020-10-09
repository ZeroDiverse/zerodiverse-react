import React from 'react';
import './Navbar.scss';
import {Link} from 'react-router-dom';
import {withTranslation} from 'react-i18next';

const Navbar = (props) => {
    const {t} = props;

    return (
        <nav>
            <div className="navbrand">
                <Link to="/" aria-label="ZeroDiverse navbrand">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                         xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 121 105.8"
                         style={{enableBackground: "new 0 0 121 105.8"}} xmlSpace="preserve">
                        <title>LOGO 1</title>
                        <g>
                            <path className="st0" d="M84.9,0.3C58.7,35.1,32.4,69.9,6.2,104.7c-2.9-5.4-4.3-10.2-4.9-13.5C0.7,88.6-1,78.4,2.6,67.5
                        c1.6-4.8,3.8-8.6,5.6-11.1c0.8-1.2,1.6-2.1,2.1-2.8c0.3-0.4,0.6-0.7,0.8-1.1l0.4-0.5c6-7.8,13.9-18.3,23.5-31.2l1.4-1.9
                        C40.7,13.2,45.3,7,50.3,0.4h0.1C61.9,0.4,73.4,0.3,84.9,0.3z"/>
                            <path className="st0" d="M42.2,0.1c-13.8,18-27.7,36-41.5,54C0.5,41.6,0.2,29,0,16.4c0.1-1.5,0.4-7.8,5-12.2c0.7-0.6,2.4-2.2,5.1-3.3
                        C11.7,0.3,13.4,0,15.4,0C24.3,0.1,33.3,0.1,42.2,0.1z"/>
                            <path className="st0" d="M72.7,28.5C79.4,19.2,86.1,10,92.9,0.8c10.6,26,18.9,46.8,24.7,60.7c1.1,2.7,4,9.3,3.3,17.8
                        c-0.3,3.2-1,12.2-8.4,19.2c-7,6.6-15.4,7.2-18,7.3c-0.6,0-1.1,0-1.4,0c-0.2,0-0.3,0-0.3,0c-0.5,0-22.5,0-77.1,0
                        C23.6,95,31.4,84.2,39.2,73.5c13.5,0.1,27,0.2,40.6,0.3c1.6-0.2,5.2-1,6.7-3.8c1.1-2,0.9-4.3,0.4-5.6
                        C82.1,52.4,77.4,40.4,72.7,28.5z"/>
                        </g>
                    </svg>
                </Link>
            </div>
            <div className="btn-open" onClick={props.onMenuOpen}>
                <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.44643 2.61928H16.5536C17.3491 2.61928 18 2.02994 18 1.30964C18 0.589337 17.3491 0 16.5536 0H1.44643C0.650893 0 0 0.589337 0 1.30964C0 2.02994 0.650893 2.61928 1.44643 2.61928Z"
                        fill="white"/>
                    <path
                        d="M1.44643 8.43989H16.5536C17.3491 8.43989 18 7.85056 18 7.13025C18 6.40995 17.3491 5.82062 16.5536 5.82062H1.44643C0.650893 5.82062 0 6.40995 0 7.13025C0 7.85056 0.650893 8.43989 1.44643 8.43989Z"
                        fill="white"/>
                    <path
                        d="M1.44643 14.2605H16.5536C17.3491 14.2605 18 13.6712 18 12.9509C18 12.2306 17.3491 11.6412 16.5536 11.6412H1.44643C0.650893 11.6412 0 12.2306 0 12.9509C0 13.6712 0.650893 14.2605 1.44643 14.2605Z"
                        fill="white"/>
                </svg>
            </div>
            <div className={props.menuOpen ? "btn-close block" : "btn-close"} onClick={props.onMenuOpen}>
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                     xmlnsXlink="http://www.w3.org/1999/xlink"
                     x="0px" y="0px" viewBox="0 0 524.4 510.2" style={{enableBackground: "new 0 0 524.4 510.2"}}
                     xmlSpace="preserve">
                    <g>
                        <circle className="st0" cx="262" cy="255" r="222.7"/>
                        <g>
                            <path className="st1" d="M318.7,338.6L178.4,198.3c-7.4-7.4-7.4-19.5,0-26.9l0,0c7.4-7.4,19.5-7.4,26.9,0l140.3,140.3
            c7.4,7.4,7.4,19.5,0,26.9l0,0C338.2,346,326.1,346,318.7,338.6z"/>
                            <path className="st1" d="M345.6,198.3L205.3,338.6c-7.4,7.4-19.5,7.4-26.9,0l0,0c-7.4-7.4-7.4-19.5,0-26.9l140.3-140.3
            c7.4-7.4,19.5-7.4,26.9,0l0,0C353,178.8,353,190.9,345.6,198.3z"/>
                        </g>
                    </g>
                </svg>

            </div>
            <div className={props.menuOpen ? "navbar-main w-80" : "navbar-main visibility-hidden"}>
                <ul className="navbar-nav">
                    <li><a href="/#projects">{t("Projects")}</a></li>
                    <li><a href="/#skills">{t("Skills")}</a></li>
                    <li><a href="/#about">{t("About")}</a></li>
                    <li><a href="/resume.pdf">{t("Resume")}</a></li>
                    <li id={"button"}><Link to="/contact">
                        <div className="primary">{t("Contact")}</div>
                    </Link></li>
                </ul>
            </div>
        </nav>
    )
}


export default withTranslation('translations')(Navbar);
