import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TestimonialComp from './Testimonial';
import OurTeamComp from './OurTeam'
import AboutUsComp from './AboutUs'
import Top from '../header/top/Top';
import NavBar from '../header/nav/NavBar';
import Footer from './Footer';

function AboutComp() {
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

            <Top />
            <NavBar />

            {/* Page Header Start */}
            <div className="About-page-header">
                <div >
                    <div >
                        <div >
                            <h2>About Us</h2>
                        </div>
                        <div>
                            <a href="">Home</a>
                            <a href="">About Us</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Page Header end */}
            <AboutUsComp />

            {/* Facts Start  */}
            <div className="facts" data-parallax="scroll" data-image-src="https://static01.nyt.com/images/2013/07/09/world/asia/09-food-security-IndiaInk/09-food-security-IndiaInk-superJumbo.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="facts-item">
                                <i className="flaticon-home"></i>
                                <div className="facts-text">
                                    <h3 className="facts-plus" data-toggle="counter-up">150</h3>
                                    <p>Countries</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="facts-item">
                                <i className="flaticon-charity"></i>
                                <div className="facts-text">
                                    <h3 className="facts-plus" data-toggle="counter-up">400</h3>
                                    <p>Volunteers</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="facts-item">
                                <i className="flaticon-kindness"></i>
                                <div className="facts-text">
                                    <h3 className="facts-dollar" data-toggle="counter-up">10000</h3>
                                    <p>Our Goal</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="facts-item">
                                <i className="flaticon-donation"></i>
                                <div className="facts-text">
                                    <h3 className="facts-dollar" data-toggle="counter-up">5000</h3>
                                    <p>Raised</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Facts End  */}

            <OurTeamComp />
            <TestimonialComp />
            <Footer/>

        </div>
    );
}

export default AboutComp;
