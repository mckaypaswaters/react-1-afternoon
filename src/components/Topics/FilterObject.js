import React, { Component } from 'react';

class FilterObject extends Component {
    constructor(){
       super() 
        
        this.state = {
            unfilteredArray: [
            {
                name: 'McKay',
                age: '22',
                favoriteGame: 'Legend of Zelda',
                favoriteTeam: 'Utah Jazz'
            }, 
            {
                name: 'Skylar',
                age: 25,
                favoriteGame: 'Dark Souls'
            },
            {
                name: 'Brian',
                age: 31,
                favoriteGame: 'Super Mario Bros'
            }
        ],
            userInput: '',
            filteredArray: []
        }
    }
    
    
    
    
    render(){
        return (
            <div className='puzzleBox filterObjectPB'> 
            <h4>Filter Object</h4>
            <span className='puzzleText'></span>
            <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value) }></input>
            <button className='confirmationButton'></button>
            <span className='resultsBox filterObjectRB'></span>
        </div>  
        )
    }
}

export default FilterObject;