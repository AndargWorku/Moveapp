
 import './App.css';
 import { useEffect, useState } from 'react';
 import FilmList from './Compo/FilmList';
import "bootstrap/dist/css/bootstrap.min.css"
 import FilmListHeading from './Compo/FilmListHeading';
 import SearchFilm from './Compo/SearchFilm';
import AddFavorate from './Compo/AddFavorate';
 import RemoveFavorite from './Compo/RemoveFavorite';



const App=()=>{
  const[films,setFilms]=useState([]);
  const[favoriteFilms, setFavoriteFilms]=useState('');

  const[searchFilms, setSearchFilms]=useState('');
  const getFilmsRequest= async(SearchFilms)=>{
    //making request to the API
    const url=`http://www.omdbapi.com/?s=${SearchFilms}&apikey=5b3b1f5f`;

    const response=await fetch(url);
    //convert the response to json
    const responseJson=await response.json();
    console.log(responseJson);
    
    if(responseJson.Search){
    setFilms(responseJson.Search);
     }
  };
   useEffect(()=>{
    getFilmsRequest(searchFilms); 
   },[searchFilms]);
   //to get data from local storage
   useEffect(()=>{
     const filmFavorites=JSON.parse(
       localStorage.getItem('your-favorite')
     );
     if(filmFavorites){
       setFavoriteFilms(filmFavorites);
     }
   },[])
   //to be store data at local storage
   const saveTolocalStorage=(item)=>{
     localStorage.setItem('your favorite',JSON.stringify(item))
  }
   //add favorite movie
  const addFavoriteFilm=(film)=>{
    const newFavoriteList=[...favoriteFilms,film];
     setFavoriteFilms(newFavoriteList);
     saveTolocalStorage();//saved
  }
 //remove movie from favorite list
   const RemoveFavoriteFilm=(Film)=>{
     const newFavoriteList=favoriteFilms.filters(
       (favoriteFilm)=>favoriteFilm.imdbID!==films.imdbID
     );
     setFavoriteFilms(newFavoriteList);
     saveTolocalStorage();//remove data from local storage
   };
  return (
   
     <div className="App Container-fluid film-css">

       <div className="row d-flex align-items-center mb-4">
       <FilmListHeading heading="films"/>
       <SearchFilm searchFilms={searchFilms} setSearchFilms={setSearchFilms}/>

       </div>
      
       <div className="row">
       <FilmList films={films} favoriteChosen={addFavoriteFilm} favorate={AddFavorate}/>

       </div>
       <div className="row d-flex align-items-center mt-4 mb-4">
       <FilmListHeading heading="your favorite films in the list"/>
       </div>
       <div className="row">
      <FilmList films={favoriteFilms}
        favoriteChosen={addFavoriteFilm} 
        favorate={RemoveFavorite}/>

       </div>
      
     </div>
  );
}

export default App;
