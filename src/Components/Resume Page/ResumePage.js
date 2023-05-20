import React, { useState, useEffect } from 'react';


export default function ResumePage() {
    const [resp, setResp] = useState("Default...");
    useEffect(() => {
        // Update the document title using the browser API
        fetch("http://localhost:8080/").then((response) => response.json()).then(data => (setResp(data.str)));
      });


    return (
        <div>
            <h1> {resp} </h1>
        </div>
    )
}