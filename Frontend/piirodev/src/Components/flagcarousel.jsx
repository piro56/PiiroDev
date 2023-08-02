import React from "react";
import './flagcarousel.css';
import FlagCard from "./flagcard";

export default function FlagCarousel() {
    return (
        <div>
            <div className="container-fluid justify-content-center mt-3" style={{ display: "flex" }}>
                <div className="row justify-content-center w-50 p-0" style={{ minHeight: "500px" }}>
                    
                    <div className="col-1 p-0 d-flex align-items-center justify-content-end">
                        <a type="button" class="btn btn-primary carousel-control carousel-control-prev-icon align-middle" 
                                        href="#flagCarousel" role="button" data-bs-slide="prev"> </a>
                    </div>

                    <div className="col-5 p-0 bg-transparent">
                        <div id="flagCarousel" className="carousel carousel-fade slide w-100 h-100" data-bs-ride="carousel">
                            <div class="carousel-inner w-100 h-100">
                                <div className="carousel-item active w-100 h-100">
                                    <FlagCard src="https://i.imgur.com/yr28Zuo.jpeg" />
                                </div>
                                <div className="carousel-item w-100 h-100">
                                    <FlagCard />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1 p-0 d-flex align-items-center">
                        <a type="button" class="btn btn-primary carousel-control carousel-control-next-icon align-middle" 
                                        href="#flagCarousel" role="button" data-bs-slide="next"> </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

