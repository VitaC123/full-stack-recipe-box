import React, { Component } from 'react';
import Home from './components/Home';
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Container>
          <Row>
            <Col md='12'>
              <Home />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
