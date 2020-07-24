import React from "react";
import ToDo from './ToDo'

const MasterList = props => {
    return (
        <div>
            {props.toDoList.map((element, index, array) => {
                return <ToDo item={element} key={index}/>
            })}            
        </div>
    );
}


export default MasterList

// you could set up a forloop to go through and return an instance of a todo item and pass in props.todolist[i].MasterList

//curly brackets to get out of JSX and write javascript.
//We're creating a ToDo for each item in the array. (So we don't have to hard code them all out on this page each time one changes or is added/removed.)

//for my afternoon project - it will return an object from the map....


//The map is really important. It will loop over array and return each item in the array. Remember the item= can be named whatever you want. Essentially, it represents the element in the array, and the key is a keyword that represents where in the array or object the element is. 