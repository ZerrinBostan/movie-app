import React, { Component } from 'react'

export class SearchYear extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.props.yearChange(e.target.value);
    }
    render() {
        return (
            <input type="text" className="form-control" onChange={this.handleChange} placeholder="Year" aria-describedby="button-addon3" />
        )
    }
}

export default SearchYear
