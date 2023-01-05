import React, {useState} from 'react'


function inputBlur(e, setForm, defaultForm, setButton) {
    if (e.target.value=="") { setForm(defaultForm); setButton(false);}
    else {
        setButton(true);
    }
}

export default function CodeInput() {
    const [form, setForm] = useState("Secret Code");
    const [showButton, setButton] = useState(false);

    var defaultForm = "Secret Code";
    const faded = {color: "#acaea6"};
    const white = {color: "white"};
    return (
        <div className="App-SecretInput">
            <input type="text" 
            style={(form == defaultForm) ? faded : white}
            className="CI-SecretInput"
            defaultValue={"Secret Code"}
            onChange={e => setForm(e.target.value)}
            onBlur={e => inputBlur(e, setForm, defaultForm, setButton)}
            onFocus={e => {if (e.target.value == defaultForm) {setForm("");}}}
            value={form}
            />
            {showButton ? <button className="CI-SecretButton">Submit</button> : null}
        </div>
    )
}