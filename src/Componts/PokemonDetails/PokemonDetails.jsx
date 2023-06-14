import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import axios from "axios"

const PokemonDetails = () => {
  const [pokemon, setpokemon] = useState([]);
  const [nextList, setnextList] = useState();
  const [previseList, setpreviseList] = useState();
  
  const url ="https://pokeapi.co/api/v2/pokemon/"

  // const pokedata = async()=>{
  //   const res = await axios.get(url);
  //   setnextList(res.data.next);
  //   setpreviseList(res.data.previous);
  //   getpokemondat(res.data.results)
  // }
  // const getpokemondat = (res)=>{
  //   res.map(async(item)=>{
  //     const result = await axios.get(item.url)
  //     setpokemon((pok)=>{
  //       pok = [...pok, result.data]
  //       pok.sort((a,b)=>(a.id > b.id ? 1 : -1))
  //       return pok
  //     })
  //   })
  // }

  // useEffect(async()=>{
  //   const res =await axios.get(url);
  //   setpokemon((pok) => {
  //     pok = [...pok,res.data]
  //     return pok
  //   })
  // },[])
  
  return (
    <div className='container'>
      {
        pokemon.length > 0 && (
          <Card
          key={pokemon.id}
          pokename={pokemon}
          />
        )
      }
    </div>
  )
}

export default PokemonDetails