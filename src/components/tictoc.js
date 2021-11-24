import React from 'react';
import ReactDOM from 'react-dom';
import Board from './board';
import './tictoc.css'
import Gameovelay from './gameoverlay.js'

export default class Tictoc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           winner: '',
           isPlaying: false, 
           hasEnded : false
        }
        this.gameFinished = this.gameFinished.bind(this); 
        this.onClickStartGame = this.onClickStartGame.bind(this); 
    }

    gameFinished(winner){
        this.setState({winner : winner}); 
        this.setState({hasEnded: true}); 

    }


    onClickStartGame(){
        this.setState({hasEnded: false});
    }


    render(){
        return(
            <div>
                {this.state.hasEnded ?  
                    <Gameovelay winner={this.state.winner} onClickStartGameAgain={this.onClickStartGame}/>
                    : <Board gameFinished={this.gameFinished}/>
                }
            </div>
        )
    }
}