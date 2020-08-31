import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import './App.css'
import axios from 'axios'

function StarWars() {
    let [starships, setStarships] = useState([])
    let [loading, setLoading] = useState(true)

    useEffect(() => {
        let url = 'https://swapi.dev/api/starships/'
        axios.get(url)
        .then(res => {
            setLoading(false)
            setStarships(res.data.results)
        })
        .catch(error => console.log(error))
    }, [])
    if (!loading) {
        return(
            <div className="ships-container">
                    {starships = starships.map((starship, i) => {
                        return(
    
                            <div className="ships-item" key={i}>
    
                                <button className="ships">
                                    <Link className="link" to={{
                                        pathname: '/starship',
                                        state: starship
                                    }}
                                    key={starship.name}
                                    >
                                    {starship.name}
                                    </Link>
                                </button>
                            </div>
                        )
                    })}
                </div>
        )
    } else {
        return(
            <h1 className="loadpage">Loading...<br></br><img className="App-logo" src="https://i.imgur.com/7Qqj2wn.png" alt="Loading Icon"/></h1>
        )
    }
    
}
export default StarWars