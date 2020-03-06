import React, { Component } from 'react';
import AddListItemForm from '../AddListItemForm/AddListItemForm'
import ListItem from '../ListItem/ListItem'
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={

    }
  }

  render(){
    return (
      <div className="App">
        <AddListItemForm />
        <container className="ListContainer">
          <div className="containerHeader">
            <div className="closeAllJaws">Button to close All Jawbones</div>
          </div>
          <ListItem />
        </container>
      </div>
    );
  }
}

export default App;
