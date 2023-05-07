import "./HeroimgStyles.css"
import IntroImg from "../assets/2.jfif"
import {Link} from 'react-router-dom'

const Heroimg=()=>{
    return(
        <div className="hero">
            <div className="mask">
                <img className="intro-img" src={IntroImg} alt={IntroImg} />
            </div>
            <div className="content">
                <p>HI, I'M A FREELANCER</p>
                <h1>REACT <br /> DEVELOPER</h1>
                <div>
                    <Link to="/project" className="btn">PROJECTS</Link>
                    <Link to="/contact" className="btn btn-light">CONTACTS</Link>
                </div>
            </div>
        </div>
    )
}
export default Heroimg