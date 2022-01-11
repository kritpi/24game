import React, { useState, useEffect } from "react";
import './Game24PageCssStyle/game24page.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';

import { addData, readData } from "../../dbControler";


import Stopwatch from "./Stopwatch";
import PageCount from "./PageCount";
import NumberComponent from "./NumberComponent";
import OperatorComponent from "./OperatorComponent";
import AnswerComponent from "./AnswerComponent";
import './Game24PageCssStyle/NextBtn.css'
import './Game24PageCssStyle/Stopwatch.css'
import './Game24PageCssStyle/submitBtn.css'
import { GameProblem } from './RandomNumber'
import { Link } from "react-router-dom";

function Gamepage(props) {
    const [pageCount, setPageCount] = useState(1)
    const [currentIndex, setCurrentIndex] = useState(-1)
    const [count, setCount] = useState(-1)
    const [clickedPosition, setClickedPosition] = useState()
    const [result, setResult] = useState([])
    const [status, setStatus] = useState(true)
    const [onNextBtn, setOnNextBtn] = useState("NEXT PROBLEMS")
    //for stopWatch
    const [running, setRunning] = useState(false);
    const [randomNum, setRandomNum] = useState({})

    const [isDisable1, setIsDisable1] = useState(false)
    const [isDisable2, setIsDisable2] = useState(false)
    const [isDisable3, setIsDisable3] = useState(false)
    const [isDisable4, setIsDisable4] = useState(false)

    const [isShowScoreBoardBtn, setIsShowScoreBoardBtn] = useState(false)

    //Random number object when enter the page
    useEffect(() => {
        setRunning(true)
        let rendomNumObj = GameProblem[Math.floor(Math.random() * GameProblem.length)];
        setRandomNum(rendomNumObj)
    }, [])

    //Check if user put number next to number?
    useEffect(() => {
        setCurrentIndex(currentIndex + 1)
        setCount(count + 1)
        if (count >= 1) {
            if (Number.isInteger(result[currentIndex - 1]) && Number.isInteger(result[currentIndex])) {
                let tmpResult = result
                tmpResult.pop()
                setCurrentIndex(currentIndex)
                setResult(tmpResult)
                switch (clickedPosition) {
                    case "1":
                        setIsDisable1(false)
                        break
                    case "2":
                        setIsDisable2(false)
                        break
                    case "3":
                        setIsDisable3(false)
                        break
                    case "4":
                        setIsDisable4(false)
                        break
                    default:
                        break
                }
            }
        }
    }, [result])

    //Add answer into array
    const onAnswerClick = (newAnswer, position) => {
        setResult([...result, newAnswer])
        setClickedPosition(position)
    }

    //Change text on nextBtn when 3/3
    const changeNextToSubmitBtn = () => (
        setOnNextBtn("SUBMIT ANSWER")
    )

    const onNext = () => {
        try {
            // 1.Add answer from array to str
            let answerResult = ""
            result.forEach(item => answerResult += item)
            
            //2. calculate
            let calculate = eval(answerResult)

            const mock = 24
            
            if (calculate === 24) {
                // submit answer
                if (pageCount === 3) {
                    // 1. stop timing
                    setRunning(false)
                    // 2. show scoreboard btn
                    setIsShowScoreBoardBtn(true)

                }
                else {
                    //go to next number
                    let newRandomNumber = GameProblem[Math.floor(Math.random() * GameProblem.length)];
                    setRandomNum(newRandomNumber)
                    setPageCount(pageCount + 1)
                    //When entering last number
                    if (pageCount === 2) {
                        changeNextToSubmitBtn() 
                    }
                }
                clearAnswer()
            }
            else {
                clearAnswer()
            }
        }
        catch (error) {            
            setStatus(false)
            clearAnswer()
        }
    }

    //clear reasult
    const clearAnswer = () => {
        setResult([])
        
        setIsDisable1(false)
        setIsDisable2(false)
        setIsDisable3(false)
        setIsDisable4(false)
        
        setCount(-1)
        setCurrentIndex(-1)
    }

    const changeStatus = () => (
        setStatus(true)
    )

    return (
        <div className="BG-color">
            <Container>
                <div className="gamePageCenter"></div>
                <Row>
                    <Col> <Stopwatch running={running} setRunning={setRunning} isShowScoreBoardBtn={isShowScoreBoardBtn} /> </Col>
                    {
                        !isShowScoreBoardBtn && <Col> <PageCount pageCount={pageCount} /> </Col>
                    }
                </Row>

                {
                    !isShowScoreBoardBtn &&
                    <div>
                        <div className="Box"></div>
                        <NumberComponent
                            onClickNum={onAnswerClick}
                            setIsDisable1={setIsDisable1}
                            setIsDisable2={setIsDisable2}
                            setIsDisable3={setIsDisable3}
                            setIsDisable4={setIsDisable4}
                            isDisable1={isDisable1}
                            isDisable2={isDisable2}
                            isDisable3={isDisable3}
                            isDisable4={isDisable4}
                            randomNum={randomNum}
                        />

                        <div className="Box"></div>

                        <OperatorComponent onClickOperator={onAnswerClick} />
                        <div className="Box"></div>

                        <AnswerComponent result={result} />
                        <div className="Box"></div>
                        <Row>
                            <Col>
                                <button onClick={clearAnswer} className="clearAnswer">
                                    CLEAR ANSWER
                                </button>
                            </Col>

                            <Col>
                                <button className='NextBtn' onClick={onNext}>
                                    {onNextBtn}
                                </button>
                            </Col>
                        </Row>
                    </div>

                }

                {
                    //Show scoreboard btn
                    isShowScoreBoardBtn &&
                        <div className="Box">
                            <Link to={"/ScoreBoard"}>
                                <button className='SubmitBtn' onClick={onNext}>
                                    GO TO SCOREBOARD
                                </button>
                            </Link>
                        </div>             
                }

                {
                    // Show alert when the answer is error
                    !status && alert(changeStatus() + "Your answer is mathematically incorrect.")
                }

            </Container>
        </div>
    );
}

export default Gamepage;