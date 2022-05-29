import React from 'react';

const Todo = ({ todo, toggleTodo }) => {
	const handleTodoClick = () => toggleTodo(todo.id)
	
	return (
		<>
			<label>
				<input type="checkbox" defaultChecked={todo.complete} onChange={handleTodoClick} />
				{todo.name}
			</label>
			<br />
		</>
	);
}

export default Todo;