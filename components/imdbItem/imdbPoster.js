import React, { Component } from 'react'
export class ImdbPoster extends Component {
    constructor(props) {
        super(props);
        this.handleError = this.handleError.bind(this);
    }
    handleError(e) {
        e.target.src = "/static/no-image.png";
    }
    render() {
        return (
            <img src={this.props.src} onError={this.handleError} className="card-img-top" alt="..." />
        )
    }
}

export default ImdbPoster
