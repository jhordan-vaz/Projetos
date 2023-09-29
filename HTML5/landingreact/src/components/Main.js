import React, { Component } from 'react';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTask: "",
    };
  }

  inputChanged() {
    
  }

  render() {
    return (
      <div className='main'>
        <div className='Header'>
        <h1>Lista React</h1>
          <form action="#">
            <input onChange={this.inputChanged} type='text '/>
            <button type='submit'>Enviar</button>
          </form>
        </div>
      </div>
    );
  }
}
