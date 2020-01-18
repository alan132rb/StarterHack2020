import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Form from 'react-bootstrap/Form'

import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'

import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

import Carousel from 'react-bootstrap/Carousel'
import { useState } from 'react';

import rOne from './pics/RoomOne.jpg'
import rTwo from './pics/RoomTwo.jpg'
import rThree from './pics/RoomThree.jpg'

import FormControl from 'react-bootstrap/Form'


var slideShow = true;

function changeSlide() {
    slideShow = false;
    console.log("ran");
}

// Start of Navigation Bar
class LogInSignUp extends React.Component {
    constructor() {
        super()
        this.state = {
            signUp: false,
            logIn: true
        }
        this.signUpClick = this.signUpClick.bind(this)
    }

    signUpClick() {
        console.log("This has ran")
        console.log(this.state.logIn)
        this.setState(prevState => {
            return {
                signUp: true,
                logIn: false
            }
        })
    }
    render() {
        return (
            <>
                <div style={{ display: this.state.logIn ? 'block' : 'none' }}>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <center><h1>Login</h1></center>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                        </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <div class="text-center">
                            <Button variant="primary" type="submit">
                                Login
                        </Button>
                        </div>
                        <hr></hr>
                        <Button variant="primary" class="text-center" onClick={this.signUpClick}>
                            Sign Up
                    </Button>
                        <hr>
                        </hr>
                    </Form>
                </div>

                <div style={{ display: this.state.signUp ? 'block' : 'none' }}>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <center><h1>SignUp</h1></center>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                This is the SignUp Page
                        </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <div class="text-center">
                            <Button variant="primary" type="submit">
                                Sign Up
                        </Button>
                        </div>
                        <hr>
                        </hr>
                    </Form>
                </div>
            </>
        );
    }
}

function LogInButton(props) {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow} id="Modal" >
                Login
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body><LogInSignUp /></Modal.Body>
            </Modal>

        </>
    );
}

function MyTab() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Rental Name</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <LogInButton />
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}





// End of Navigation Bar

function AutomaticSlide() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };

    return (
        <div class="c-wrapper">
            <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        src={rOne}
                        alt="Slide One"
                        width="100%"
                        height="60%"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={rTwo}
                        alt="Second slide"
                        width="60%"
                        height="60%"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Why no Work</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={rThree}
                        alt="Third slide"
                        width="60%"
                        height="60%%"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}




class MainPage extends React.Component {
    constructor() {
        super()
        this.state = {
            intro: true,
            search: false
        }
        this.searchClick = this.searchClick.bind(this)
    }

    searchClick() {
        this.setState(prevState => {
            return {
                intro: false,
                search: true
            }
        })
    }

    render() {
        return (
            <>
                <div style={{ display: this.state.intro ? 'block' : 'none' }}>
                    <AutomaticSlide />
                    <div class="box">
                        <button style={{ backgroundColor: "Transparent", border: "none", }} onClick={this.searchClick}>
                            <a href="#" class="btn btn-white btn-animation-1 bold">View Sublets</a>
                        </button>
                    </div>
                </div>

                <div style={{ display: this.state.search ? 'block' : 'none' }}>
                    <Form>
                        <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
                        <Button type="submit">Submit</Button>
                    </Form>
                </div>
            </>);
    }
}


ReactDOM.render(<MyTab />, document.getElementById("NavBar"));
ReactDOM.render(<MainPage />, document.getElementById("SlideShow"));