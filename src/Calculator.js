import React, {Component} from 'react';
import Result from './Result';
import './Calculator.css';
import Touch from "./Touch";

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

class Calculator extends Component {
    constructor(props) {
        super(props);

        this.state = {result: 0};
    }

    touchClicked(text) {
        console.log(text,'clicked')
    }

    render() {
        return (
            <div className="Calculator">
                <div className="container">
                    <Result result={this.state.result}/>

                    <div className="grid">
                        {TouchList.map(({text, style}, index) => (
                            <Touch
                                text={text}
                                style={style}
                                key={index}
                                touchClick={this.touchClicked.bind(this)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;
