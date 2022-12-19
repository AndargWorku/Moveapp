import React from "react";
const SearchFilm=(props)=>{
    return(
        <>
        <div className="col col-sm-4">
            <input
             className="form-control" 
             placeholder="search film"
             value={props.value}
             onChange={(event)=>props.setSearchFilms(event.target.value)}/>
        </div>
        </>
    );
}
export default SearchFilm;