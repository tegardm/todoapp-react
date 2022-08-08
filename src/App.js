import React, { useState } from "react"
import { useEffect } from "react"
import checkTodoData from "./checkTodo";
import FieldInput from "./FieldInput";
import ToDoList from "./ToDoList";
import Footer from "./Footer";

function App() {
  // Variable untuk kondisi apakah todoList ditampilkan atau tidak
  const [showTodo, setShowTodo] = useState(true)
 
  let [generateTodo, newGenerateTodo] = useState(null)



  useEffect(() => {
    checkTodoData(newGenerateTodo)
  }, [])
  // Function untuk mengambil data todoList dari child component dengan mengirimkan function dibawah 
  //  sebagai props ke JSX form ToDo
    const getTodo = (data) => {


      let dataTodo = {
            theTitle : data.theTitle,
            theDesc : data.theDesc,
            theDate : data.theDate,
            theOption : data.theOption,
            theId : data.theId,
            theComplete : data.theComplete
          }

      const todoData = localStorage.getItem('todoList');
      // console.log(todoData)
      // console.log(todoData != '')
      console.log(todoData != null, todoData != '')
      if (todoData != null && todoData != '' ) {

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
    
  }, [])



  return (
    <div className="App font-poppins sm:w-10/12 lg:w-8/12 text-thirdy m-auto  p-10">
        <h1 className=" text-3xl md:text-4xl text-primary font-bold text-center text-g">Tegardm To Do App !</h1>
        <hr className="bg-primary my-10 border-secondary border-2"/>
        <FieldInput  getTodo={getTodo}/>
        <hr className="bg-primary my-10 border-secondary border-2"/>
        <div className="flex">
      <button onClick={() => {setShowTodo(!showTodo)}} 
      className="myButton">
        
        {
          showTodo == false ? "Tampilkan Todo" : "Sembunyikan Todo"
        }
        
        </button> 
      </div>
     {
      showTodo == false ? (
         <h1 className="text-xl italic my-5 text-red-400 tracking-widest font-semibold text-center">Todo Disembunyikan</h1>
      ) : (
        <div className={generateTodo ? 'grid gap-3  md:grid-cols-2' : 'text-center'}>
            {
              
               generateTodo ? (
    
                              generateTodo.map((todo, index) => {
                                return <ToDoList key={index} generateTodo={generateTodo} newGenerateTodo={newGenerateTodo} todo={todo}/>
                              })
                             
                        
                       
               ) : (
                <h1 className="text-xl italic my-5 text-red-400 tracking-widest font-semibold text-center">Maaf Todo Tidak Ada !</h1>
               )
              
            }
        </div>
      )
     }
             <hr className="bg-primary my-10 border-secondary border-2"/>

     <Footer/>
    
    </div>
  );
}

export default App;
