import { useEffect, useState } from 'react';
import './LastPageCssStyle/LastPage.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { array } from './test'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { readData } from '../../dbControler';

function LastPage() {
    const [userList, setUserList] = useState([])

    useEffect(() => {
        readData()
            .then(usersList => {
                let tmpUserList = []
                usersList.forEach(user => {
                    let tmp = {
                        id: user.id,
                        name: user.data().name,
                        time: user.data().timeReasult
                    }
                    tmpUserList.push(tmp)
                })
                setUserList(tmpUserList)
            })
    }, [])

    return (
        <div className='LastpageBG'>
            <Container>
                < div className='Box'></div>
                <div className='TextHeadingStyle'>SCORE BOARD</div>
                <div className='Box'></div>
                <div className='overflowTable'>
                    <table className='table'>
                        <thead>
                            <tr className='blue'>
                                <th>NAME</th>
                                <th>TIME</th>
                            </tr>
                        </thead>
                        {
                            userList.sort((a, b) => {
                                return a.time - b.time;
                            }).map(item =>
                                <tbody>
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>{item.time}</td>
                                    </tr>
                                </tbody>
                            )
                        }
                    </table>
                </div>

                <div className='Box'></div>

                <Link to={"/"}>
                    <button className='backHome'>
                        BACK TO HOMEPAGE
                    </button>
                </Link>

            </Container>
        </div>

    );
}

export default LastPage;