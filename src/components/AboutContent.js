import "./AboutContentStyles.css"
import {Link} from "react-router-dom"
import images from "../assets/images.jfif"
import download2 from "../assets/download2.jfif" 

const AboutContent =()=>{
    return(
        <div className="about">
            <div className="left">
                <h1>Who Am I?</h1>
                <p>Note that the development build is not optimized.
To create a production build, use npm run build.</p>
                <Link  to="/contact">
                    <button className="btn">CONTACT</button>
                </Link>
            </div>

            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={images} className="img" alt="true" />
                    </div>

                    <div className="img-stack bottom">
                        <img src={download2} className="img" alt="true" />
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default AboutContent