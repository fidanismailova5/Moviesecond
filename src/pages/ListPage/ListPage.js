import React, { Component } from 'react';
import { useParams,Link,useNavigate  } from 'react-router-dom';
import './ListPage.css';
import Favorites from '../../components/Favorites/Favorites';

const ListPage =(props)=>{

// class ListPage extends Component {
    // state = {
    //     movies: [
    //         { title: 'The Godfather', year: 1972, imdbID: 'tt0068646' }
    //     ]
    // }
    // componentDidMount() {
    //     const id = props.match.params;
    //     console.log(id);
    //     // TODO: запрос к сервер на получение списка
    //     // TODO: запросы к серверу по всем imdbID
    // }
    // render() { 
        const url=`https://www.imdb.com/${props.Title}/${props.imdbID}/`;
        // const{id}=props.match.params;
        const {id}=useParams();
        const navigate = useNavigate();
        
        return (
            <div className="list-page">
                <h1 className="list-page__title">Мой список</h1>
                <ul>
                    {props.favorites?.map((item) => {
                        return (
                            <li key={item.imdbID}>
                                {item.Title}
                                <Link to={url} >{item.Title} ({item.Year})</Link>
                            </li>
                        );
                    })}
                </ul>
              
        <button  onClick={() => navigate(-1)}>Return to page</button>
    
            </div>
        )
                
}
 
export default ListPage;