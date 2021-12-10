import React, { Component } from 'react'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
            <div className='home'>
                <div className='board'>
                    <div className='column'>
                        <div className='square' id='square1' onClick={(e) => {this.fillSquare(e.target.id)}}></div>
                        <div className='square' id='square2' onClick={(e) => {this.fillSquare(e.target.id)}}></div>
                        <div className='square' id='square3' onClick={(e) => {this.fillSquare(e.target.id)}}></div>
                        <div className='square' id='square4' onClick={(e) => {this.fillSquare(e.target.id)}}></div>
                        <div className='square' id='square5' onClick={(e) => {this.fillSquare(e.target.id)}}></div>
                    </div>
                    <div className='column'>
                        <div className='square' id='square6' onClick={(e) => {this.fillSquare(e.target.id)}}></div>
                        <div className='square' id='square7' onClick={(e) => {this.fillSquare(e.target.id)}}></div>
                        <div className='square' id='square8' onClick={(e) => {this.fillSquare(e.target.id)}}></div>
                        <div className='square' id='square9' onClick={(e) => {this.fillSquare(e.target.id)}}></div>
                        <div className='square' id='square10' onClick={(e) => {this.fillSquare(e.target.id)}}></div>
                    </div>
                    <div className='column'>
                        <div className='square' id='square11' onClick={(e) => {this.fillSquare(e.target.id)}}></div>
                        <div className='square' id='square12' onClick={(e) => {this.fillSquare(e.target.id)}}></div>
                        <div className='square' id='square13' onClick={(e) => {this.fillSquare(e.target.id)}}></div>
                        <div className='square' id='square14' onClick={(e) => {this.fillSquare(e.target.id)}}></div>
                        <div className='square' id='square15' onClick={(e) => {this.fillSquare(e.target.id)}}></div>
                    </div>
                    <div className='column'>
                        <div className='square' id='square16' onClick={(e) => {this.fillSquare(e.target.id)}}></div>
                        <div className='square' id='square17' onClick={(e) => {this.fillSquare(e.target.id)}}></div>
                        <div className='square' id='square18' onClick={(e) => {this.fillSquare(e.target.id)}}></div>
                        <div className='square' id='square19' onClick={(e) => {this.fillSquare(e.target.id)}}></div>
                        <div className='square' id='square20' onClick={(e) => {this.fillSquare(e.target.id)}}></div>
                    </div>
                    <div className='column'>
                        <div className='square' id='square21' onClick={(e) => {this.fillSquare(e.target.id)}}></div>
                        <div className='square' id='square22' onClick={(e) => {this.fillSquare(e.target.id)}}></div>
                        <div className='square' id='square23' onClick={(e) => {this.fillSquare(e.target.id)}}></div>
                        <div className='square' id='square24' onClick={(e) => {this.fillSquare(e.target.id)}}></div>
                        <div className='square' id='square25' onClick={(e) => {this.fillSquare(e.target.id)}}></div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Home;