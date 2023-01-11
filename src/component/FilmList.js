import React from 'react'
import AddFavoraite from './AddFavoraite';
const FilmList = (props) => {
    const Favorites=props.favorites;
  return (
    <>
      {props.films.map(
        (film,index)=>
        <div className='image-container d-flex justify-content-start m-3'>
            <img src={film.Poster} alt="harry potter "/>
            <div onClick={()=>props.favoriateChosen(film)}className='overlay d-flex align-items-center justified-content-center'>
                <AddFavoraite />

            </div>
        </div>
      )}
    </>
  )
}

export default FilmList
