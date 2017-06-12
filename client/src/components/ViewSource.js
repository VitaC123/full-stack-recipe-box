import React from 'react';
import { Col, Row } from 'reactstrap';

function ViewSource(props) {
    return (
        <div className='viewSource'>
            <Row>
                <Col md='12'>
                    <p className='text-center'>
                        View source on <a
                            href='https://github.com/VitaC123/full-stack-recipe-box'
                            target='_blank'
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    </p>
                </Col>
            </Row>
        </div>
    );
}

export default ViewSource;