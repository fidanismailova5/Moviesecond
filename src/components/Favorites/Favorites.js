import React, {Component} from 'react';
import {useParams,Link } from 'react-router-dom'
import './Favorites.css';


const Favorites =(props)=>{

//     class Favorites extends Component{
// constructor(){
//    super();
//    this.state={disabled: 'true'}
// }

//       handleChange=(e)=>{
        
//         if(e.target.value.length>1){
//             this.setState({
//                 disabled:"false"
//             })
//         }
//     }

//         render(){
    // const {id}=useParams();
        return (
           
             <div className="favorites">
                 <input placeholder="Введите название списка" className="favorites__name" />
                 <ul className="favorites__list">
                     {props.favorites.map((movie) => { 
                    return (<div className='favMovie'>
                    <li key={movie.imdbID}>{movie.Title} ({movie.Year})</li>
                            <button className='deleteMovie' onClick={()=>props.deleteFavClick(movie)}>X</button>
                            </div>
                    )
                      })}
                 </ul> 
                 <Link to={{pathname: `/list/${props.id}`,state: props.id}}>
                 <button type="button" className="favorites__save" >Сохранить список</button>
                 </Link> 
             </div>
        );
    }


export default Favorites;