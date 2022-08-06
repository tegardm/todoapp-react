import React from 'react'

const ToDoList = (props) => {


  return (
    <>
  

    <div className='my-10 border-primary border-2 rounded p-5'>
        <div>
            <h1 className='font-bold tracking-widest text-primary text-xl'>{props.todo.theTitle}</h1>
 
            <h3 className='font-semibold text-sm mb-5 py-2'>{props.todo.theOption} - {props.todo.theDate}</h3>
        </div>
        <div>
              <button className='myButton text-sm '>Tampilkan Deskripsi</button>
        </div>
        <hr className="bg-primary my-5  border-secondary"/>

         <blockquote><p>{props.todo.theDesc}</p></blockquote>
    </div>

    

 
    
    
    </>
    
  )
}

export default ToDoList