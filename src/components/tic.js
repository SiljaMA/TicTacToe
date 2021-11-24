import React from 'react';
import ReactDOM from 'react-dom';
import './tictoc.css'

export default class Tic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render(){
        return <div>
            <svg>
            <line x1={25} y1={25} x2={75} y2={75} stroke="green" strokeWidth="5"/>
            <line x1={25} y1={75} x2={75} y2={25} stroke="green" strokeWidth="5"/>
            </svg>
        </div>
    }
}