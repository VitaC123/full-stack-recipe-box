import React, { Component } from 'react';
import logo from '../images/logo.svg';
import SignIn from './SignIn';
import ViewSource from './ViewSource';
import { Container, Row, Col, Jumbotron } from 'reactstrap';

class Home extends Component {
    render() {
        return (
            <div>
                <Jumbotron fluid>
                    <Container fluid>
                        <Row>
                            <Col md='6'>
                                <img className='logo' src={logo} alt='logo' />
                            </Col>
                            <Col md='6'>
                                <h1 className='display-3'>Full Stack Recipe Box</h1>
                                <p className='lead'>A recipe box app built around a database</p>
                                
                                <SignIn />
                                <ViewSource />
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default Home;