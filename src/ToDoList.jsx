import React, { useEffect, useState } from 'react'
import deleteTodo from './deleteTodo'
const ToDoList = (props) => {
const [showDesc, setShowDesc] = useState(false)

   const checkComplete = () => {
      const todo1 = localStorage.getItem('todoList');
      const dataTodo = JSON.parse(todo1);
      console.log(dataTodo)
      dataTodo.map((data) => {
      if (data.theId == props.todo.theId) {
            console.log(data)
            data.theComplete = !data.theComplete
            console.log(data)
      }
      
    })

    props.newGenerateTodo(dataTodo)
    const dataBaru = JSON.stringify(dataTodo);
    localStorage.setItem('todoList', dataBaru)


   }


    const theOptionColor = (text) => {
            switch (text) {
              case 'Sangat Penting' :
                    return 'bg-orange-400';
                    break;
              case 'Penting' :
                    return 'bg-yellow-400';
                    break;
              case 'Normal' :
                    return 'bg-green-400';
                    break;
              case 'Tidak Penting' :
                    return 'bg-gray-400';
                    break;
            }
    }

  return (
    <>
  

    <div className={`${props.todo.theComplete ? 'bg-green-100 ' : 'bg-red-100'}
    my-10 ${props.todo.theComplete ? 'border-green-500' : 'border-red-400'} border-2 rounded p-5`}>
        <div>
            <h1 className='font-bold tracking-widest text-primary text-xl'>{props.todo.theTitle}</h1>
 
            <h3 className='font-semibold text-sm py-2'><span className={`${theOptionColor(props.todo.theOption)} px-3 py-1 mt-1 rounded-full`}>{props.todo.theOption}</span> - {props.todo.theDate}</h3>
        </div>
        <div className='mb-5 flex font-semibold  gap-x-2 capitalize'>
              <input value={props.todo.theComplete} defaultChecked={props.todo.theComplete ? true : false}  onChange={() =>  { checkComplete()}} type="checkbox"></input>
              <h3 className={`${props.todo.theComplete ? 'text-green-500' : 'text-red-500'}`}>{
                props.todo.theComplete ? "Sudah Selesai" : "Belum Selesai"
              }</h3>
        </div>
        <div className='grid gap-y-3  md:gap-y-0 text-center items-center grid-cols-1 md:grid-cols-2'>
              <button onClick={(previousValue) => setShowDesc(!showDesc)} className='myButton text-sm'>{showDesc ? 'Sembunyikan ' : 'Tampilkan '} Deskripsi</button>
              <button onClick={() => {deleteTodo(props.todo.theId, props.newGenerateTodo)}} className='myButton text-sm '>Delete Todo</button>
        </div>
        
        <hr className="bg-primary my-5  border-secondary"/>

        {
          showDesc ? (
            <blockquote><p>{props.todo.theDesc}</p></blockquote>
          ) : ''
        }
    </div>

    

 
    
    
    </>
    
  )
}

export default ToDoList