import React from 'react'
import './Contact.scss'

export default class Contact extends React.Component {
    render() {
        return (
            <div className="contact-page">
                <main role="main">
                    <div className="form">
                        <form method="POST">
                            <legend>Thanks for CONTACTING ME!</legend>
                            <div className="form-group inline">
                                <div className="form-group-inline">
                                    <label htmlFor="firstname">Firstname*</label>
                                    <input type="text" id="firstname" name="firstname" />
                                </div>
                                <div className="form-group-inline">
                                    <label htmlFor="lastname">Lastname*</label>
                                    <input type="text" id="firstname" name="firstname" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email*</label>
                                <input type="email" id="email" name="email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject*</label>
                                <input type="text" id="subject" name="subject" />
                            </div>
                            <div className="form-group" style={{ marginBottom: '0rem' }}>
                                <label htmlFor="message">Subject*</label>
                                <textarea id="message" name="message" required></textarea>
                            </div>
                            <div>
                                <button className="btn btn-primary" onSubmit={this.senContact}>SEND</button>
                            </div>
                        </form>
                    </div>
                </main>
                <footer>

                </footer>
            </div>
        )
    }
}
