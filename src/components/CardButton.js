import React, { Component } from 'react';
import './CardButton.css';

export default class CardButton extends Component {
    render() {
        return (
            <div className={this.props.colorStyles}>
               {this.props.examName}
            </div>
        )
    }
}