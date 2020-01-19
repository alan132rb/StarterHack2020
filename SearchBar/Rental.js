import React from "react"

function Rental(props) {
    return (
        <div style={{width: 200, border: 'solid'}}>
        <p>Name: {props.name}</p>
        <p>Price: {props.price}</p>
        </div>
    )
}

export default Rental
