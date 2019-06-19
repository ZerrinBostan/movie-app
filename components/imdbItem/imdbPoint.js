import React, { Component } from 'react'

export class ImdbPoint extends Component {
    render() {
        return (
            <p className="card-text">{this.props.point}</p>
        )
    }
}

export default ImdbPoint
