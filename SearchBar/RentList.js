import React from "react"
import Rental from "./Rental"

function RentList(props) {
    let rentals = props.filteredRentals.map((rental, i) => {
        return <Rental key={i} name={rental.name} price={rental.price} /> 
    })
    return(
        <div>
            {rentals}
        </div>
    )
}

export default RentList;
