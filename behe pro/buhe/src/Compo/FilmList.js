import React from "react";
import AddFavorate from "./AddFavorate";
const FilmList=(props)=>{
    const AddFavorate=props.favorate;
    return(
        <>
        {props.films.map(
            (film,index)=>
            <div className="image-container d-flex justify-content-start m-3">
                <img src={film.Poster}  alt=''/>
                <div onClick={()=>props.favoriteChosen(film)} className="overlay align-items-center justified-content-center">
                    <AddFavorate/>

                </div>
            </div>

        
        )}
        </>

    );
}
export default FilmList;