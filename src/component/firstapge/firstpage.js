import React, { useState } from "react";
import './FirstPageCssStyle/firstpage.css'
import { Link } from 'react-router-dom'

import Textbox from "./TextBox.js";
import './FirstPageCssStyle/3Btn.css'

function Firstpage() {
    const [name, setName] = useState("")
    localStorage.setItem("username", name)
    console.log(typeof name);
    return (
        <div>
            <header className="BG">
                <div className="middle"></div>
                    <div className="header">
                        <div className="nameHeader">THE 24 GAME</div>
                        <div className="space" />
                        <Textbox name={name} setName={setName} />
                        <div className="space" />
                        <div className="font-style">SELECT MODE TO PLAY</div>
                        <div className="space" />
                        <Link to={"/Gamepage"}>
                            <button
                                className={name ? "btn-mode1" : "disable"} onClick={() => console.log(name)} disabled={!name}>
                                PLAY 3 GAMES
                            </button>
                        </Link>
                    </div>
                
            </header >
        </div >
    );
}

export default Firstpage;