import React, { Component } from 'react'

export class SearchTitle extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.props.titleChange(e.target.value);
    }
    render() {
        return (
            <input type="text" className="form-control" onChange={this.handleChange} placeholder="Movies/Series/Episodes Name..." aria-describedby="button-addon2" />
        )
    }
}

export default SearchTitle
