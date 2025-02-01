'use client'

import React, { useState } from 'react';

const Header = () => {
    return(
        <header>
            
            <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        <a className="nav-link" href="#">Blog</a>
                        <a className="nav-link" href="#">About Us</a>
                        <a className="nav-link" href="#">Contact Us</a>
                    </div>
                </div>
                </div>
            </nav>

            <div className="row banner">
                <div className="col-md-6 col-lg-6 col-sm-12 left">
                    
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12 right">
                    <h2>APEXCRAFT</h2>
                    <p>The quick fox jumped over the lazy brown dogs.<br/> the quick fox jumped over the lazy brown dogs.<br/> the quick fox jumped over the lazy brown dogs.</p>

                    <button className="btn btn-dark">Contact us</button>
                    <button className="btn btn-outline-dark">Register</button>
                </div>
            </div>
        </header>
    )
}

export default Header;