import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import './Game24PageCssStyle/NumberStyle.css'

import { GameProblem } from './RandomNumber'

function NumberComponent(props) {
    // const [randomNum, setRandomNum] = useState({})

    // useEffect(() => {
    //     let rendomNumObj = GameProblem[Math.floor(Math.random() * GameProblem.length)];
    //     setRandomNum(rendomNumObj)
    // }, [])

    const onNumClick = (num, position) => {
        props.onClickNum(num, position)
        switch (position) {
            case "1":
                props.setIsDisable1(true)
                break
            case "2":
                props.setIsDisable2(true)
                break
            case "3":
                props.setIsDisable3(true)
                break
            case "4":
                props.setIsDisable4(true)
                break
        }
    }

    return (
        <Row>
            <Col>
                <button
                    className={props.isDisable1 ? "NumberStyleDisable" : "NumberStyle"}
                    onClick={() => onNumClick(props.randomNum.num1, "1")}
                    disabled={props.isDisable1}
                >
                    {props.randomNum.num1}
                </button>
            </Col>
            <Col>
                <button
                    className={props.isDisable2 ? "NumberStyleDisable" : "NumberStyle"}
                    onClick={() => onNumClick(props.randomNum.num2, "2")}
                    disabled={props.isDisable2}
                >
                    {props.randomNum.num2}
                </button>
            </Col>
            <Col>
                <button
                    className={props.isDisable3 ? "NumberStyleDisable" : "NumberStyle"}
                    onClick={() => onNumClick(props.randomNum.num3, "3")}
                    disabled={props.isDisable3}
                >
                    {props.randomNum.num3}
                </button>
            </Col>
            <Col>
                <button
                    className={props.isDisable4 ? "NumberStyleDisable" : "NumberStyle"}
                    onClick={() => onNumClick(props.randomNum.num4, "4")}
                    disabled={props.isDisable4}
                >
                    {props.randomNum.num4}
                </button>
            </Col>
        </Row>
    );
}

export default NumberComponent;