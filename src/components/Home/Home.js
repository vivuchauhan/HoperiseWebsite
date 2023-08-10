import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Top from '../header/top/Top';
import NavBar from '../header/nav/NavBar';
import Basepage from './basepage';

function Home() {
  return (
    <div className="App">
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
     <Basepage />
    </div>
  );
}

export default Home;


