import React from 'react';

const Todo = ({ todo, toggleTodo, removeTodo }) => {
	const handleTodoClick = () => toggleTodo(todo.id)
	const handleRemove = () => {
		removeTodo(todo.id)
	}
	
	return (
		<>
			<label>
				<input type="checkbox" defaultChecked={todo.complete} onChange={handleTodoClick} />
				{todo.name}
			</label>
			<button onClick={handleRemove}>&times;</button>
			<br />
		</>
	);
}

export default Todo;