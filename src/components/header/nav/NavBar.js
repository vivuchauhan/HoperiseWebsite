import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    // <div className="NavBar">
    //   <div className="Logo">
    //     <a className="navbar-brand">
    //       <Link to="/">HopeRise</Link>
    //     </a>
    //   </div>
    //   <div className="navbar-btn">
    //     <div className="navbar-btn-item">
    //       <a className="Home">
    //         <Link to="/">Home</Link>
    //       </a>
    //     </div>
    //     <div className="navbar-btn-item">
    //       <a className="About">
    //         <Link to="/about">About</Link>
    //       </a>
    //     </div>
    //     <div className="navbar-btn-item">
    //       <a className="Blog">
    //         <Link to="/blog">Blog</Link>
    //       </a>
    //     </div>
    //     <div className="navbar-btn-item">
    //       <a className="Contact">
    //         <Link to="/contact">Contact</Link>
    //       </a>
    //     </div>
    //   </div>
    // </div>
    <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand-name" href="#" ><Link to="/" style={{color:'#fff'}}>HopeRise</Link></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <div className="menuIcon"></div>
          <div className="menuIcon"></div>
          <div className="menuIcon"></div>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" href="#"><Link to="/" style={{color:'#fff'}}>Home</Link></a>
            <a className="nav-link" href="#"><Link to="/about" style={{color:'#fff'}}>About</Link></a>
            <a className="nav-link" href="#"><Link to="/blog" style={{color:'#fff'}}>Blog</Link></a>
            <a className="nav-link" href="#"><Link to="/contact" style={{color:'#fff'}}>Contact</Link></a>
          </div>
        </div>
        <div className="navbar-nav2">
            <a className="nav-link2" href="#"><Link to="/" style={{color:'#fff'}}>Home</Link></a>
            <a className="nav-link2" href="#"><Link to="/about" style={{color:'#fff'}}>About</Link></a>
            <a className="nav-link2" href="#"><Link to="/blog" style={{color:'#fff'}}>Blog</Link></a>
            <a className="nav-link2" href="#"><Link to="/contact" style={{color:'#fff'}}>Contact</Link></a>
          </div>
      </div>
    </nav>

  );
}

export default NavBar;
