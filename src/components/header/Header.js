import React from 'react'
import Top from "./top/Top";
import NavBar from "./nav/NavBar";
import PageHeader from "./pageHeader/PageHeader";
import "./header.css"
function Header() {
  return (
    <div>
        <Top/>
        <NavBar/>
        <PageHeader/>
    </div>
  )
}

export default Header;