import React from 'react'
import { FaHome ,FaPhone} from "react-icons/fa";
const ContactForm = () => {
    const mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.1518832610886!2d88.65321374753466!3d25.697310917005268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4ad0b5d200fa7%3A0x2e0c8f8bb049efa2!2sHajee%20Mohammad%20Danesh%20Science%20%26%20Technology%20University!5e0!3m2!1sen!2sbd!4v1613664628333!5m2!1sen!2sbd'
    return (
    <>
    <div className="section-cf-1">
        <div className="container py-5">
            <div className="row">
                <div className="col-md-6">
                    <div className="my-3">
                        <h4 className="d-inline"><FaHome /></h4> Kushtia
                    </div>
                    <div className="my-3">
                        <h4 className="d-inline"><FaPhone /></h4> +8801732249303
                    </div>
                    <div className="my-3">
                        <h4 className="d-inline"><FaHome /></h4> mbm.21.02.16@gmail.com
                    </div>
                </div>
                <div className="col-md-6">
                    <form action="https://formspree.io/f/mrgovoqj" method="post">
                        <label className="d-block py-3" htmlFor="Your Name">Your Name:
                        </label>
                        <input className="d-block w-100" name="Name" type="text"/>
                        <label className="d-block py-3" htmlFor="Your Name:">Your Email:
                        </label>
                        <input className="d-block w-100" name="Email:" type="email"/>
                        <label className="d-block py-3" htmlFor="Your Name">Your Message:
                        </label>
                        <textarea className="w-100" name="Message:" rows="10"></textarea>
                        <input className="btn btn-primary mt-3" type="submit" value="Send Message"/>
                    </form>
                </div>
            </div>
            <div className="row" style={{height:300}}>
                <iframe title="Map"  className="w-100 m-4" src={mapUrl} />
            </div>
        </div>
    </div>
    </>
    )
}

export default ContactForm
