import { useState } from "react"
import { useDispatch } from 'react-redux'
import { addTodo } from "../../features/todo/todoSlice"
import './AddTodo.css'


const Addtodo = () => {

    const [input, setInput] = useState("")
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='form'>

                <label htmlFor="addTodo" className="label">Add Task</label>
                <div>
                    <input type="text" id="addTodo" value={input} onChange={(e) => setInput(e.target.value)}
                    placeholder="Write task"
                        className='input'/>

                    <button className='add-button'>Add</button>

                </div>

            </form>
        </div>
    )
}

export default Addtodo
