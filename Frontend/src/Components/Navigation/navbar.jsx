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
    const isMobile = width <= 1000;
    if (!isMobile) {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-body justify-content-center p-0" style={{ marginTop: '20px' }}>
                <div className="container">
                    <div className="row w-100 h-100 justify-content-center align-items-end text-center">
                        <div className="h-100 col-4 nav-section d-inline">
                            <div className="row h-100">
                                <div className="col-12 nav-item d-inline-block justify-content-center align-items-bottom h-100">
                                    <a className="nav-sub" href="me" >About Me</a>
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
                                    <a className="nav-sub" href="https://notes.piiro.dev/" >Writing</a>
                                </div>
                                <div className="col-6 nav-item dropdown">
                                    <a className=" nav-sub dropdown-toggle" href="#dropdown"
                                        id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">Info</a>
                                    <div className="dropdown-menu bg-primary nav-sub" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#1">not</a>
                                        <a className="dropdown-item" href="#2">done</a>
                                        <a className="dropdown-item" href="#3">yet</a>
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
                <h1>
                <a className="nav-link text-secondary align-middle" href="/">Meet's Development Site</a>
                </h1>
                <div>
                <button class="align-center navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <h1>&#9776;</h1>
                </button>
                <nav className="navbar navbar-dark">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                             <a className="nav-link text-secondary" href="me" >About Me</a>
                             <a className="nav-link text-secondary" href="https://notes.piiro.dev/" >Writing</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                </div>
                
            </div>
        )
    }
}