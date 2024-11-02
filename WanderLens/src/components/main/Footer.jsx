import React from "react";
import { Button } from "./Button";
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram, faLinkedin, faWhatsapp, faYoutube} from '@fortawesome/free-brands-svg-icons';
import './Footer.css'

export default function Footer(){
    return(
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the newsletter to recieve our updates
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time
                </p>
                <div className="input-areas">
                    <form>
                       <input type="email" name="email" placeholder="Your Email" className="footer-input"/> 
                        <Button buttonStyle={'btn--outline'}>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                        <Link to='/'>Testimonials</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Videos</h2>
                        <Link to='/'>Submit Video</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Testimonials</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link className="social-logo">
                        WanderLens 
                        </Link>
                        <small className="websiter-rights">Made with &hearts; by team Wanderers</small>
                        <div className="social-icons">
                            <Link className="social-icon-link facebook">
                            <FontAwesomeIcon icon={faFacebook} aria-label="Facebook"/>
                            </Link>
                            <Link className="social-icon-link Youtube">
                            <FontAwesomeIcon icon={faYoutube} aria-label="Youtube"/>
                            </Link>
                            <Link className="social-icon-link Instagram">
                            <FontAwesomeIcon icon={faInstagram} aria-label="Instagram"/>
                            </Link>
                            <Link className="social-icon-link WhatsApp">
                            <FontAwesomeIcon icon={faLinkedin} aria-label="LinkedIn"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


