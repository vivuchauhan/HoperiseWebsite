import "./carousel.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndianRupee } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import video from "./images/video.mp4"
const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSlide((currentSlide) => (currentSlide === 3 ? 1 : currentSlide + 1));
        }, 3000);
        return () => clearInterval(intervalId);
    }, [currentSlide]);

    return (
        <div className="imageBoxHome">
            <div className="carousel">
                <div className="container-fluid">
                    <div className="owl-carousel">
                        <div className="carousel-item">
                            <div className="carousel-img">
                                <video width="100%" height="100%" muted autoPlay loop>
                                    <source src={video} type="video/mp4" />
                                </video>
                                {/* <img src={image1} alt="Image" /> */}
                            </div>
                            <div className="carousel-text">
                                <h1>Let's be kind for children</h1>
                                <p>
                                    At our organization, we believe in the power of kindness and empathy. That's why we have launched the "Let's be kind" initiative, where we encourage children to embrace kindness and compassion towards others. Through this initiative, we hope to create a more inclusive and harmonious society where everyone is valued and respected. Join us in spreading kindness and let's make the world a better place, one act of kindness at a time.

                                </p>
                                <div className="carousel-btn">
                                    <a className="btn btn-custom" href="">Donate Now</a>
                                    <a className="btn btn-custom btn-play" data-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal">Watch Video</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    )
}

export default Carousel;