import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import skyscrapers from './skyscrapers.jpg'
import Form from 'react-bootstrap/Form'
import databaseHelper from '../databaseFunctions'

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: {
                firstName: "",
                lastName: ""
            },
            phone: "",
            location: {
                city: "",
                state: "",
                country: "",
                postalCode: "",
                address: ""
            },
            email: "",
            education: {
                organization: "",
                grade: "",
                completionDate: "",
                degree: "",
                program: ""
            },
            skills: [],
            experiences: []
        };
        this.nameParse = {
            name: "Name",
            firstName: "First Name",
            lastName: "Last Name",
            phone: "Phone",
            location: "Location",
            email: "Email",
            education: "Education",
            organization: "Organization",
            grade: "GPA",
            completionDate: "Completion Date",
            experiences: "Experiences",
            skills: "Skills",
            degree: "Degree",
            program: "Program",
            city: "City",
            country: "Country",
            postalCode: "Postal Code",
            address: "Address",
            state: "State/Province"
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }
    
    handleUpload(event){
        //event.target.files[0] is the file that gets uploaded

        // console.log(event.target.files[0])
        let uploadedFile = event.target.files[0]
        console.log("File Uploaded");
        let url = 'http://127.0.0.1:5000/uploadDoc'
        let data = new FormData()
        data.append("file", event.target.files[0])
        var req = fetch(url, {
            method: "post",
            body: data
        })

        console.log(req)
        let test = this;
        req.then(function(response) {
            return response.json()
        }).then(function(obj) {
            console.log(obj)
            let workExp = [];
            for(const experience of Object.keys(obj.data.workExperience)) {
                let data = {};
                data.description = obj.data.workExperience[experience].jobDescription;
                data.startDate = obj.data.workExperience[experience].dates.startDate;
                data.endDate = obj.data.workExperience[experience].dates.endDate;
                data.jobTitle = obj.data.workExperience[experience].jobTitle;
                data.employer = obj.data.workExperience[experience].organization;
                workExp.push(data);
            }
            let locationInfo = {};
            if(obj.data.location) {
                locationInfo.country=obj.data.location.country;
                locationInfo.postalCode=obj.data.location.postalCode;
                locationInfo.state=obj.data.location.state;
            }
            let educationData = {};
            if(obj.data.education && Object.keys(obj.data.education).length >0) {
                educationData.organization = obj.data.education[Object.keys(obj.data.education)[0]].organization
                educationData.grade = obj.data.education[Object.keys(obj.data.education)[0]].grade.value
                educationData.completionDate = obj.data.education[Object.keys(obj.data.education)[0]].dates.completionDate
                educationData.degree = obj.data.education[Object.keys(obj.data.education)[0]].accreditation.education
                educationData.program = obj.data.education[Object.keys(obj.data.education)[0]].inputStr
            }
            test.setState({
                name: {
                    firstName: obj.data.name.first,
                    lastName: obj.data.name.last
                },
                phone: obj.data.phoneNumbers[0],
                skills: obj.data.skills,
                experiences: workExp,
                email: obj.data.emails[0],
            })
        })
    }
    
    handleChange(event) {
        this.setState({[event.target.source]: event.target.value}, () => (console.log([event.target.source])));
    }

    handleSubmit(event) {
        let sender = new databaseHelper();
        let skillData = [];
        for(let i=1; i<this.state.skills.length+1; i++) {
            skillData.push(event.target['skill'+i.toString()].value);
        }
        let experienceData = [];
        for (let i=1; i<this.state.experiences.length+1; i++) {
            let newData = {};
            newData['employer'] = event.target['experience'+i.toString()+'Employer'].value;
            newData['jobTitle'] = event.target['experience'+i.toString()+'JobTitle'].value;
            newData['startDate'] = event.target['experience'+i.toString()+'StartDate'].value;
            newData['endDate'] = event.target['experience'+i.toString()+'EndDate'].value;
            newData['description'] = event.target['experience'+i.toString()+'Description'].value;
            experienceData.push(newData)
        }
        let data = {
            name: {
                firstName: event.target.firstName.value,
                lastName: event.target.lastName.value,    
            },
            phoneNumber: event.target.phone.value,
            location: {
                city: event.target.city.value,
                state: event.target.state.value,
                country: event.target.country.value,
                postalCode: event.target.postalCode.value,
                address: event.target.address.value
            },
            email: event.target.email.value,
            education: {
                organization: event.target.organization.value,
                grade: event.target.grade.value,
                completionDate: event.target.completionDate.value,
                degree: event.target.degree.value,
                program: event.target.program.value
            },
            skills: skillData,
            experiences: experienceData
        }
        alert("Successfully saved data!")
        data = JSON.parse(JSON.stringify(data, function(k, v) {
            if (v === undefined) { return null; } return v; 
         }));
         
        sender.sendToFirestore(data);
    }
    
    addToList(name) {
        if (name == "skills") {
            this.setState(prevState => ({
                [name] : [...prevState[name], ""]
            }));
        } else if (name=="experiences") {
            this.setState(prevState => ({
                [name] : [...prevState[name], {
                    employer: "",
                    jobTitle: "",
                    startDate: "",
                    endDate: "",
                    description: ""
                }]
            }))
        }
    }
    removeFromList(name) {
        const length = this.state[name].length-1;
        this.setState({
            [name] : this.state[name].filter((_, i) => i !== length)
        })
    }
    renderForm(parentObject, thingToRender) {
        if (typeof(parentObject[thingToRender]) == 'string') {
            return(
                <div>
                    <Form.Label className={(parentObject == this.state)? "object-title" : ""}>{this.nameParse[thingToRender]}</Form.Label>
                    <Form.Control id={thingToRender} defaultValue={parentObject[thingToRender]} type="text"></Form.Control>
                </div>
            );
        } else if (typeof(parentObject[thingToRender]) == 'object' && !Array.isArray(parentObject[thingToRender])) {
            return(
                <div>
                    <Form.Label className="object-title">{this.nameParse[thingToRender]}</Form.Label>
                    <div className="mx-2">{Object.keys(parentObject[thingToRender]).map((key, index) => (this.renderForm(parentObject[thingToRender], key)))}</div>
                </div>
            );
        } else if (thingToRender=="skills") {
            return(
                <div>
                    <Form.Label className="object-title">{this.nameParse[thingToRender]}</Form.Label>
                    { parentObject[thingToRender].map((key, index) => (
                        <Form.Control id={"skill" + (index+1).toString()} type="text" className="my-1" defaultValue={parentObject[thingToRender][index]}></Form.Control>
                    ))}
                    <br/>
                    <Button className="mx-1" variant="success" onClick={() => this.addToList("skills")}>Add a Skill</Button>
                    <Button className="mx-1" variant="danger" onClick={() => this.removeFromList("skills")}>Remove a Skill</Button>
                </div>
            );
        } else if (thingToRender=="experiences") {
            return(
                <div>
                    <Form.Label className="object-title">{this.nameParse[thingToRender]}</Form.Label>
                    {parentObject[thingToRender].map((item, index) => (
                        <div className="mx-2">
                            <br/>
                            <Form.Label className="list-entry-title">Experience {index+1}</Form.Label>
                            <Row>
                            <Col>
                                <Form.Label>Employer</Form.Label>
                                <Form.Control id={"experience" + (index+1).toString() + "Employer"} type="text" defaultValue={item.employer}></Form.Control>
                            </Col>
                            </Row>
                            <Row>
                            <Col lg={8} md={8} sm={12} xs={12}>
                                <Form.Label>Position</Form.Label>
                                <Form.Control id={"experience" + (index+1).toString() + "JobTitle"} type="text" defaultValue={item.jobTitle}></Form.Control>
                            </Col>
                            <Col lg={2} md={2} sm={12} xs={12}>
                                <Form.Label>Start Date</Form.Label>
                                <Form.Control id={"experience" + (index+1).toString() + "StartDate"} type="text" defaultValue={item.startDate}></Form.Control>
                            </Col>
                            <Col lg={2} md={2} sm={12} xs={12}>
                                <Form.Label>End Date</Form.Label>
                                <Form.Control id={"experience" + (index+1).toString() + "EndDate"} type="text" defaultValue={item.endDate}></Form.Control>
                            </Col>
                            </Row>
                            <Row>
                            <Col>
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows={3} id={"experience" + (index+1).toString() + "Description"} type="text" defaultValue={item.description}></Form.Control>
                            </Col>
                            </Row>
                            <br/>
                        </div>
                    )) }
                    <br/>
                    <Button className="mx-1" variant="success" onClick={() => this.addToList("experiences")}>Add an Experience</Button>
                    <Button className="mx-1" variant="danger" onClick={() => this.removeFromList("experiences")}>Remove an Experience</Button>
                </div>
            );
        }
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
                <Jumbotron className="main-content py-5" fluid>
                    <Container>
                        <Row>
                            <Col>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group>
                                    {Object.keys(this.state).map((key, index) => (
                                    <>
                                    {this.renderForm(this.state, key)}
                                    <hr/>
                                    </>
                                    ))}
                                    {/* <Form.Group>
                                        <Form.Label>First Name:</Form.Label>
                                        <Form.Control type="text"/>
                                    </Form.Group> */}
                                    <Button variant="primary" type="submit">Save</Button>
                                </Form.Group>
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