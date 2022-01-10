import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import './Game24PageCssStyle/OperatorStyle.css'

function OperatorComponent(props) {

    const onOperationClick = (operator) => {
        props.onClickOperator(operator)
    }

    return (
        <Row>
            <Col>
                <button className='OperatorStyle' onClick={() => onOperationClick('+')} >
                    +
                </button>
            </Col>

            <Col>
                <button className='OperatorStyle' onClick={() => onOperationClick('-')}>
                    -
                </button>
            </Col>

            <Col>
                <button className='OperatorStyle' onClick={() => onOperationClick('*')}>
                    ×
                </button>
            </Col>

            <Col>
                <button className='OperatorStyle' onClick={() => onOperationClick('/')}>
                    ÷
                </button>
            </Col>

            <Col>
                <button className='OperatorStyle' onClick={() => onOperationClick('(')}>
                    (
                </button>
            </Col>

            <Col>
                <button className='OperatorStyle' onClick={() => onOperationClick(')')}>
                    )
                </button>
            </Col>
        </Row>
    );
}

export default OperatorComponent;