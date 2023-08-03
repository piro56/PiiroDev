import React from "react";
import './nav.scss';

export default function NavBar() {
    return (
        
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-body justify-content-center" style={{marginTop: '20px'}}>


                <ul className="navbar-nav mr-auto align-items-end" id="navBarSupportedContent">
                        
                        { /* Left */}
                        <li className="nav-item">
                            <a className="nav-link nav-sub text-med" href="#t" >Blog</a>
                        </li>

                        { /* Center */}
                        <li className="nav-item active text-large nav-main">
                            <a className="nav-link text-secondary" href="/">Meet's Development Site</a>
                        </li>

                        { /* Dropdown */}
                        <li className="nav-item dropdown">
                            <a className="nav-link nav-sub text-med dropdown-toggle" href="#dropdown"
                                id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">Info</a>
                            <div className="dropdown-menu bg-primary" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#1">Action</a>
                                <a className="dropdown-item" href="#2">Another action</a>
                                <a className="dropdown-item" href="#3">Something else here</a>
                            </div>
                        </li>
                </ul>
            </nav>
        </div>



    )
}