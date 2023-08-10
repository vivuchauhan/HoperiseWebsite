import React from 'react'
import "./pageHeader.css"

function PageHeader() {
  return (
    <div>
     <div className="page-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>From Blog</h2>
                    </div>
                    <div className="col-12">
                        <a href="#">Home</a>
                        <a href="#">Blog</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PageHeader