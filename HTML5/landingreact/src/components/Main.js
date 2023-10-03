import React, { Component } from 'react';

//Form

import { FaPlus } from "react-icons/fa";
import "./Main.css";

export default class Main extends Component {
  state = {
    newTask: "",
    tasks: [
      "Tarefa 1",
      "Tarefa 2",
      "Tarefa 3"
    ],
  };

  inputChanged = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  }

  render() {
    const { newTask, tasks } = this.state;

    return (
      <div className="main" >
         <h1>Learning React</h1>

          <form action="#" className='form'>
            <input onChange={this.inputChanged} type='text'/>
            <button type='submit'>
             <FaPlus />
            </button>
          </form>

        <div  className="ul" key={tasks}>
         <ul className='tasks-ul'>
           {tasks.map(t => (
            <li>{tasks}</li>
           ))}
         </ul>
        </div>

      </div>
    );
  }
}
