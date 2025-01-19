import React ,{useState} from 'react';
import "./TaskForm.css";
import Tag from './Tag';
const TaskForm = ({setTasks}) => {
  const [taskData , setTaskData] = useState({
    task: "",
    status : "To do",
    tags: []
  })
  const selected = (tag) =>{
    return taskData.tags.some(item => item == tag)
  }
  const selectTag = (tag) =>{
    if(taskData.tags.some(items => items == tag)){
      const filterTag = taskData.tags.filter(item => item != tag)
      setTaskData(prev=>{
        return {...prev, task: filterTag}
      })
    }
    else{
      setTaskData(prev => {
        return {...prev,tags : [...prev.tags,tag]}
      })
    }
  }
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    
    setTaskData(prev =>{
      return {...prev, [name]: value}
    })
  };
   const handleSubmit = (e) => {
     e.preventDefault();
     console.log(taskData)
     setTasks((prev)=>{
      return[...prev,taskData]
     });
     setTaskData({
      task: "",
      status : "To do",
      tags: []
     })
   }
 return <>
    <header className='app_header'>
    <form className='forms' onSubmit={handleSubmit}>
        <input type="text"  value={taskData.task} className='task_input' placeholder='Enter your input' name = "task" onChange={handleChange}/>
        <div className='task_form_bottom_line'>
          <div>
            <Tag tagName="HTML" selectTag={selectTag} selected={selected("HTML")}/>   
            <Tag tagName="CSS" selectTag={selectTag} selected={selected("CSS")}/>
            <Tag tagName="JS" selectTag={selectTag} selected={selected("JS")}/>
            <Tag tagName="REACTJS" selectTag={selectTag} selected={selected("REACTJS")}/>
            </div>
            <div>
            <select value={taskData.status} className='task_status' name = "status" onChange={handleChange}>
            <option>To do </option>
            <option>Doing</option>
            <option>Done</option>
        </select>
        <button type= "submit" className='task_submit'>
            +Add Task
            
        </button>
        </div>
        </div>
 </form>
    </header>
  </>

}

export default TaskForm;