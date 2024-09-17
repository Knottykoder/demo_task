import useTodoData from "../hooks/useTodoData"

const TodoForm = ()=>{
    const {text,description,setText,addTodo,setDescription} = useTodoData()
 return (
    <>
    <input placeholder="Add task" value={text} onChange={(e)=>setText(e.target.value)} />
    <textarea placeholder="Enter description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
    <button onClick={addTodo}>Add todo</button>
    </>
 )
}

export default TodoForm