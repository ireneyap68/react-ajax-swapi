import React from 'react'
import {Link} from 'react-router-dom'

const Starship = ({location}) =>{
    let details = {location}.location.state
    return(
        <div>
            <h1>Name: {details.name}</h1>
            <h1>Model: {details.model}</h1>
            <br/>
            <Link to='/'>Return Home</Link>
        </div>
    )
}
export default Starship