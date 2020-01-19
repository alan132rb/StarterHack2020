import React, { Component } from 'react';
import SearchBox from './SearchBox'
import RentList from './RentList'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rentals: [
        {name: "Jax", price: "$700"},
        {name: "Lucian", price: "$900"},
        {name: "Fizz", price: "$750"},
        {name: "Yasuo", price: "$69"},
        {name: "Janna", price: "$1000"}
      ],
      searchRental: ''
    }
  }

  handleInput = (e) => {
    console.log(e.target.value); 
    this.setState({ searchRental: e.target.value })
  }

  render() {
    let filteredRentals = this.state.rentals.filter((rental) => {
      return rental.name.toLowerCase().includes(this.state.searchRental.toLowerCase())
    }) 

    return (
      <div className="App">
        <h1>Rentals</h1>
        <SearchBox handleInput={this.handleInput} />
        <RentList filteredRentals={filteredRentals} />
      </div>
    );
  }
}


export default App;
