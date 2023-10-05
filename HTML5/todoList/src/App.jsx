import { useState } from 'react'

function App() {
  const [all, setAll] = useState([
    {
      id: 1,
      text: "Criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar programação",
      category: "Estudos",
      isCompleted: false,
    }
  ])

  return  <div>Hello World!</div>
}

export default App
