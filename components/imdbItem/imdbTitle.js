import React, { Component } from 'react'

export class ImdbTitle extends Component {
    render() {
        return (
            <h5 className="card-title align-self-center">{this.props.title}</h5>
        )
    }
}

export default ImdbTitle
