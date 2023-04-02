import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';



const Character = () => {
const [characters,setCharacters]= useState([]);
useEffect(()=>{
    const abortController = new AbortController()
    const fetchApi = async(_abortController)=>{
        const comingData = await axios.get('https://rickandmortyapi.com/api/character', {cancelToken: _abortController.signal})
        setCharacters(comingData.data.results);
    }
    fetchApi(abortController); 

    return () => abortController.abort()
},[])


  return (
    <>
    
<div className="container">
<h1 className='my-5 text-center'>Rick and Morty</h1>
  <div className='row g-5'>
        {console.log(characters)}
        {characters.map(item=>(
            <div id='card-chr' className='col-12 col-sm-6 col-md-4'>
                <img id='chr-img' src={item.image} alt="" />
                <h4>{item.name}</h4>
                <Link to={`/${item.id}`} className='btn btn-warning'>read more</Link>
            </div>
        ))}
    </div>
</div>
  
    </>
  )
}

export default Character