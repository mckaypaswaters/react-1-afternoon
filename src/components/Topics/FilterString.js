import React, { Component } from 'react';

class FilterString extends Component {
    constructor() {
        super()
        this.state = {
            names: ['McKay', 'Zach', 'Jordan', 'Mark', 'Brian', 'Skylar'],
            userInput: '',
            filteredArray: []
        }
    }
    handleChange(val){
        this.setState({userInput: val})
    }

    filterNames(userInput) {
        let filteredNames = []

        for(let i =0; i < this.state.names.length; i++){
            if(this.state.names[i].includes(userInput)){
                filteredNames.push(this.state.names[i])
            }
        }

        this.setState({ filteredArray: filteredNames})
    }
    
    
    render(){
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className="puzzleText"> Names: {JSON.stringify(this.state.names, null, 10)}</span>
                <input className="inputLine" onChange={e => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.filterNames(this.state.userInput)}>Filter</button>
                <span className='resultsBox filterStringRB'> Filtered Names: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}

export default FilterString;