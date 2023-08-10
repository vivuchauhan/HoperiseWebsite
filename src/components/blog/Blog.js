import React from 'react'
import "./blog.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Grid from './grid/Grid'
import Pagination from './pagination/Pagination'
import Header from '../header/Header';
import Footer from '../About/Footer'
function Blog() {
  return (
    <div className="blog">
       {/* Google Font  */}
       <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            {/* CSS Libraries  */}
            <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" />
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
            <link href="lib/flaticon/font/flaticon.css" rel="stylesheet" />
            <link href="lib/animate/animate.min.css" rel="stylesheet" />
            <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />

       <Header/>
      <div className="container">
        <div className="section-header text-center">
          <p>Our Blog</p>
          <h2>Latest news & articles directly from our blog</h2>
        </div>
        <Grid />
        <Pagination />
      </div>
      <Footer />
    </div>
  )
}

export default Blog;