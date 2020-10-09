import React, {useState} from 'react'
import './Contact.scss'
import axios from 'axios'


export default function Contact(props) {
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
                    <p>You message was sent successfully! </p>
                </div>
                }

                <div className="form">
                    <form onSubmit={sendContact}>
                        <legend>Thanks for CONTACTING ME!</legend>
                        <div className="form-group inline">
                            <div className="form-group-inline">
                                <label htmlFor="firstname">Firstname*</label>
                                <input type="text" id="firstname" onChange={e => setFirstname(e.target.value)}
                                       name="firstname" value={firstname}/>
                            </div>
                            <div className="form-group-inline">
                                <label htmlFor="lastname">Lastname*</label>
                                <input type="text" id="lastname" onChange={e => setLastname(e.target.value)}
                                       name="lastname" value={lastname}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email*</label>
                            <input type="email" id="email" name="email" onChange={e => setEmail(e.target.value)}
                                   value={email}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject*</label>
                            <input type="text" id="subject" name="subject" onChange={e => setSubject(e.target.value)}
                                   value={subject}/>
                        </div>
                        <div className="form-group" style={{marginBottom: '0rem'}}>
                            <label htmlFor="message">Subject*</label>
                            <textarea id="message" name="message" required onChange={e => setMessage(e.target.value)}
     value={message}/>
                        </div>
                        <div>
                            <button className="btn btn-primary" onSubmit={sendContact}>SEND</button>
                        </div>
                    </form>
                </div>
            </main>
            <footer>

            </footer>
        </div>
    )
}

