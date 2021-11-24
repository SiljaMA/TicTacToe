import React from 'react';
import ReactDOM from 'react-dom';
import './board.css'
import Field from './field.js'

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: [
                [
                    {id: 0, x: 0, y: 0, contains: ''},
                    {id: 1, x: 1, y: 0, contains: ''}, 
                    {id: 2, x: 2, y: 0, contains: ''},
                ], 
                [
                    {id: 10, x: 0, y: 1, contains: ''},
                    {id: 11, x: 1, y: 1, contains: ''},
                    {id: 12, x: 2, y: 1, contains: ''},
                ], 
                [
                    {id: 20, x: 0, y: 2, contains: ''}, 
                    {id: 21, x: 1, y: 2, contains: ''},
                    {id: 22, x: 2, y: 2, contains: ''},
                ],
            ], 
            currentPlayer: 'x' //x or o 
        }
        this.switchCurrentPlayer = this.switchCurrentPlayer.bind(this);
        this.getCurrentPlayer = this.getCurrentPlayer.bind(this); 
        this.checkWinner = this.checkWinner.bind(this); 
    }

    checkPatterns(currentPlayer){
        let hasDiaMatchRight = true; 
        let hasDiaMatchLeft = true; 

        for (let i = 0; i < this.state.board.length; i++) {
            let hasRowMatch = true; 
            let hasColMatch = true; 

            for (let j = 0; j < this.state.board.length; j++) {
                const entryRow = this.state.board[i][j].contains;
                const entryCol = this.state.board[j][i].contains;
                if(!(entryRow == currentPlayer)){
                    hasRowMatch = false; 
                }

                if(!(entryCol == currentPlayer)){
                    hasColMatch = false;
                }

                if(i == j){
                    if(!(entryRow === currentPlayer)){
                        hasDiaMatchRight = false; 
                    }
                }

                if((i + j + 1) == this.state.board.length){
                    console.log(i + " " + j + " " + entryCol )
                    if(!(entryCol === currentPlayer)){
                        hasDiaMatchLeft = false; 
                    }
                }                          
            }

            if(hasRowMatch || hasColMatch){
                //there is a match in the current row
                return true;   
            }
        }
        if(hasDiaMatchRight || hasDiaMatchLeft){
            return true; 
        }
        return false;
    }

    isDraw(){
       for (let i = 0; i < this.state.board.length; i++) {
        for (let j = 0; j < this.state.board.length; j++) {
           let entry = this.state.board[i][j]; 
           if (entry.contains == ''){
            return false; 
           }
        } 
       }
       return true;  
    }

    checkWinner(x,y){
        //updating the board list with the new user input
        let currentPlayer = this.getCurrentPlayer(); 
        this.state.board[y][x].contains = currentPlayer; 

        let hasMatch = this.checkPatterns(currentPlayer); 
        let isDraw = this.isDraw(); 

        if (hasMatch){
            //there is a winner, therefor ending the game 
            this.props.gameFinished(currentPlayer); 
        }
        else if(isDraw){
            //the game is draw and therefor also ending the game
            this.props.gameFinished("");
        }else{
            //just continue to play
            this.switchCurrentPlayer(); 
        }
    }


    switchCurrentPlayer(){
       if(this.state.currentPlayer == 'o'){
           this.setState({currentPlayer: 'x'})
       }else{
        this.setState({currentPlayer: 'o'})
       }
    }


    getCurrentPlayer(){
        return this.state.currentPlayer
    }


    render() {
        return (
        <div className="game-wrapper">
        <div className="board-wrapper">
            {this.state.board.map((row, i) => ( 
                row.map((entry, j) =>
                    <Field key={entry.id} posX={entry.x} posY={entry.y} 
                        switchCurrentPlayer={this.switchCurrentPlayer} 
                        getCurrentPlayer={this.getCurrentPlayer} 
                        checkWinner={this.checkWinner}
                    />
                )
            ))}
        </div>
        <div className="display-player">
            <h1 className={this.state.currentPlayer == 'x'? 'player1-header':'player2-header'}>Player-{this.state.currentPlayer == 'x'? 1: 2}'s turn</h1>
        </div>
        </div>
        );
    }
}
