import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import './App.css'
import Starship from './Starship'

function StarWars() {
   const [ships, setShips] = useState([])
   const [loading, setLoading] = useState(true)

   useEffect(()=>{
       async function getShips() {
           let response = await fetch('https://swapi.dev/api/starships/')
           let data = await response.json()
           setShips(data.results)
           setLoading(false)
       }
       getShips()
   }, [])

   const names = ships.map((s, idx) =>
    <p className='listContainer' key = {idx}>{s.name}</p>
   )
   if(!loading) {
        return(
        <div >
            <Link to={{
                        pathname: '/starship',
                        state: names
                    }}
                    key={names} 
                    className='link-text'>
                    {names} 
                </Link>

        </div>
        )
    }else{
        return(
            <div>
                <h1>Loading</h1>
            </div>
        )
    }
}
export default StarWars