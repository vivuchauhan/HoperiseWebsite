import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Footer() {
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
            {/* Footer Start  */}
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-contact">
                                <h2>Our Head Office</h2>
                                <p><i className="fa fa-map-marker-alt"></i>Location, City, Country</p>
                                <p><i className="fa fa-phone-alt"></i>+919 445 67890</p>
                                <p><i className="fa fa-envelope"></i>Hoperise@example.com</p>
                                <div className="footer-social">
                                    <a className="btn btn-custom" href="#"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-custom" href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-custom" href="#"><i className="fab fa-youtube"></i></a>
                                    <a className="btn btn-custom" href="#"><i className="fab fa-instagram"></i></a>
                                    <a className="btn btn-custom" href="#"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-link">
                                <h2>Popular Links</h2>
                                <a href="">About Us</a>
                                <a href="">Contact Us</a>
                                <a href="">Popular Causes</a>
                                <a href="">Upcoming Events</a>
                                <a href="">Latest Blog</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-link">
                                <h2>Useful Links</h2>
                                <a href="">Terms of use</a>
                                <a href="">Privacy policy</a>
                                <a href="">Cookies</a>
                                <a href="">Help</a>
                                <a href="">FQAs</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-newsletter">
                                <h2>Newsletter</h2>
                                <form>
                                    <input className="form-control" placeholder="Email goes here" />
                                    <button className="btn btn-custom">Submit</button>
                                    <label>Don't worry, we don't spam!</label>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container copyright">
                    <div className="row">
                        <div className="col-md-6">
                            <p>&copy; <a href="#">Hoperise</a>, All Right Reserved.</p>
                        </div>
                        <div className="col-md-6">
                            <p>Designed By <a href="#">Gama Team</a></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer End  */}

        </div>
    );
}

export default Footer;
