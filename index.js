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

import FormControl from 'react-bootstrap/Form'

import rOne from './pics/RoomOne.jpg'
import rTwo from './pics/RoomTwo.jpg'
import rThree from './pics/RoomThree.jpg'

// importing NavBar //
import MyTab from "./NavBar"

// importing SlideShow//
import AutomaticSlide from "./SlideShow"


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