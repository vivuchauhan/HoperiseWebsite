import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function TestimonialComp() {
    return (
        <div className="About">
            {/* Google Font  */}
            <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            {/* CSS Libraries  */}
            <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" />
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
            <link href="lib/flaticon/font/flaticon.css" rel="stylesheet" />
            <link href="lib/animate/animate.min.css" rel="stylesheet" />
            <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />


            <div className="testimonial">
                <div className="container">
                    <div className="section-header text-center">
                        <p>Testimonial</p>
                        <h2>What people are talking about our charity activities</h2>
                    </div>
                    <div className=" testimonials-caowl-carouselrousel">
                        <div className="testimonial-item">
                            <div className="testimonial-profile">
                                <img src="https://www.wikigrewal.com/wp-content/uploads/2020/06/Tanveer-Gill-1.jpg" alt="Image" />
                                <div className="testimonial-name">
                                    <h3>Person Name</h3>
                                    <p>Profession</p>
                                </div>
                            </div>
                            <div className="testimonial-text">
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phasel preti mi facilis ornare velit non vulputa. Aliqu metus tortor, auctor id gravid vivera quis
                                </p>
                            </div>
                        </div>
                        <div className="testimonial-item">
                            <div className="testimonial-profile">
                                <img src="https://3.bp.blogspot.com/-vd642xpk2iI/WfVHX8LnrBI/AAAAAAAARbU/gm--CFH_9H0S7Une2EL9tTGiMcPWzZ1AgCLcBGAs/s1600/71.jpg" alt="Image" />
                                <div className="testimonial-name">
                                    <h3>Person Name</h3>
                                    <p>Profession</p>
                                </div>
                            </div>
                            <div className="testimonial-text">
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phasel preti mi facilis ornare velit non vulputa. Aliqu metus tortor, auctor id gravid vivera quis
                                </p>
                            </div>
                        </div>
                        <div className="testimonial-item">
                            <div className="testimonial-profile">
                                <img src="https://www.newstrend.news/wp-content/uploads/2018/01/Vikram-Chandra-15.01.18-1.jpg" alt="Image" />
                                <div className="testimonial-name">
                                    <h3>Person Name</h3>
                                    <p>Profession</p>
                                </div>
                            </div>
                            <div className="testimonial-text">
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phasel preti mi facilis ornare velit non vulputa. Aliqu metus tortor, auctor id gravid vivera quis
                                </p>
                            </div>
                        </div>
                        <div className="testimonial-item">
                            <div className="testimonial-profile">
                                <img src="http://www.mansworldindia.com/wp-content/uploads/2017/02/6Cg1afJs.jpg" alt="Image" />
                                <div className="testimonial-name">
                                    <h3>Person Name</h3>
                                    <p>Profession</p>
                                </div>
                            </div>
                            <div className="testimonial-text">
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phasel preti mi facilis ornare velit non vulputa. Aliqu metus tortor, auctor id gravid vivera quis
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestimonialComp;
