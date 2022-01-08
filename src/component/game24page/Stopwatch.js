import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Game24PageCssStyle/Stopwatch.css'

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
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [props.running]);
    return (
        <div className="WatchBody">
            <div className="stopwatch">
                <div className="numbers">
                    <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                    <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                    <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
                </div>
                <div className="buttons">
                    <button onClick={() => props.setRunning(true)}>Start</button>
                    <button onClick={() => props.setRunning(false)}>Stop</button>
                    <button onClick={() => setTime(0)}>Reset</button>
                </div>
            </div>
        </div>


    );
};

export default Stopwatch;