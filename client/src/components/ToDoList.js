import React, { Component } from 'react';

export default class ToDoList extends Component {

  constructor(props){
    super(props);

    this.state = {
      userInput: '',
      list: []
    }
  }

  changeUserInput(input){
    this.setState({
      userInput: input
    });
  }

  addToList(input){
    let listArray = this.state.list;

    listArray.push(input);

    this.setState({
      list: listArray
    })
  }



    render() {
      return (
        <div className="to-do-list-main">
          <input
          onChange={ (e)=>this.changeUserInput(e.target.value) }
            value={this.state.userInput}
            type="text"
          />
          <button className="btn1" onClick={ ()=> this.addToList(this.state.userInput) }>Submit</button>
          <ul>
            {this.state.list.map(val=> <li>{val}</li >)}
          </ul>
        </div>
      )
    }
}
