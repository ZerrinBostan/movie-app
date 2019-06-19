import React, { Component } from 'react'
import ImdbItem from './imdbItem/imdbItem';
export class Favorites extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favorites: []
        }
    }
    componentDidMount() {
        if (localStorage.getItem('favoriteMovies') != null) {
            let favoritesArray = localStorage.getItem('favoriteMovies');
            this.setState({
                favorites: JSON.parse(favoritesArray)
            });
            }
    }
    render() {
        return (
            <div className="d-flex flex-row justify-content-around flex-wrap">
                {
                    this.state.favorites.length > 0 ?
                    this.state.favorites.map((element, index) =>
                        <ImdbItem
                            src={element.src}
                            year={element.year}
                            title={element.title}
                            imdbID={element.imdbID}
                            point={element.point}
                            key={index} />) : <h1>
                            No Favorites Saved</h1>
                }
            </div>
        )
    }
}

export default Favorites
