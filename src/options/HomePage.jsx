import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import skyscrapers from './skyscrapers.jpg'

class HomePage extends Component {
    state = {  }
    render() { 
        return ( 
            <Jumbotron fluid className="main-content white-text" style={{backgroundImage=`url(${skyscrapers})`}}>
                <Container>
                    <Row>
                        <Col>
                            <h1 className="display-1 mx-auto header d-block text-center mb-0">Let's get started!</h1>
                            <br/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="mx-auto d-block text-center">Upload your resume below to start auto-parsing, or fill in data by yourself below.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button className="mx-auto d-block button">Upload Resume!</Button>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
         );
    }
}
 
export default HomePage;