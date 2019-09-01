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

    handleChange(val) {
        this.setState({ userInput: val });
      }
    
      filterFriends(prop) {
        let unfilteredArray = this.state.unfilteredArray;
        let filteredArray = [];
    
        for ( let i = 0; i < unfilteredArray.length; i++ ) {
          if ( unfilteredArray[i].hasOwnProperty(prop) ) {
            filteredArray.push(unfilteredArray[i]);
          }
        }
    
        this.setState({ filteredArray: filteredArray });
      }
    
    
    render(){
        return (
            <div className='puzzleBox filterObjectPB'> 
            <h4>Filter Object</h4>
            <span className='puzzleText'> Original: { JSON.stringify(this.state.unfilteredArray, null, 10) }</span>
            <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value) }></input>
            <button className='confirmationButton' onClick= { () => this.filterFriends(this.state.userInput) }>Filter</button>
            <span className='resultsBox filterObjectRB'> Filtered: { JSON.stringify(this.state.filteredArray, null, 10) }</span>
        </div>  
        )
    }
}

export default FilterObject;