import React from "react";
import './flagcarousel.css';
import FlagCard from "./flagcard";

export default function FlagCarousel() {
    return (
        <div>
            <div className="container-fluid justify-content-center mt-3" style={{ display: "flex" }}>
                <div className="row justify-content-center col-lg-6 col-sm-10 p-0" style={{ minHeight: "500px" }}>

                    <div className="col-1 p-0 d-flex align-items-center justify-content-end">
                        <a type="button" className="btn btn-primary carousel-control carousel-control-prev-icon align-middle"
                            href="#flagCarousel" role="button" data-bs-slide="prev"> </a>
                    </div>

                    <div className="col-sm-9 col-md-9 col-lg-5 p-0 bg-transparent">
                        <div id="flagCarousel" className="carousel carousel-fade slide w-100 h-100" data-bs-interval="false">
                            <div className="carousel-inner w-100 h-100">

                                <div className="carousel-item w-100 h-100">
                                    <FlagCard text={"\u1803 \u1805"} />
                                </div>
                                <div className="carousel-item active w-100 h-100">
                                    <FlagCard src="https://i.imgur.com/vdbnqce.jpeg" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1 p-0 d-flex align-items-center">
                        <a type="button" className="btn btn-primary carousel-control carousel-control-next-icon align-middle"
                            href="#flagCarousel" role="button" data-bs-slide="next"> </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

