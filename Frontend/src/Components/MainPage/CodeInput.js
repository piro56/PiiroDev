import React, {useState} from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

function inputBlur(e, setForm, defaultForm, setButton) {
    if (e.target.value=="") { setForm(defaultForm); setButton(false);}
    else {
        setButton(true);
    }
}

function inputChange(e, setForm, defaultForm, setButton) {
    setForm(e.target.value);
    if (e.target.value != "" && e.target.value != defaultForm) {
        setButton(true);
    } else (setButton(false));
}

function SecretSubmit(e, form, navigate) {
    if (form == "Secret") {
        navigate("/resume")
    }
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
            style={(form == defaultForm) ? faded : white}
            className="CI-SecretInput"
            defaultValue={"Secret Code"}
            onChange={e => inputChange(e, setForm, defaultForm, setButton)}
            onBlur={e => inputBlur(e, setForm, defaultForm, setButton)}
            onFocus={e => {if (e.target.value == defaultForm) {setForm("");}}}
            value={form}
            />
            {showButton ? <button className="CI-SecretButton" onClick={e => SecretSubmit(e, form, navigate)}>Submit</button> : null}
        </div>
    )
}