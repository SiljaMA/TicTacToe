import React from 'react';
import ReactDOM from 'react-dom';
import Board from './board';
import './gameoverlay.css'

export default class Gameovelay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            winner : this.props.winner, 
        }
    }

    renderDrawMes(){
        return <div>
            <h1>The game is draw</h1>
        </div>
    }

    renderWinnerMes(){
        if(this.state.winner == 'x'){
            return <div>
                <h1 className="text-winner1">Player 1 has won</h1>
            </div>
        }else{
            return <div>
            <h1 className="text-winner2">Player 2 has won</h1>
        </div> 
        }
    }
    

    render(){
        return(
        <div className="message-wrapper">
            {(this.state.winner == '')? this.renderDrawMes()
            : this.renderWinnerMes()
            }
            
            <button className="button" onClick={()=>this.props.onClickStartGameAgain()}>Play again</button>
        </div>
        )
    }
}