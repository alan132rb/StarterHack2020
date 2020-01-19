import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card'

import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'


class Contact extends React.Component {
    render() {
        return (
            <form id="form" class="topBefore">
                <input id="name" type="text" placeholder="Title"></input>
                <input id="email" type="text" placeholder="Address"></input>
                <textarea id="message" type="text" placeholder="Description"></textarea>




                <input id="submit" type="submit" value="Submit"></input>
            </form>
        )
    }
}

class UploadFile extends React.Component {
    render() {
        return (
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroupFileAddon01">
                        Upload
    </span>
                </div>
                <div className="custom-file">
                    <input
                        type="file"
                        className="custom-file-input"
                        id="inputGroupFile01"
                        aria-describedby="inputGroupFileAddon01"
                    />
                    <label className="custom-file-label" htmlFor="inputGroupFile01">
                        Choose file
    </label>
                </div>
            </div>
        )
    }
}

function SubmitForm() {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <Card style={{ width: '18rem' }}>

            <Button variant="primary" onClick={handleShow} id="Modal" >
                Contact Subletter
                </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <Contact/>
                    <UploadFile/>
                </Modal.Body>
            </Modal>

        </Card>

    )
}

export default SubmitForm