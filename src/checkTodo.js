import React from "react"


  // Function untuk melakukan check terhadap listTodo di localStorage kita, sehingga tetap akan ada meski
  // browser diclose nanti
  const checkTodoData = (gen) => {
    let data = localStorage.getItem('todoList')

          if (data == null || data == '') {
            localStorage.setItem('todoList', '')
            console.log('data adalah string kosong')
          } else {
              const newData = JSON.parse(data)
              // console.log(newData)
              let arr = [...newData]
              // console.log(arr)
                gen(arr)
              return arr
          } 

          
        
    }


    export default checkTodoData;