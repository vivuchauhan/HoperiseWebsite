import React from 'react'
import "./top.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPhoneAlt,
    faEnvelope
} from "@fortawesome/free-solid-svg-icons"

function Top() {
  
  
  return (
    <div>
           <div className="top-bar d-none d-md-block">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                        <div className="top-bar-left">
                            <div className="text">
                            <FontAwesomeIcon  className="icon" icon={faPhoneAlt}/>
                                <p>+91 9992299231</p>
                            </div>
                            <div className="text">
                            <FontAwesomeIcon  className="icon" icon={faEnvelope }/>
                                <p>Hoperise@example.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="top-bar-right">
                            <div className="social">
                                {/* <a href=""> </a>
                                <a href=""><i className="fab fa-facebook-f"></i></a>
                                <a href=""><i className="fab fa-linkedin-in"></i></a>
                                <a href=""><i className="fab fa-instagram"></i></a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Top