import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Game24PageCssStyle/Stopwatch.css'
import { addData } from "../../dbControler";

const Stopwatch = (props) => {
    const [time, setTime] = useState(0);
    // const [running, setRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (props.running) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
                
            }, 10);
        } else if (!props.running) {
            console.log("time", time);
            clearInterval(interval);

        }
        return () => clearInterval(interval);
    }, [props.running]);


    let min = ("0" + Math.floor((time / 60000) % 60)).slice(-2)
    let sec = ("0" + Math.floor((time / 1000) % 60)).slice(-2)
    let milliSec = ("0" + ((time / 10) % 100)).slice(-2)
    let timeReasult = min + ':' + sec + ':' + milliSec
    console.log(timeReasult);
    console.log(typeof time);
    console.log(typeof timeReasult);

    useEffect(() => {
        addData(localStorage.getItem("username"), timeReasult )
    }, [props.isShowScoreBoardBtn])


    return (
        <div className="WatchBody">
            <div className="stopwatch">
                {
                    !props.isShowScoreBoardBtn ?
                        <div className="numbers">
                            <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                            <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                            <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
                        </div> :
                        <div className="numbers">
                            <div className="BoxElement"></div>

                            <span>YOUR TIME IS </span>
                            <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                            <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                            <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
                        </div>
                }
            </div>
        </div>
    );
};

export default Stopwatch;