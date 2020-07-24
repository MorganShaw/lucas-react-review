import React from 'react';
import AddToDo from './components/AddToDo'
import MasterList from './components/MasterList'


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      masterToDoList: ["eat food", "take a break", "get some sleep"]

    }
    this.add = this.add.bind(this)
  }
  //Need to understand this. If we're making any changes to a property on state, the functionality for making that change needs to be created inside that component. Bind allows us to transfer that functionality to another component. changes to state need to occur where the state is being held.
  //below - create a copy of our master todo list. Then push new value onto updated list.

  add(newToDo){
    const updatedList = [...this.state.masterToDoList]
    updatedList.push(newToDo)
    this.setState({
      masterToDoList: updatedList
    })
  }
  //here, the key is we create this method that takes the current list and adds a new item and it updates the master list to include that new item. That new item will come when we invoke the add function. The piece of information passed into the function (the parameter) add when it's invoked will update the list. 
  
  
  render(){
    return (
      <div>
        <h1>This is the App Component</h1>
        <AddToDo add={this.add}/>
        <MasterList toDoList={this.state.masterToDoList}/>
      </div>
    );
  }
}

export default App;

//specific props object for app.js to addtodo, masterlist, and masterlist to todo, respectively.


//Review this example to look at which components have state/ are stateful or class components, and which are functional/stateless components and why.