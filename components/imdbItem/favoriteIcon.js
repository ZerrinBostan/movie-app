import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

let favorites = [];
export class FavoriteIcon extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            isSaved: false
        }
    }
    componentWillMount() {
        if(localStorage.getItem('favoriteMovies') != null) {
            let favoritesString = localStorage.getItem('favoriteMovies');
            if(favoritesString.includes(this.props.favoriteItemObj.imdbID)) {
                this.setState({
                    isSaved:true
                });
            } else {
                this.setState({
                    isSaved:false
                })
            }
        }

    }
    handleClick(e) {
        e.preventDefault();
        if (localStorage.getItem('favoriteMovies') == null) {
            favorites.push(this.props.favoriteItemObj);
            localStorage.setItem('favoriteMovies', JSON.stringify(favorites));
            this.setState({
                isSaved: true
            });
        } else if(!localStorage.getItem('favoriteMovies').includes(this.props.favoriteItemObj.imdbID)){
            let favoritesArray = JSON.parse(localStorage.getItem('favoriteMovies'));
            favorites = favoritesArray;
            favorites.push(this.props.favoriteItemObj);
            localStorage.setItem('favoriteMovies', JSON.stringify(favorites));
            this.setState({
                isSaved: true
            });
        } else {
            let favoritesArray = JSON.parse(localStorage.getItem('favoriteMovies'));
            favorites = favoritesArray;
            favorites.forEach((favoriteItem,index) => {
                if(favoriteItem.imdbID === this.props.favoriteItemObj.imdbID) {
                    favorites.splice(index,1);
                }
            });
            localStorage.setItem('favoriteMovies', JSON.stringify(favorites));
            this.setState({
                isSaved: false
            });
        }
    }
    render() {
        const favClass = this.state.isSaved ? 'btn favorite' : 'btn';
        return (
            <button className={favClass} onClick={this.handleClick}>
                <i>
                    <FontAwesomeIcon icon={faHeart} />
                </i>
            </button>
        )
    }
}

export default FavoriteIcon
