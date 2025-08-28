import { useState } from 'react'
import TodoList from './components/TodoList';

function App() {
    return (
    <>
      <div className="App">
      <TodoList /> {/* <-- render TodoList */}
      </div>
    </>
  )
}

export default App;
