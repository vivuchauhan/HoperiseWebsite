import { useState } from "react";
import "./volunterform.css";
// import image from "./image";

const Volunteer = () =>{
    const [volunteer, setVolunteer ] = useState(false);

    const handleClick = (e)=>{
        e.preventDefault();
        setVolunteer(true);
        setTimeout(() => {
            setVolunteer(false);
        }, 3000);
    };
    


    return(
        <>
         <div className="containerV">
            <div className="volunteer" data-parallax="scroll" data-image-src="img/volunteer.jpg">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="volunteer-form">
                        {volunteer ? (
                            <p style={{color:'#ccc',fontWeight:'600', fontSize:'large'}}>Congratulations you are a volunteer now!</p>
                            ):(
                            <form onSubmit={handleClick} >
                                <div className="control-group">
                                    <input type="text" className="form-control" placeholder="Name" required="required" />
                                </div>
                                <div className="control-group">
                                    <input type="email" className="form-control" placeholder="Email" required="required" />
                                </div>
                                <div className="control-group">
                                    <textarea className="form-control" placeholder="Why you want to become a volunteer?" required="required"></textarea>
                                </div>
                                <div>
                                    <button className="btn btn-custom" type="submit">Become a volunteer</button>
                                </div>
                            </form>
                        )}
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="volunteer-content">
                            <div className="section-header">
                                <p>Become A Volunteer</p>
                                <h2>Let’s make a difference in the lives of others</h2>
                            </div>
                            <div className="volunteer-text">
                                <p>
                                We are thrilled that you are interested in becoming a volunteer and making a difference in the lives of others. As a volunteer, you will have the opportunity to positively impact the world around you and contribute to a cause that you are passionate about. We believe that everyone has the power to make a difference, no matter how big or small their contributions may be.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Volunteer;