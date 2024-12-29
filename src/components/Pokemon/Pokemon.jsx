import React, { useEffect, useState } from 'react'
import './pokemon.css'
import logo from './PokemonLogo.png';

// https://pokeapi.co/api/v2/pokemon

// ///////////////////////////////////////IMPORT SECTION////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////
const Pokemon = () => {

const [pokemonData,setPokemonData] = useState([]);
const [isLoading,setIsLoading] = useState(false);
const [search,setSearch] = useState("");
 
const API = "https://pokeapi.co/api/v2/pokemon?limit=500";


const fetchPokemon = async ()=>{
  try{
    const res = await fetch(API);
    const data = await res.json();
     
      const detailPokemonData = data.results.map(async(curPokemon)=>{
        const res = await fetch(curPokemon.url);
        const data = await res.json();
        console.log(data);
        return data;
      })

 const detailResponses = await Promise.all(detailPokemonData);
    setPokemonData(detailResponses);
    setIsLoading(false);
    console.log(detailResponses);
    
    
  }catch(error){
    console.log(error);
    
  }
}


useEffect(()=>{
  fetchPokemon()
  setIsLoading(true);
},[])

// search functionality *****************************************

const handleSearch = (event)=>{
  setSearch(event.target.value);
}

const searchData = pokemonData.filter((curPokemon)=>
  curPokemon.name.includes(search)
);

// ////////////////////////////////////FUNCTIONALITY SECTION////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <>
        <div className='pok-header'>
        <h1>Let's Catch Pokemon</h1>

        <input type='search' value={search} onChange={handleSearch} placeholder='Search Pokemon'></input>
        {isLoading &&<p>Loading...</p>}
        </div>
        {
          //pokemonData.map((curPokemon)=>{
          searchData.map((curPokemon)=>{
            return(
            <div className='pok-body'>
            <div className='pok-card'>
            <div className='pok-design'></div>
            <img className='pok-avtar' src={curPokemon.sprites.other.dream_world.front_default}/>
            <h2 className='avtar-name'>{curPokemon.name}</h2>
            <div className='pok-detail'>
            <p><span><b>Height :</b></span> {curPokemon.height}</p>
            <p><span><b>Weight :</b></span> {curPokemon.weight}</p>
            </div>
            <img className='pok-logo' src={logo}/>
            </div>
            </div>
            )
          })
        }


    </>
  )
}

export default Pokemon
