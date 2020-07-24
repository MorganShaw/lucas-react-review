import React, {Component} from "react";

class AddToDo extends Component {
    constructor(){
        super();

        this.state = {
            toDoInput: ''
        }
    }
    //this is for the input box, which has an event associated with it.
    handleChange = event => {
        this.setState({
            toDoInput: event.target.value
        })
    }

    addToDo = () => {
        this.props.add(this.state.toDoInput)
        this.setState({
            toDoInput: ""
        })
    }

    render(){
        console.log(this.state.toDoInput)
        //we console log just to see that the information from the input is being saved/recorded. And then we create the onClick event from that.
        return (
            <div>
                <input type="text" placeholder="Type Task Here" onChange={event => this.handleChange(event)} value={this.state.toDoInput}/>
                <button onClick={this.addToDo}>Add ToDo</button>

            </div>
        )
    }
}

export default AddToDo;