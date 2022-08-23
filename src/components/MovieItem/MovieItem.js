import React, { Component } from 'react';
import './MovieItem.css';

const MovieItem =(props)=>{
// class MovieItem extends Component {
//     render() {
//         const { title, year, poster } = this.props;
//         const FavComponent=this.props.favComponent;
        return (
            
            <article className="movie-item">
                <img className="movie-item__poster" src={props.Poster} alt={this.props.Title} />
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{this.props.Title}&nbsp;({this.props.Year})</h3>
                    <button type="button" className="movie-item__add-button"
                     onClick={()=>this.props.handleFavClick(this.props.Title)}>Добавить в список</button>
                </div>
                
            </article>
           
        );
    }


export default MovieItem;