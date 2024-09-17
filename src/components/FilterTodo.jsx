import { useState } from "react"
import useTodoData from "../hooks/useTodoData"

const options = ["All","Pending","Complete"]
const FilterTodo = ()=>{
   const {setStatus} = useTodoData()
 return (
    <div>
         <select onChange={(e)=>setStatus(e.target.value)}>
        {options.map(item=> <option>{item}</option>)}
    </select>
    </div>
 )
}

export default FilterTodo