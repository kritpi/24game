import './LastPageCssStyle/LastPage.css'

import React, { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';
import { array } from './test'

function LastPage(props) {
    return (
        <div className='LastpageBG'>
            <Container>
                <div className='Box'>
                    <div>Score Board</div>
                    <table className='table'>
                        <tr>
                            <th>
                                name1
                            </th>

                            <th>
                                time1
                            </th>
                        </tr>
                        {
                            array.sort((a, b) => {
                                return a.score - b.score;
                            }).map(item =>
                                <tr>
                                    <td>
                                        {item.name}
                                    </td>

                                    <td>
                                        {item.score}
                                    </td>
                                </tr>
                            )
                        }

                    </table>
                </div>
            </Container>
        </div>

    );
}

export default LastPage;