import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import './Game24PageCssStyle/AnswerStyle.css'

function AnswerComponent(props) {

    return (
        <Row>
            {
                props.result.map((item, index) => (
                    <Col key={index}>
                        <div className='AnswerStyle'>
                            {item}
                        </div>
                    </Col>
                ))
            }


           



        </Row>
    );
}

export default AnswerComponent;