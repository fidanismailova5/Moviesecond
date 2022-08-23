import React, { Component } from 'react';
import './SearchBox.css';

const SearchBox =(props)=>{
  const  searchBoxSubmitHandler = (e) => {
        e.preventDefault();
        
    }
    return(
        <div className="search-box">
                         <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
                             <label className="search-box__form-label">
                                 Искать фильм по названию:
                                 <input
                                    value={props.value}
                                    type="text"
                                    className="search-box__form-input"
                                    placeholder="Например, Shawshank Redemption"
                                    onChange={(event)=>props.setSearchValue(event.target.value)}
                                />
                            </label>
                            <button
                                type="submit"
                                className="search-box__form-submit"
                                
                            >
                                Искать
                            </button>
                        </form>
                    </div> 
    )
}
 
export default SearchBox;