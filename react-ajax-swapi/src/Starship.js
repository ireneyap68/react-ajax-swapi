import React from 'react'
import {useLocation} from 'react-router'
import {Link} from 'react-router-dom'

function Starship(props){
    const location = useLocation()

    return(
        <div className="info-container">
            <div className="ship-info">
            NAME: {location.state.name}
            <br/>
            MODEL: {location.state.model}
            <br/>
            <Link to='/'>Return Home</Link>
            </div>
        </div>
    )

}
export default Starship

