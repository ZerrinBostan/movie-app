import React, { Component } from 'react'
import ImdbItem from './imdbItem/imdbItem';
import { observer, inject } from 'mobx-react';
const KEY = "apikey=e37837c6";
const API = "http://www.omdbapi.com/";
@inject('ImdbStore')
@observer
export class Favorites extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favorites: []
        }
    }
    componentDidMount() {
        if (localStorage.getItem('favoriteMovies') != null) {
            let ids = localStorage.getItem('favoriteMovies').split(',');
            if(ids[0] != "") {
                let imdbItemArray = [];
                ids.forEach((element, index) => {
                    fetch(API + `?i=${element}&` + KEY).then((response) => {
                        return response.json();
                    }).then((data) => {
                        imdbItemArray.push(data);
                        this.setState({
                            favorites: imdbItemArray
                        })
                    });
                });
            }
        }
    }
    render() {
        console.log(this.state.favorites.length)
        return (
            <div className="d-flex flex-row justify-content-around flex-wrap">
                {
                    this.state.favorites.length > 0 ?
                    this.state.favorites.map((element, index) =>
                        <ImdbItem
                            src={element.Poster}
                            year={element.Year}
                            title={element.Title}
                            imdbID={element.imdbID}
                            point={element.imdbRating}
                            key={index} />) : <h1>
                            No Favorites Saved</h1>
                }
            </div>
        )
    }
}

export default Favorites
