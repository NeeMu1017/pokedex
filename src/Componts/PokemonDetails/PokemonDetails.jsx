import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import axios from "axios"
import Search from '../search/Search';

const PokemonDetails = () => {
  const [pokemon, setpokemon] = useState([]);
 
  const [url,setUrl] =useState("https://pokeapi.co/api/v2/pokemon?limit=500&offset=0");
  const [result,setResult] = useState([]);
  const [search,setSearch] = useState([]);

 const getalldata =   async( ) =>{
  const res =await axios.get(url);
  const poke = await res.data;
  const createpokeobj =(resutl)=>{
    resutl.forEach(async (pokemon)=>{
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
      const poke = await res.data
      setpokemon((currenlinst)=>[...currenlinst,poke]);     
      setSearch((currenlinst)=>[...currenlinst,poke]);     
    })    
  }
  createpokeobj(poke.results)
 }
  useEffect(
    ()=>{
    getalldata()
  },[url])
  

  const filler = (event) =>{
    setSearch(pokemon.filter(f=> f.name.toLowerCase().includes(event.target.value)))
  }
  
  return (
    <div className='container'>

      <h1 className='d-flex justify-content-center m-5'>Pokemon Dex</h1>

      <Search props={setResult}/>
      <input type="text"
      placeholder='Search'      
      onChange={filler}
      />


      {
        pokemon.length > 0 && (
          <Card                    
          pokename={search}
          />
        )
      }

      
    </div>
  )
}

export default PokemonDetails