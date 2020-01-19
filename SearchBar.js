import React, { Component } from "react"
import Contact from "./Contact"

class ContactsList extends React.Components {
    constructor() {
        super();
        this.state = {
            search: 'Level Up'
        };
    }

    updateSearch(event) {
        this.setState({search: event.target.value.substr(0, 20)});
    }

    render() {
        let filteredContacts = this.props.contacts.filter(
            (contact) => {
                return contact.name.toLowerCase().indexOf(
                    this.state.search.toLowerCase()) !== -1;
            }
        );
        return (
            <div>
                <input type="text"
                    value={this.state.search}
                    onChange={this.updateSearch.bind(this)} />
                <ul>
                    {this.props.contacts.map((contact) => {
                        return <Contact contact={contact}
                            key={contact.id} />
                    })}
                </ul>
            </div>
        )
    }
}

export default ContactsList
