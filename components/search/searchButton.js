import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { inject, observer } from 'mobx-react';
const KEY = "apikey=e37837c6";
const API = "http://www.omdbapi.com/";
@inject('ImdbStore')
@observer
export class SearchButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount(data) {
        if(data != undefined) {
            fetch(API + `?s=${data.searchTitle}&y=${data.searchYear}&type=${this.props.ImdbStore.imdbType}&` + KEY )
            .then((response) => {
                return response.json();
            }).then((data) => {
                let searchArray = data['Search'];
                if(searchArray != undefined) {
                    searchArray.forEach((element,index) => {
                        fetch(API + `?i=${element.imdbID}&` + KEY ).then((response) => {
                            return response.json();
                        }).then((data) => {
                            searchArray[index].imdbRating = data.imdbRating;
                            this.props.ImdbStore.changeData(searchArray); 
                        });
                    });
                }
            });
        }
    }
    handleClick(e) {
        e.preventDefault();
        this.componentDidMount(this.props.searchObject);
    }
    render() {
        return (
            <button className="btn btn-primary" onClick={this.handleClick}>
                <i>
                    <FontAwesomeIcon icon={faSearch} />
                </i>
            </button>
        )
    }
}

export default SearchButton
