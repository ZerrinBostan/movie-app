import React, { Component } from 'react'
import ImdbPoster from './imdbPoster';
import ImdbTitle from './imdbTitle';
import ImdbPoint from './imdbPoint';
import ImdbYear from './imdbYear';
import FavoriteIcon from './favoriteIcon';

export class ImdbItem extends Component {
    render() {
        const favoriteObj = {
            src: this.props.src,
            title: this.props.title,
            point: this.props.point,
            imdbID: this.props.imdbID,
            year: this.props.year
        }
        return (
            <div className="card mb-3">
                <ImdbPoster src={this.props.src} />
                <div className="card-body">
                    <div className="d-flex flex-row justify-content-between">
                            <ImdbTitle title={this.props.title} />
                            <FavoriteIcon favoriteItemObj={favoriteObj}/>
                    </div>
                    <ImdbPoint point={this.props.point} />
                    <ImdbYear year={this.props.year} />
                </div>
            </div>
        )
    }
}

export default ImdbItem
