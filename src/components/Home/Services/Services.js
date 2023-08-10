import "./Services.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBook,
    faBowlFood,
    faDroplet,
    faHandHolding,
    faHeartPulse,
    faHome,
} from "@fortawesome/free-solid-svg-icons";


const Services=()=>{
    return(
        <div className="service">
            <div className="container">
                <div className="section-header text-center">
                    <p>What We Do?</p>
                    <h2>We believe that we can save more lifes with you</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="service-item">
                            <div className="service-icon">
                            <FontAwesomeIcon className="flaticon" icon={faBowlFood} />
                            </div>
                            <div className="service-text">
                                <h3>Healthy Food</h3>
                                <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="service-item">
                            <div className="service-icon">
                            <FontAwesomeIcon className="flaticon" icon={faDroplet} />
                            </div>
                            <div className="service-text">
                                <h3>Pure Water</h3>
                                <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="service-item">
                            <div className="service-icon">
                            <FontAwesomeIcon className="flaticon" icon={faHeartPulse} />
                            </div>
                            <div className="service-text">
                                <h3>Health Care</h3>
                                <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="service-item">
                            <div className="service-icon">
                            <FontAwesomeIcon className="flaticon" icon={faBook} />
                            </div>
                            <div className="service-text">
                                <h3>Primary Education</h3>
                                <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="service-item">
                            <div className="service-icon">
                            <FontAwesomeIcon className="flaticon" icon={faHome} />
                            </div>
                            <div className="service-text">
                                <h3>Residence Facilities</h3>
                                <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="service-item">
                            <div className="service-icon">
                            <FontAwesomeIcon className="flaticon" icon={faHandHolding} />
                            </div>
                            <div className="service-text">
                                <h3>Social Care</h3>
                                <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Services;