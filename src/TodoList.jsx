import React from 'react';
import Todo from './Todo'

const TodoList = ({ todos, toggleTodo, removeTodo }) => {
	return (
		todos.map(todo => {
			return <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo} />
		})
	);
}

export default TodoList;