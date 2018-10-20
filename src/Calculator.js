import React, {Component} from 'react';
import Result from './Result';
import Keyboard from './Keyboard';
import './Calculator.css';

class Calculator extends Component {
    render() {
        return (
            <div className="Calculator">
                <div className="container">
                    <Result result={0}/>
                    <Keyboard/>
                </div>
            </div>
        );
    }
}

export default Calculator;
