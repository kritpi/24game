import React, { useState, useEffect } from "react";
import './Game24PageCssStyle/game24page.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';

import LastPage from '../Lastpage/LastPage';
import Stopwatch from "./Stopwatch";
import PageCount from "./PageCount";
import NumberComponent from "./NumberComponent";
import OperatorComponent from "./OperatorComponent";
import AnswerComponent from "./AnswerComponent";
import './Game24PageCssStyle/NextBtn.css'
import { GameProblem } from './RandomNumber'
import { Link, Redirect } from "react-router-dom";

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

    //useEffect = when enter this page, start timing automatically
    useEffect(() => {
        setRunning(true)
        let rendomNumObj = GameProblem[Math.floor(Math.random() * GameProblem.length)];
        setRandomNum(rendomNumObj)

    }, [])

    useEffect(() => {
        // console.log("position", clickedPosition);
        // let a = shell.echo('Sorry, this script requires git')
        // console.log("a", a)
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

    const onAnswerClick = (newAnswer, position) => {
        setResult([...result, newAnswer])
        setClickedPosition(position)
    }

    const changeNextToSubmitBtn = () => (
        setOnNextBtn("SUBMIT ANSWER")
    )

    const onNext = () => {
        try {
            let answerResult = ""
            result.forEach(item => answerResult += item)
            console.log(answerResult);
            console.log(typeof answerResult);
            let calculate = eval(answerResult)
            console.log(calculate);
            console.log(typeof calculate);
            const mock = 24
            if (mock === 24) {
                if (pageCount === 3) {
                    // {<link to={"/ScoreBoard"}>

                    // </link>}
                    setRunning(false)// stop timing and save the time duration
                    //Go to last pages
                }
                else {
                    let newRandomNumber = GameProblem[Math.floor(Math.random() * GameProblem.length)];
                    setRandomNum(newRandomNumber)
                    console.log("go to next page");
                    setPageCount(pageCount + 1) //detect เมื่อ pagecount = 3 
                    if (pageCount === 2) {
                        changeNextToSubmitBtn() //change content in NextBtn from "next" to "submit answer"
                    }
                    else {
                    }
                }
                console.log("--------------------");
                clearAnswer()
            }
            else {
                console.log("not go to next page");
                console.log("Show popup wrong answer or error");
                clearAnswer()
                console.log("--------------------");
            }
        }
        catch (error) {
            console.log("error");
            setStatus(false)
            clearAnswer()
            console.log("Show popup wrong answer or error");
            console.log("--------------------");

        }
    }

    //clear reasult
    const clearAnswer = () => {
        setResult([])
        setCount(-1)
        setCurrentIndex(-1)
        setIsDisable1(false)
        setIsDisable2(false)
        setIsDisable3(false)
        setIsDisable4(false)
    }

    const changeStatus = () => (
        setStatus(true)
    )

    return (
        <div className="BG-color">
            <Container>
                <Row>
                    <Col> <Stopwatch running={running} setRunning={setRunning} /> </Col>
                    <Col> <PageCount pageCount={pageCount} /> </Col>
                </Row>

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

                <button onClick={clearAnswer}>
                    Clear All Answer
                </button>

                <div className="Box"></div>

                <div>
                    {
                        (pageCount === 3) ?
                            <Link to={"/ScoreBoard"}>
                                <button className='NextBtn' onClick={onNext}>
                                    {onNextBtn}
                                </button>
                            </Link> 
                            :
                            <button className='NextBtn' onClick={onNext}>
                                {onNextBtn}
                            </button>
                    }

                </div>

                

                {
                    !status && alert(changeStatus() + "Your answer is mathematically incorrect.")
                }

            </Container>
        </div>
    );
}

export default Gamepage;