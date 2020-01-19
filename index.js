import React from 'react';

import ReactDOM from 'react-dom';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Form from 'react-bootstrap/Form'

import { Button } from 'react-bootstrap'

import AutomaticSlide from "./SlideShow"
import FormControl from 'react-bootstrap/Form'
import MyTab from "./NavBar"
import 'firebase/auth';

// importing NavBar //


// importing SlideShow//


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


ReactDOM.render(<MyTab />, document.getElementById("NavBar"));
ReactDOM.render(<MainPage />, document.getElementById("SlideShow"));