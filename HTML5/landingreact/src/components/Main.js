import React, { Component } from 'react';

import "./Main.css";

export default class Main extends Component {
  state = {
    newTask: "",
  };

  inputChanged = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  }

  render() {
    const { newTask } = this.state;

    return (
      <div className='main'>
        <div className='Header'>
         <h1>Treinando React</h1>
          <form action="#">
            <input onChange={this.inputChanged} type='text '/>
            <button type='submit'>Enviar</button>
          </form>
        </div>
      </div>
    );
  }
}
