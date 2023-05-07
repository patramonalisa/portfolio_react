import "./FormStyles.css"

import React from "react"

const Form =()=>{
    return(
        <div className="form">
            <form>
                <label>your Name</label>
                <input type="text"></input>

                <label>Subject</label>
                <input type="text"></input>

                <label>Email</label>
                <input type="email"></input>

                <label>Message</label>
               <textarea rows="6" placeholder="enter your message here"></textarea>
               <button className="btn">Submit</button>
            </form>

        </div>
    )
}

export default Form