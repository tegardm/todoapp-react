import React, { useState } from "react"
import { useEffect } from "react"
import checkTodoData from "./checkTodo";
import FieldInput from "./FieldInput";
import ToDoList from "./ToDoList";

function App() {
  // Variable untuk kondisi apakah todoList ditampilkan atau tidak
  const [showTodo, setShowTodo] = useState(true)

  let [generateTodo, newGenerateTodo] = useState(null)

  // Function untuk mengambil data todoList dari child component dengan mengirimkan function dibawah 
  //  sebagai props ke JSX form ToDo
    const getTodo = (data) => {
      console.log('this is from parents')
      console.log(data)

      let dataTodo = {
            theTitle : data.theTitle,
            theDesc : data.theDesc,
            theDate : data.theDate,
            theOption : data.theOption,
            theId : data.theId
          }

      const todoData = localStorage.getItem('todoList');
      console.log(todoData)
      if (todoData != '') {
        let newData = JSON.parse(todoData);
       console.log(newData)
       newData.push(dataTodo)

        localStorage.setItem('todoList', JSON.stringify(newData))
        

         // Ambil Data Kembali 
         let takeTodo = JSON.parse(localStorage.getItem('todoList'))

         newGenerateTodo(takeTodo)
      } else {
        let newData = [{...dataTodo}]
        localStorage.setItem('todoList', JSON.stringify(newData))

        // Ambil Data Kembali 
        let takeTodo = JSON.parse(localStorage.getItem('todoList'))

        newGenerateTodo(takeTodo)
      }

    }

    

  useEffect(() => {
    console.log(checkTodoData(newGenerateTodo))

    
  }, [])



  return (
    <div className="App sm:w-10/12 lg:w-8/12 text-thirdy m-auto p-10">
        <h1 className=" text-4xl text-primary font-bold text-center text-g">To Do App !</h1>
        <hr className="bg-primary my-10 border-secondary border-2"/>
        <FieldInput  getTodo={getTodo}/>
        <hr className="bg-primary my-10 border-secondary border-2"/>
        
     {
      showTodo == false ? (
         <h1>Todo Disembunyikan</h1>
      ) : (
        <div className="grid gap-3  md:grid-cols-2">
            {
              
               generateTodo != null ? (
                       
                         
                           
                              generateTodo.map((todo, index) => {
                                return <ToDoList key={index} todo={todo}/>
                              })
                             
                        
                       
               ) : (
                <h1>Maaf Todo Tidak Ada !</h1>
               )
              
            }
        </div>
      )
     }
     <div className="flex">
      <button onClick={() => {setShowTodo(!showTodo)}} 
      className="myButton">
        
        {
          showTodo == false ? "Tampilkan Todo" : "Sembunyikan Todo"
        }
        
        </button> 
      </div>
    </div>
  );
}

export default App;
