import React from 'react';
import ReactDOM from 'react-dom';
import './field.css'
import Tic from './tic.js'
import Toc from './toc.js'

export default class Field extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contains: '',
            hasElement: false,   
            posX: props.posX,
            posY: props.posY 
        }
        this.userOnClick = this.userOnClick.bind(this); 
    }

    userOnClick(){
        console.log("click!")
        if(!this.state.hasElement){
            let currentPlayer = this.props.getCurrentPlayer()
            if(currentPlayer == 'x'){
                this.setState({contains: 'x'});
            }else{
                this.setState({contains: 'o'});
            }
            this.setState({hasElement: true});
            this.props.checkWinner(this.state.posX, this.state.posY); 
            //this.props.switchCurrentPlayer();
        }
    }

    renderElement(){
        if(this.state.hasElement && (this.state.contains == 'x')){
            return <Tic/>
        }else if (this.state.hasElement && (this.state.contains == 'o')){
            return <Toc/>
        }else{
            return; 
        }
    }

    render() 
    {
      return(
      <div className="field-wrapper" onClick={()=>this.userOnClick()} 
        style={{left: this.state.posX*100, top: this.state.posY*100, width:'100px', height:'100px'}}>
            {this.renderElement()}
      </div>
      );
    }
}