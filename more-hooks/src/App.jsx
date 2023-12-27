import { useState } from 'react'

import './App.css'
import TodoApp from './components/ToDoApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <UseReducer /> */}
    <TodoApp />
    {/* <TodoItem /> */}
    </>
  )
}

export default App