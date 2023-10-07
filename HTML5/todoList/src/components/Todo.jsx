import React from 'react'

const Todo = ({ todo }) => {
  return (
    <div className="todo">
    <div className="content">
      <p>{todo.text}</p>{todo.text}
      <p className="category">({todo.category})</p>
    </div>
    <div>
      <button>Completo</button>
      <button>x</button>
    </div>
   </div>
  )
}

export default Todo;