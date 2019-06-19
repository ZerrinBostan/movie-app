import React, { Component } from 'react'

export class ImdbYear extends Component {
    render() {
        return (
            <p className="card-text"><small className="text-muted">{this.props.year}</small></p>
        )
    }
}

export default ImdbYear
