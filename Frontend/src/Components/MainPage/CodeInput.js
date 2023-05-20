import React, {useState} from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
const BACKEND_SERVER = "http://localhost:8080";


function inputBlur(e, setForm, defaultForm, setButton) {
    if (e.target.value === "") { setForm(defaultForm); setButton(false);}
    else {
        setButton(true);
    }
}

function inputChange(e, setForm, defaultForm, setButton) {
    setForm(e.target.value);
    if (e.target.value !== "" && e.target.value !== defaultForm) {
        setButton(true);
    } else (setButton(false));
}

function SecretSubmit(e, form, navigate) { 

    fetch(BACKEND_SERVER + "/secret", {
        method: 'GET',
        headers: new Headers({'Authorization': form})
    }).then((res) => res.text()).then((html) => {
        navigate("/secret")
        // document.body.innerHTML = html;
    });
}

export default function CodeInput() {
    const [form, setForm] = useState("Secret Code");
    const [showButton, setButton] = useState(false);

    var defaultForm = "Secret Code";
    const navigate = useNavigate();
    const faded = {color: "#acaea6"};
    const white = {color: "white"};
    return (
        <div className="App-SecretInput">
            <input type="text" 
            style={(form === defaultForm) ? faded : white}
            className="CI-SecretInput"
            defaultValue={"Secret Code"}
            onChange={e => inputChange(e, setForm, defaultForm, setButton)}
            onBlur={e => inputBlur(e, setForm, defaultForm, setButton)}
            onFocus={e => {if (e.target.value === defaultForm) {setForm("");}}}
            value={form}
            />
            {showButton ? <button className="CI-SecretButton" onClick={e => SecretSubmit(e, form, navigate)}>Submit</button> : null}
        </div>
    )
}