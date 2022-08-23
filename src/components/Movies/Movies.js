import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';


const Movies = (props) => {

    return (

        <ul className="movies">
            {props.movies.map((movie) => (
                <li className="movies__item" key={movie.imdbID}>
                    <article className="movie-item">
                        <img className="movie-item__poster" src={movie.Poster} alt={movie.Title} />
                        <div className="movie-item__info">
                            <h3 className="movie-item__title">{movie.Title}&nbsp;({movie.Year})</h3>
                            <button type="button" className="movie-item__add-button"
                                onClick={() => props.handleFavClick(movie)}>Добавить в список</button>
                        </div>

                    </article>
                </li>
            ))}
        </ul>

    );
}


export default Movies;