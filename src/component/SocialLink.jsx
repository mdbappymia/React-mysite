import React from 'react'
import "./App.css";
import { FaFacebook,FaFacebookMessenger,FaGithub,FaLinkedin, FaTwitter } from "react-icons/fa";
const SocialLink = () => {
    return (
        <div>
            <ul className="s-link">
                <li><a className="s-link-l" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/md-bappy-mia-334a9b15b"><FaLinkedin /></a></li>
                <li><a className="s-link-l" rel="noreferrer" target="_blank" href="https://github.com/mdbappymia"><FaGithub /></a></li>
                <li><a className="s-link-l" rel="noreferrer" target="_blank" href="https://twitter.com/MdBappyMia10"><FaTwitter /></a></li>
                <li><a className="s-link-l" rel="noreferrer" target="_blank" href="http://facebook.com/mdbappymia.me"><FaFacebook /></a></li>
                <li><a className="s-link-l" rel="noreferrer" target="_blank" href="http://"><FaFacebookMessenger /></a></li>
            </ul>
        </div>
    )
}

export default SocialLink
