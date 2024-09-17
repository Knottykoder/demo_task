import { useSelector } from 'react-redux'
import TodoItem from "./TodoItem"

const TodoList = ()=>{
    const todoData = useSelector((state) => state.todo.todo)
return <>
<ul>
   {todoData && todoData.length > 0 && todoData.map(todo=> <TodoItem todo={todo}/>)}
</ul>
</>
}

export default TodoList