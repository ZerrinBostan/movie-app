import React, { Component } from 'react'
import SearchButton from './searchButton';
import SearchTitle from './searchTitle';
import SearchYear from './searchYear';
import SearchType from './searchType';

export class Search extends Component {
    constructor(props) {
        super(props);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.state = {
            searchTitle: '',
            searchYear: '',
            searchType: '',
        }
    }
    handleTitleChange(data) {
        const value = data;
        this.setState(() => ({
            searchTitle: value
        }));
    }
    handleYearChange(data) {
        const value = data;
        this.setState(() => ({
            searchYear: value
        }));
    }
    render() {
        return (
            <div className="d-flex pt-3">
                <div className="input-group mb-3">
                    <SearchTitle titleChange={this.handleTitleChange} />
                    <SearchYear yearChange={this.handleYearChange}/>
                    <SearchType />
                    <div className="input-group-append">
                        <SearchButton searchObject={{searchTitle: this.state.searchTitle, searchYear: this.state.searchYear}} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Search
