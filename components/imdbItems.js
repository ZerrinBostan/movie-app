import React, { Component } from 'react'
import ImdbItem from '../components/imdbItem/imdbItem';
import { inject, observer } from 'mobx-react';
@inject('ImdbStore')
@observer
export class ImdbItems extends Component {
    render() {
        const imdbStore = this.props.ImdbStore;
        return (
            <div className="d-flex flex-row justify-content-between flex-wrap">
                {
                    imdbStore.jsonArray.map((json, index) => 
                    <ImdbItem 
                    src={json.Poster} 
                    title={json.Title}
                     key={json.imdbID} 
                     year={json.Year} 
                     point={json.imdbRating} 
                     imdbID={json.imdbID} />)
                }
            </div>
        )
    }
}

export default ImdbItems
