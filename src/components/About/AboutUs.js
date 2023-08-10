import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function AboutUsComp() {
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

      <div className="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-img" data-parallax="scroll" data-image-src="https://media.gettyimages.com/photos/group-of-happy-gypsy-indian-children-desert-village-india-picture-id509299878?b=1&k=6&m=509299878&s=612x612&w=0&h=baEMHXCQWQsvI-NubnRY3bIZKlIWM-p4eYcHSeicIKs="></div>
                    </div>
                    <div className="col-lg-6">
                        <div className="section-header">
                            <p>Learn About Us</p>
                            <h2>Worldwide non-profit charity organization</h2>
                        </div>
                        <div className="about-tab">
                            <ul className="nav nav-pills nav-justified">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="pill" href="#tab-content-1">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="pill" href="#tab-content-2">Mission</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="pill" href="#tab-content-3">Vision</a>
                                </li>
                            </ul>

                            <div className="tab-content">
                                <div id="tab-content-1" className="container tab-pane active">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae pellentesque turpis. Donec in hendrerit dui, vel blandit massa. Ut vestibulum suscipit cursus. Cras quis porta nulla, ut placerat risus. Aliquam nec magna eget velit luctus dictum. Phasellus et felis sed purus tristique dignissim. Morbi sit amet leo at purus accumsan pellentesque. Vivamus fermentum nisi vel dapibus blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </div>
                                <div id="tab-content-2" className="container tab-pane fade">
                                    Sed tincidunt, magna ut vehicula volutpat, turpis diam condimentum justo, posuere congue turpis massa in mi. Proin ornare at massa at fermentum. Nunc aliquet sed nisi iaculis ornare. Nam semper tortor eget est egestas, eu sagittis nunc sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent bibendum sapien sed purus molestie malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </div>
                                <div id="tab-content-3" className="container tab-pane fade">
                                    Aliquam dolor odio, mollis sed feugiat sit amet, feugiat ut sapien. Nunc eu dignissim lorem. Suspendisse at hendrerit enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed condimentum semper turpis vel facilisis. Nunc vel faucibus orci. Mauris ut mauris rhoncus, efficitur nisi at, venenatis quam. Praesent egestas pretium enim sit amet finibus. Curabitur at erat molestie, tincidunt lorem eget, consequat ligula.
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

export default AboutUsComp;
