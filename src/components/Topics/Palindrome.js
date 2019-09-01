import React, { Component } from 'react';

class Palindrome extends Component {
    constructor() {
        super()
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    handleChange(val){
        this.setState({userInput: val})
    }

    isPalindrome() {
        let emptyArray = []

        emptyArray = this.state.userInput.split('')
        emptyArray.reverse()
        let checkPalin = emptyArray.join('')
        console.log(checkPalin)
        if (this.state.userInput === checkPalin){
            this.setState({palindrome: 'true'})
        } else this.setState({palindrome: 'false'})

    }

    render(){
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Palindrome</h4>
                <input className='inputLine' onChange={ e => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.isPalindrome(this.state.userInput)}>Check</button>
                <span className="resultsBox"> Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome;