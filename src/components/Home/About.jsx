import React from 'react'
import './About.scss'
import pc from '../../images/pc.webm'

export default function About(){
    return(
        <section className="about-section" id="about">
            <div className="section-intro">
                <video autoPlay loop muted playsInline>
                    <source src={pc}/>
                </video>
            </div>
            <div className="section-main">
                <h2>More about me</h2>
                <p>
                    I'm a student from Licence 3 at University of Lille. Also i'm the co-founder of T.
                    Rostrum Networks. I come
                    from Hanoi, Vietnam and i want to become an application developer ( Web Application and
                    Mobile Application).
                    I've done many personal projects but i never had a professional experience. And i'm
                    still currently looking
                    for it ! And here's another thing, i love helping people with their projects.
                    Collaboration or answer their
                    question, because it's the best way to learn new things for me.
                </p>
            </div>
        </section>
    )
}
