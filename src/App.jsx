import './App.css'
import FilterTodo from './components/FilterTodo'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
  return (
    <>
    <h1>Todo App</h1>
    <TodoForm/>
    <FilterTodo/>
    <TodoList/>
    </>
  )
}

export default App
