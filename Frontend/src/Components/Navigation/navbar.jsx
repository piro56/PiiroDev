import {React, useState, useEffect} from "react";
import './nav.scss';



export default function NavBar() {

    const [width, setWidth] = useState(window.innerWidth);
    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);
    const isMobile = width <= 768;
    if (!isMobile) {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-body justify-content-center p-0" style={{ marginTop: '20px' }}>
                <div className="container">
                    <div className="row w-100 h-100 justify-content-center align-items-center text-center">

                        <div className="col-4 nav-section d-grid flex-column h-100">
                            <div className="row h-100">
                                <div className="col-12 nav-item d-flex justify-content-center align-items-center">
                                    <a className="nav-link nav-sub text-med" href="#t" >About Me</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-4 nav-section d-grid">
                            <div className="row h-100">
                                <div className="col-12 nav-item active text-large nav-main d-flex justify-content-center align-items-center">
                                    <a className="nav-link text-secondary align-middle" href="/">Meet's Development Site</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 nav-section">
                            <div className="row">
                                <div className="col-6 nav-item align-middle">
                                    <a className="nav-link nav-sub text-med" href="#t" >Writing</a>
                                </div>
                                <div className="col-6 nav-item dropdown">
                                    <a className="nav-link nav-sub text-med dropdown-toggle" href="#dropdown"
                                        id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">Info</a>
                                    <div className="dropdown-menu bg-primary" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#1">Action</a>
                                        <a className="dropdown-item" href="#2">Another action</a>
                                        <a className="dropdown-item" href="#3">Something else here</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    ) }
    else {
        return (
            <div>
                
            </div>
        )
    }
}