import React from 'react'

const deleteTodo = (id, generateTodo) => {

    const todo = localStorage.getItem('todoList');
    const dataTodo = JSON.parse(todo);
    
    let newArr = []

    const filterTodo = () => {
        dataTodo.filter((todo) => {
            if (todo.theId !== id) {
                newArr.push(todo)
            }
        })
    }

    filterTodo()

    generateTodo(newArr)

    localStorage.setItem('todoList', JSON.stringify(newArr))

}

export default deleteTodo