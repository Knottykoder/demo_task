import useTodoData from "../hooks/useTodoData"

const TodoItem = ({todo})=>{
    const {removeTodo,editTodo,onCompleteTask} = useTodoData()
    return <>
        <li>
            <div>
                <p>{todo.todo}</p>
               <p>{todo.description}</p> 
               <button onClick={()=>onCompleteTask(todo.id)}>Complete</button>
                <button onClick={()=>editTodo(todo.id)}>edit</button>
                <button onClick={()=>removeTodo(todo.id)}>remove</button>
            </div>
        </li>
    </>
    }
    
    export default TodoItem