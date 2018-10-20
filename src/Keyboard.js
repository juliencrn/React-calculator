import React, {Component} from 'react';
import Touch from './Touch';

class Keyboard extends Component {
    render() {
        const TouchList = [
            {text: 'AC', style: ''},
            {text: '+/-', style: ''},
            {text: '%', style: ''},
            {text: '/', style: 'Touch--orange'},
            {text: '7', style: ''},
            {text: '8', style: ''},
            {text: '9', style: ''},
            {text: 'X', style: 'Touch--orange'},
            {text: '4', style: ''},
            {text: '5', style: ''},
            {text: '6', style: ''},
            {text: '-', style: 'Touch--orange'},
            {text: '1', style: ''},
            {text: '2', style: ''},
            {text: '3', style: ''},
            {text: '+', style: 'Touch--orange'},
            {text: '0', style: 'Touch--0'},
            {text: ',', style: ''},
            {text: '=', style: 'Touch--orange'},
        ];

        return (
            <div className="Keyboard">
                {TouchList.map(({text, style}, index) => (
                    <Touch text={text} style={style} key={index}/>
                ))}
            </div>
        );
    }
}

export default Keyboard;
