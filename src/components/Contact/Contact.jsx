import React, {useState} from 'react'
import './Contact.scss'
import axios from 'axios'
import {withTranslation, Trans} from 'react-i18next'


function Contact(props) {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [successful, setSuccessful] = useState(false);

    const sendContact = (e) => {
        e.preventDefault();
        axios.post('https://zerodiverse.oa.r.appspot.com/contact/', {
            firstname, lastname, email, subject, message
        }).then(() => {
            console.log('Message successfully sent');
            setSuccessful(true);
            setEmail("")
            setFirstname("")
            setLastname("")
            setMessage("")
            setSubject("")
            setTimeout(() => {
                setSuccessful(false);
            }, 2000);
        }).catch((err) => {
            console.log(err);
        })
    }

    const closeMenuIfOpen = () => {
        if (props.menuOpen === true) {
            props.onMenuOpen()
        }
    }


    return (
        <div className={props.menuOpen ? "contact-page opacity-30" : "contact-page"} onClick={closeMenuIfOpen}>
            <main role="main">
                {successful &&
                <div className="alert-success">
                    <p><Trans>You message was sent successfully!</Trans></p>
                </div>
                }

                <div className="form">
                    <form onSubmit={sendContact}>
                        <legend><Trans>Thanks for CONTACTING ME!</Trans></legend>
                        <div className="form-group inline">
                            <div className="form-group-inline">
                                <label htmlFor="firstname"><Trans>Firstname</Trans>*</label>
                                <input type="text" id="firstname" onChange={e => setFirstname(e.target.value)}
                                       name="firstname" value={firstname}/>
                            </div>
                            <div className="form-group-inline">
                                <label htmlFor="lastname"><Trans>Lastname</Trans>*</label>
                                <input type="text" id="lastname" onChange={e => setLastname(e.target.value)}
                                       name="lastname" value={lastname}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email"><Trans>Email</Trans>*</label>
                            <input type="email" id="email" name="email" onChange={e => setEmail(e.target.value)}
                                   value={email}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject"><Trans>Subject</Trans>*</label>
                            <input type="text" id="subject" name="subject" onChange={e => setSubject(e.target.value)}
                                   value={subject}/>
                        </div>
                        <div className="form-group" style={{marginBottom: '0rem'}}>
                            <label htmlFor="message"><Trans>Message</Trans>*</label>
                            <textarea id="message" name="message" required onChange={e => setMessage(e.target.value)}
     value={message}/>
                        </div>
                        <div>
                            <button className="btn btn-primary" onSubmit={sendContact}><Trans>Send</Trans></button>
                        </div>
                    </form>
                </div>
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default withTranslation('translations')(Contact)
