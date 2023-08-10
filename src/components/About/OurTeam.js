import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function OurTeamComp() {
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

 <div className="team">
            <div className="container">
                <div className="section-header text-center">
                    <p>Meet Our Team</p>
                    <h2>Awesome guys behind our charity activities</h2>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="team-item">
                            <div className="team-img">
                                <img src="https://i.pinimg.com/originals/83/60/f6/8360f6e8e6167d545b0c34de7490cc1e.jpg" alt="Team Image" />
                            </div>
                            <div className="team-text">
                                <h2>Donald John</h2>
                                <p>Founder & CEO</p>
                                <div className="team-social">
                                    <a href=""><i className="fab fa-twitter"></i></a>
                                    <a href=""><i className="fab fa-facebook-f"></i></a>
                                    <a href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="team-item">
                            <div className="team-img">
                                <img src="https://images.shiksha.com/mediadata/images/articles/1576044709phpw9fdwE.jpeg" alt="Team Image" />
                            </div>
                            <div className="team-text">
                                <h2>Adam Phillips</h2>
                                <p>Chef Executive</p>
                                <div className="team-social">
                                    <a href=""><i className="fab fa-twitter"></i></a>
                                    <a href=""><i className="fab fa-facebook-f"></i></a>
                                    <a href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="team-item">
                            <div className="team-img">
                                <img src="https://images.freeimages.com/images/large-previews/fd0/sardar-indian-businessman-1240457.jpg" alt="Team Image" />
                            </div>
                            <div className="team-text">
                                <h2>Thomas Olsen</h2>
                                <p>Chef Advisor</p>
                                <div className="team-social">
                                    <a href=""><i className="fab fa-twitter"></i></a>
                                    <a href=""><i className="fab fa-facebook-f"></i></a>
                                    <a href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="team-item">
                            <div className="team-img">
                                <img src="https://jamesgilberdphotography.weebly.com/uploads/1/3/6/5/13650410/emma-not-smiling-35x45_1_orig.jpg" alt="Team Image" />
                            </div>
                            <div className="team-text">
                                <h2>James Alien</h2>
                                <p>Advisor</p>
                                <div className="team-social">
                                    <a href=""><i className="fab fa-twitter"></i></a>
                                    <a href=""><i className="fab fa-facebook-f"></i></a>
                                    <a href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default OurTeamComp;
