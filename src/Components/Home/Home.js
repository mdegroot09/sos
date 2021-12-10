import React, { Component } from 'react'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            player1Turn: true
         }
    }

    fillSquare = (id, val) => {
        let {player1Turn} = this.state
        
        if (val === 's' || val === 'o'){
            document.getElementById(id).value = val.toUpperCase()
        }
        else if (val !== 'S' && val !== 'O'){
            document.getElementById(id).value = ''
            return
        } 

        let isSOS = this.checkForSOS(id)
        let isBoardComplete = this.isBoardComplete()
        if (isSOS){
            console.log('yay')
        }
        this.setState({player1Turn: !player1Turn})
    }

    checkForSOS = (id) => {
        let combos = []
        let num = Number(id.split('square')[1])

        combos.push([num - 10, num - 5, num, num + 5, num + 10])
        combos.push([num - 2, num - 1, num, num + 1, num + 2])
        combos.push([num - 12, num - 6, num, num + 6, num + 12])
        combos.push([num - 8, num - 4, num, num + 4, num + 8])

        return this.checkCombos(combos)
    }

    checkCombos = (combos) => {
        let sos = false
        combos.forEach((a)=> {
            let str = ''
            a.forEach((b)=> {
                if (b > 0 && b < 26){
                    str += document.getElementById(`square${b}`).value
                }
            })
            if (str.includes('SOS')){
                sos = true
            }
        })
        return sos
    }

    isBoardComplete = () => {
        
    }

    render() { 
        let turn = this.state.player1Turn ? 'Player 1' : 'Player 2'
        
        return ( 
            <div className='home'>
                <h1 className='turn'>Turn: {turn}</h1>
                <div className='board'>
                    <div className='column'>
                        <div className='square'><input type="text" id='square1' onChange={(e) => {this.fillSquare(e.target.id, e.target.value)}}/></div>
                        <div className='square'><input type="text" id='square2' onChange={(e) => {this.fillSquare(e.target.id, e.target.value)}}/></div>
                        <div className='square'><input type="text" id='square3' onChange={(e) => {this.fillSquare(e.target.id, e.target.value)}}/></div>
                        <div className='square'><input type="text" id='square4' onChange={(e) => {this.fillSquare(e.target.id, e.target.value)}}/></div>
                        <div className='square'><input type="text" id='square5' onChange={(e) => {this.fillSquare(e.target.id, e.target.value)}}/></div>
                    </div>
                    <div className='column'>
                        <div className='square'><input type="text" id='square6' onChange={(e) => {this.fillSquare(e.target.id, e.target.value)}}/></div>
                        <div className='square'><input type="text" id='square7' onChange={(e) => {this.fillSquare(e.target.id, e.target.value)}}/></div>
                        <div className='square'><input type="text" id='square8' onChange={(e) => {this.fillSquare(e.target.id, e.target.value)}}/></div>
                        <div className='square'><input type="text" id='square9' onChange={(e) => {this.fillSquare(e.target.id, e.target.value)}}/></div>
                        <div className='square'><input type="text" id='square10' onChange={(e) => {this.fillSquare(e.target.id, e.target.value)}}/></div>
                    </div>
                    <div className='column'>
                        <div className='square'><input type="text" id='square11' onChange={(e) => {this.fillSquare(e.target.id, e.target.value)}}/></div>
                        <div className='square'><input type="text" id='square12' onChange={(e) => {this.fillSquare(e.target.id, e.target.value)}}/></div>
                        <div className='square'><input type="text" id='square13' onChange={(e) => {this.fillSquare(e.target.id, e.target.value)}}/></div>
                        <div className='square'><input type="text" id='square14' onChange={(e) => {this.fillSquare(e.target.id, e.target.value)}}/></div>
                        <div className='square'><input type="text" id='square15' onChange={(e) => {this.fillSquare(e.target.id, e.target.value)}}/></div>
                    </div>
                    <div className='column'>
                        <div className='square'><input type="text" id='square16' onChange={(e) => {this.fillSquare(e.target.id, e.target.value)}}/></div>
                        <div className='square'><input type="text" id='square17' onChange={(e) => {this.fillSquare(e.target.id, e.target.value)}}/></div>
                        <div className='square'><input type="text" id='square18' onChange={(e) => {this.fillSquare(e.target.id, e.target.value)}}/></div>
                        <div className='square'><input type="text" id='square19' onChange={(e) => {this.fillSquare(e.target.id, e.target.value)}}/></div>
                        <div className='square'><input type="text" id='square20' onChange={(e) => {this.fillSquare(e.target.id, e.target.value)}}/></div>
                    </div>
                    <div className='column'>
                        <div className='square'><input type="text" id='square21' onChange={(e) => {this.fillSquare(e.target.id, e.target.value)}}/></div>
                        <div className='square'><input type="text" id='square22' onChange={(e) => {this.fillSquare(e.target.id, e.target.value)}}/></div>
                        <div className='square'><input type="text" id='square23' onChange={(e) => {this.fillSquare(e.target.id, e.target.value)}}/></div>
                        <div className='square'><input type="text" id='square24' onChange={(e) => {this.fillSquare(e.target.id, e.target.value)}}/></div>
                        <div className='square'><input type="text" id='square25' onChange={(e) => {this.fillSquare(e.target.id, e.target.value)}}/></div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Home;