
import './App.css';
import { useEffect, useState } from 'react';
import FilmList from "./component/FilmList"
import "bootstrap/dist/css/bootstrap.min.css"
import SearchBox from "./component/SearchBox"
import FilmListHeading from "./component/FilmListHeading"
import AddFavoraite from "./component/AddFavoraite"
import RemoveFavorite from "./component/RemoveFavorite" 
function App() {
  const[films,setFilms]=useState([]);

  const[searchFilm,setSearchFilm]=useState('');
  const[favoriteFilms,setFavoriteFilms]=useState([]);
  const getFilmRequest=async (searchFilm)=>{
    //request ApI
    const url=`http://www.omdbapi.com/?s=${searchFilm}&apikey=9e10365d`
    const response=await fetch(url);
    //convert the data to json
    const responseJson=await response.json();
    if(responseJson.Search){
      setFilms(responseJson.Search);

    }
    
  }
    //call getFilmRequest to use useEffect
    //it gets load the page
    useEffect(()=>{
      getFilmRequest(searchFilm); 
     },[searchFilm]);
     //get data from storage
     useEffect(()=>{
      const filmFavorites=JSON.parse(
        localStorage.getItem('your-favorite')
      );
      if(favoriteFilms){
        setFavoriteFilms(favoriteFilms);

      }

      
     },[]);
     const saveToLocalStorage=(items)=>{
      localStorage.setItem('your-favorite',JSON.stringify(items))
     }
const addFavoraiteFilm=(film)=>{
  const newFavoriteList=[...favoriteFilms,film];
  setFavoriteFilms(newFavoriteList);
  saveToLocalStorage(newFavoriteList);//saved
};
const removeFavoraiteFilm=(film)=>{
  const newFavoriteList=favoriteFilms.filter((favoriteFilm)=>favoriteFilm.imdbID!==film.imdbID);
  setFavoriteFilms(newFavoriteList);
  saveToLocalStorage(newFavoriteList);//removed
}
  
  return (
    <div className="App container-fluid film-css">
      <div className="row d-flex align-items-center mb-4">
      <FilmListHeading heading="Films"/>
      <SearchBox searchFilm={searchFilm} setSearchFilm={setSearchFilm}/>
    </div>
      <div className="row">
      <FilmList films={favoriteFilms} 
      favoriateChosen={removeFavoraiteFilm} 
      favorite={RemoveFavorite}/>
    </div>
    <div className="row d-flex align-items-center mt-4 mb-4">
      <FilmListHeading heading="favoriteFilms"/>
    </div>
    <div className="row">
      <FilmList films={films} favoriateChosen={addFavoraiteFilm} favorite={AddFavoraite}/>
    </div>
    </div>
  );
}

export default App;
