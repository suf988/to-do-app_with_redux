import './MainPage.css';
import Addtodo from '../addTodo/Addtodo'
import TodoList from '../todoList/TodoList'

const MainPage = () => {
    return (
        <div className='main-page'>

            <div className='main-div'>

                <h1 className='heading' >
                    TO-DO LIST</h1>

                <div>
                    <Addtodo />
                    <TodoList />
                </div>
            </div>
        </div>

    )
}

export default MainPage
