import React, { useRef } from 'react';
import orangeNebula from '../imgs/orangeneb.jpg';
import './flagcarousel.css';



export default function FlagCard(props) {

    const cardSource = props.src ? props.src : orangeNebula;
    const cardText = props.text ? props.text : "\u2B4D";

    const parallaxRef = useRef(null);




    const handleMouseMove = (e) => {
        const card = parallaxRef.current;
        if (!card) return;

        const containerRect = card.getBoundingClientRect();
        const containerCenterX = containerRect.left + containerRect.width / 2;
        const containerCenterY = containerRect.top + containerRect.height / 2;
        const mouseX = e.pageX;
        const mouseY = e.pageY;
        const moveX = (mouseX - containerCenterX) / 15; // Adjust the sensitivity of the effect
        const moveY = (mouseY - containerCenterY) / 15; // Adjust the sensitivity of the effect

        card.style.transform = `translate3d(${moveX}px, ${moveY}px, -10px) rotateX(${moveY / 2}deg) rotateY(${moveX / 2}deg)`;
    };

    const handleMouseLeave = () => {
        const card = parallaxRef.current;
        if (!card) return;

        card.style.transform = 'translate3d(0, 0, -10px)'; // Reset the image position when the mouse leaves the card
    };


    return (
        // Take entire size of parent with h-100 and w-100
        <div className="h-100 w-100 bg-transparent">
            <div className="card rounded rounded-top bg-transparent h-100 w-100" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                <div className="parallax-container position-relative h-100 overflow-hidden 
                                rounded-top bg-transparent border border-secondary border-2">
                    <img className="card-img-top h-150 rounded-top position-absolute bg-transparent"
                        style={{
                            width: "150%", height: "150%", overflow: "hidden",
                            left: "-30px", top: "-50px"
                        }}
                        src={cardSource} alt="Universe" ref={parallaxRef} />
                </div>
                <div className="card-body border border-secondary border-top-0 border-2">
                    <h2 className="card-title text-center">{cardText}</h2>
                </div>
            </div>

        </div>
    )
}

