import React from 'react';
import ReactDOM from 'react-dom';
import './tictoc.css'

export default class Toc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render(){
        return <div>
            <svg>
            <circle cx={50} cy={50} r={30} fill="red" />
            <circle cx={50} cy={50} r={25} fill="white" />
            </svg>
        </div>
    }
}