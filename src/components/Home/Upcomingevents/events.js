import "./events.css";
import place1 from "./place1.jpg";
import place2 from "./place2.jpg";
import place3 from "./place3.jpg";
import place4 from "./place4.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCalendar,
    faClock,
    faLocation,
} from "@fortawesome/free-solid-svg-icons";

const Event = () => {
    return (
        <>
            <div className="event">
                <div className="container">
                    <div className="section-header text-center">
                        <p>Upcoming Events</p>
                        <h2>Be ready for our upcoming charity events</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="event-item">
                                <img src={place1} alt="Image" />
                                <div className="event-content">
                                    <div className="event-meta">
                                        <p><FontAwesomeIcon classNameName="iconevents" icon={faCalendar} />&nbsp; 01-Jan-25</p>
                                        <p><FontAwesomeIcon classNameName="iconevents" icon={faClock} />&nbsp; 8:00 - 10:00</p>
                                        <p><FontAwesomeIcon classNameName="iconevents" icon={faLocation} />&nbsp; Kolkata</p>
                                    </div>
                                    <div className="event-text">
                                        <h3>We invite you to join us</h3>
                                        <p>
                                            Our charity event in Kolkata will take place on June 20th at the Nicco Park Ground. The event will feature a 5K run,and a cultural program. </p>

                                        <a className="btn btn-custom" href="">Join Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="event-item">
                                <img src={place2} alt="Image" />
                                <div className="event-content">
                                    <div className="event-meta">
                                        <p><FontAwesomeIcon classNameName="iconevents" icon={faCalendar} />&nbsp; 01-April-25</p>
                                        <p><FontAwesomeIcon classNameName="iconevents" icon={faClock} />&nbsp; 8:00 - 10:00</p>
                                        <p><FontAwesomeIcon classNameName="iconevents" icon={faLocation} />&nbsp; New Delhi</p>
                                    </div>
                                    <div className="event-text">
                                        <h3>We invite you to join us</h3>
                                        <p>
                                            Our charity event in Delhi will take place on May 15th at the India Habitat Centre. The event will feature live music, and a silent auction. </p>

                                        <a className="btn btn-custom" href="">Join Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Event;