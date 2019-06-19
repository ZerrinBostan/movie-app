import React, { Component } from 'react'
import {inject, observer} from 'mobx-react';
@inject('ImdbStore')
@observer
export class SearchType extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.props.ImdbStore.changeType(e.target.value);
    }
    render() {
        return (
            <select onChange={this.handleChange} className="custom-select" id="inputGroupSelect04">
            <option value="">Select Type</option>
            <option value="movie">Movie</option>
            <option value="episode">Episode</option>
            <option value="series">Series</option>
        </select>
        )
    }
}

export default SearchType
