import React ,{useState, useEffect}from 'react'
import "./App.css"
import TaskForm from './components/TaskForm';
import TaskColumn from './components/TaskColumn';
import todo from "./assets/direct-hit.png"
import doing from "./assets/glowing-star.png"
import done from "./assets/check-mark-button.png"
const App = () => {
  const [tasks , setTasks] = useState([])
  const handleDelete = (taskIndex)=> {
    const newTasks = tasks.filter((task,index) => index!= taskIndex)
    setTasks(newTasks)
  }
  return (
    <div className='app'>
    <TaskForm setTasks = {setTasks}/>
    <main className='app__main'>
    <TaskColumn TaskName="To do" icon={todo} tasks={tasks} status={"To do"} handleDelete={handleDelete}/>
    <TaskColumn TaskName="Doing" icon={doing} tasks={tasks} status={"Doing"} handleDelete={handleDelete}/>
    <TaskColumn TaskName="Done" icon={done} tasks={tasks} status={"Done"} handleDelete={handleDelete}/>
    </main>
    </div>
  )
}

export default App;
