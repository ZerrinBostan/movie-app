import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import {observer, inject} from 'mobx-react';
let imdbIds = [];
@inject('ImdbStore')
@observer
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
            if (!localStorage.getItem('favoriteMovies').includes(this.props.imdbID)) {
                console.log('AS');
                this.setState({
                    isSaved: false
                });
            } else {
                this.setState({
                    isSaved: true
                });
            }   
        }

    }
    handleClick(e) {
        e.preventDefault();
        if (localStorage.getItem('favoriteMovies') == null) {
            imdbIds.push(this.props.imdbID);
            localStorage.setItem('favoriteMovies', imdbIds);
            this.setState({
                isSaved: true
            });
        
        }else if (!localStorage.getItem('favoriteMovies').includes(this.props.imdbID)) {
            let storageIds = localStorage.getItem('favoriteMovies');
            imdbIds = storageIds.split(',');
            if(imdbIds[0] == "") imdbIds.splice(0,1);
            imdbIds.push(this.props.imdbID);
            localStorage.setItem('favoriteMovies', imdbIds);
            this.setState({
                isSaved: true
            });
        }
         else {
            let storageIds = localStorage.getItem('favoriteMovies');
            imdbIds = storageIds.split(',');
            imdbIds.forEach((element, index) => {
                if (element == this.props.imdbID) {
                    imdbIds.splice(index, 1);
                }
            });
            localStorage.setItem('favoriteMovies', imdbIds);
            this.props.ImdbStore.changeFavorites(imdbIds);
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
