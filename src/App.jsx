import React, { useState, useRef, useEffect } from 'react';
import TodoList from "./TodoList"
import gen from "./idg"

const LOCAL_STORAGE_KEY = "todoApp.todos"

const App = () => {
	const [todos, setTodos] = useState([])
	const todoNameRef = useRef()

	useEffect(() => {
		const oldTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
		if (oldTodos) setTodos(oldTodos)
	}, [])
	
	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
	}, [todos])

	const toggleTodo = id => {
		const newTodos = [...todos]
		const todo = newTodos.find(todo => todo.id === id)
		todo.complete = !todo.complete
		setTodos(newTodos)
	}

	const addTodo = e => {
		const name = todoNameRef.current.value

		if (name === '') return
		setTodos(prevTodos => {
			return [...prevTodos, {id: gen(), name: name, complete: false}]
		})
		todoNameRef.current.value = null
	}

	const clearTodos = () => {
		const newTodos = todos.filter(todo => !todo.complete)
		setTodos(newTodos)
	}
	
	return (
		<>
			<TodoList todos={todos} toggleTodo={toggleTodo} />
			<input ref={todoNameRef} type="text" placeholder="Get Bananas..." />
			<button onClick={addTodo} >Add Todo</button>
			<button onClick={clearTodos}>Clear Complete</button>
			<div>{todos.filter(todo => !todo.complete).length} Left To Do</div>
		</>
	);
}

export default App;