import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import PokemonDetails from '../PokemonDetails/PokemonDetails'
const RouteNev = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PokemonDetails/>} />                
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default RouteNev