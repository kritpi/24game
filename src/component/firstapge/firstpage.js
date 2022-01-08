import React ,{useState}from "react";
import './FirstPageCssStyle/firstpage.css'
import {Link} from 'react-router-dom'

import Textbox from "./TextBox.js";
import './FirstPageCssStyle/3Btn.css'

import Btn5 from "./5Btn.js";

function Firstpage() {
    const [name, setName] = useState("")
    

    return (
        <div className="Home">
            <header className="BG">
                <div className="header">
                    <div className="nameHeader">THE 24 GAME</div>
                    <div className="space" />
                    <Textbox name={name} setName={setName} />
                    <div className="space" />
                    <div className="font-style">SELECT MODE TO PLAY</div>
                    <div className="space" />
                    <Link to={"/Gamepage"}>
                        <button 
                        className= {name? "btn-mode1": "disable"} onClick={() => console.log(name)} disabled = {!name}>
                            PLAY 3 GAMES
                        </button>
                    </Link>
                    {/* <div style={{ height: "30px" }} />
                    <Btn5 /> */}
                </div>

            </header>
        </div>
    );
}

export default Firstpage;