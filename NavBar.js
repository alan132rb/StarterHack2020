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
export default MyTab