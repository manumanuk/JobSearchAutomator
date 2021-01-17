import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import skyscrapers from './skyscrapers.jpg'
import Form from 'react-bootstrap/Form'

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: {
                firstName: "",
                lastName: ""
            },
            phone: "",
            location: "",
            email: "",
            education: {
                organization: "",
                grade: "",
                completionDate: ""
            },
            skills: [],
            expereince: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }
    
    handleUpload(event){
        //event.target.files[0] is the file that gets uploaded

        let obj; // obj is the variable to hold the json file
        console.log(event.target.files[0])
        let uploadedFile = event.target.files[0]
        let url = 'URLForFlaskAPI'
        var req = fetch(url, {
            method: post,
            body: uploadedFile
        })

        req.then(function(response) {
            return response.json()
        }).then(function(obj) {obj => obj.json()})
        console.log(obj)
    }
    
    handleChange(event) {
        let newData = {}
        newData[event.target.id] = event.target.value
        this.setState(newData, () => (console.log(this.state.name)));
    }

    render() { 
        return ( 
            <body>
                <Jumbotron fluid className="main-content white-text" style={{backgroundImage:`url(${skyscrapers})`}}>
                    <Container fluid className="blur-bg">
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
                            <input type="file" id="resume-upload" name="filename" onChange={this.handleUpload} hidden/>
                            <label for="resume-upload" className="mx-auto d-block upload-button" style={{fontFamily: "Raleway", width: '12%'}}>Upload Resume!</label>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
                <Jumbotron fluid>
                    <Container>
                        <Row>
                            <Col>
                                <Form>
                                    <span><Form.Label>Name:
                                        <span><Form.Control id="name" type="text" onChange={this.handleChange}></Form.Control></span>
                                    </Form.Label></span>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </body>
         );
    }
}
 
export default HomePage;