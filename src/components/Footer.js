import "./FooterStyles.css"
import React from 'react'
import {FaFacebook, FaHome, FaLinkedin, FaTwitter} from 'react-icons/fa'
import {FaPhone} from 'react-icons/fa'
import {FaMailBulk} from 'react-icons/fa'

const Footer=()=>{
    return(
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}} />
                        <div>
                            <p>123 Housing Society</p>
                            <p>Bangaladesh</p>
                        </div>
                    </div>

                    <div className="phone">
                        <h4><FaPhone size={20} style={{color:"white",marginRight:"2rem"}} />
                        8855224512</h4>
                    </div>

                    <div className="email">
                        <h4><FaMailBulk size={20} style={{color:"white", marginRight:"2rem"}} />
                        m@gmail.com</h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About The Company</h4>
                    <p>Goals & OKRs. Performance Reviews & 360s. Engagement Surveys. Feedback. 1:1 Meetings. Enhance your people management processes with Leapsome. Schedule a free.</p>
                    <div className="social">
                        <FaFacebook size={30} style={{color:"white", marginRight:"1rem"}} />
                        <FaTwitter size={30} style={{color:"white", marginRight:"1rem"}} />
                        <FaLinkedin size={30} style={{color:"white", marginRight:"1rem"}} />
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Footer