import React, { useState, useEffect } from 'react';
import './MainPage.css';
import Header from '../../components/Header/Header';
import SearchBox from '../../components/SearchBox/SearchBox';
import Movies from '../../components/Movies/Movies';
import Favorites from '../../components/Favorites/Favorites';

 
    const MainPage=()=>{
        const [searchValue, setSearchValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites,id] = useState([]);


  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?apikey=d554bc03&s=${searchValue}`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

const addFavoritesMovie=(movie)=>{
    const newFavList=[...favorites,movie];
    if((newFavList.filter(e=>e.movie!==movie))){
    setFavorites(newFavList);

  }

}

const removeFavoritesMovie=(movie)=>{
  const newFavList=favorites.filter(
    (favorite)=>favorite.imdbID!==movie.imdbID
  );
  setFavorites(newFavList);
}




  return (
    <div className="app">
      <div className="main-page">
        <Header />
        <main className="main-page__content">
          <section className="main-page__main-section">
            <div className="main-page__search-box">
              <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
            </div>
            <div className="main-page__movies">
              <Movies 
                      movies={movies} 
                      handleFavClick={addFavoritesMovie}
                      />
            </div>
          </section>
          <aside className="main-page__favorites">
            <Favorites 
            favorites={favorites} 
            setFavorites={setFavorites}
            deleteFavClick={removeFavoritesMovie}
            id={id} />
          </aside>
        </main>
      </div>
      </div>);
    
}
 
export default MainPage;