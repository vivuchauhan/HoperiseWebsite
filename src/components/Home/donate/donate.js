import "./donate.css";
import React, { useState } from 'react';
import image from "./donate.jpg"

const Donate = () => {

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [price, setPrice ] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
        setTimeout(() => {
            setFormSubmitted(false);
        }, 3000);
      };

    return (
        <>
            <div className="containerD">
                <div className="donate" data-parallax="scroll" data-image-src={image}>
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="donate-content">
                                <div className="section-header">
                                    <p>Donate Now</p>
                                    <h2>Let's donate to needy people for better lives</h2>
                                </div>
                                <div className="donate-text">
                                    <p>As the world continues to grapple with the COVID-19 pandemic, the number of underprivileged children has increased significantly. These children come from families who are unable to provide them with the basic necessities of life such as food, clothing, and education. However, there are ways that you can help these children by donating now. In this article, we will discuss some effective ways to motivate visitors to donate for underprivileged kids.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="donate-form">
                            {formSubmitted ? (
                                    <p style={{color:'#ccc',fontWeight:'600', fontSize:'large'}}>Thank you for your Donation!</p>
                                 ):(
                                    <form onSubmit={handleSubmit}>
                                    <div className="control-group">
                                        <input type="text" className="form-control" placeholder="Name" required="required" />
                                    </div>
                                    <div className="control-group">
                                        <input type="email" className="form-control" placeholder="Email" required="required" />
                                    </div>
                                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                        <label className={price===1?"btn btn-custom active":"btn btn-custom"}>
                                            <input type="radio" name="options" onClick={()=>{
                                                setPrice(1)
                                            }} /> ₹499
                                        </label>
                                        <label className={price===2?"btn btn-custom active":"btn btn-custom"} >
                                            <input type="radio" name="options"
                                            onClick={()=>{
                                                setPrice(2)
                                            }}
                                             /> ₹1499
                                        </label>
                                        <label className={price===3?"btn btn-custom active":"btn btn-custom"} >
                                            <input type="radio" name="options" 
                                            onClick={()=>{
                                                setPrice(3)
                                            }}
                                            /> ₹2999
                                        </label>
                                    </div>
                                    <div>
                                        <button className="btn btn-custom" type="submit">Donate Now</button>
                                    </div>
                                </form>
                            )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Donate;