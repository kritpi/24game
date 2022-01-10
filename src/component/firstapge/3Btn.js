import Gamepage from '../game24page/game24page';
import './FirstPageCssStyle/3Btn.css'
import { Link } from 'react-router-dom'

function Btn3() {
    return (
        <Link to={"/Gamepage"}>
            <button className="disable" onClick={() => console.log()}>
                PLAY 3 NUMBER IN A ROW
            </button>
        </Link>
    );
}

export default Btn3;
