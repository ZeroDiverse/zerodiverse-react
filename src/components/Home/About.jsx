import React from 'react'
import './About.scss'
import pc from '../../images/pc.webm'
import {withTranslation, Trans} from 'react-i18next'

function About(){
    return(
        <section className="about-section" id="about">
            <div className="section-intro">
                <video autoPlay loop muted playsInline>
                    <source src={pc}/>
                </video>
            </div>
            <div className="section-main">
                <h2><Trans>More about me</Trans></h2>
                <p>
                    <Trans>
                        I'm a student from Licence 3 Computer Science at University of Lille and also the Co-Creator of Trostrum Networks. I come from Hanoi, Vietnam and i want to become an software developer/engineering. And i'm am looking for my first professional experience in France ! And here's another thing, i love helping people with their projects. Answering and solving their questions, because it's the best way to learn new stuffs for me.
                    </Trans>
                </p>
            </div>
        </section>
    )
}

export default withTranslation('translations')(About)
