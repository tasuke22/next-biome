import type { TodoItemProps } from "@/app/todo-components/types/todo";
import type { ChangeEvent } from "react";

const TodoItem = ({ todo, onUpdateTodo, onDeleteTodo }: TodoItemProps) => {
	const handleToggleComplete = () => {
		onUpdateTodo(todo.id, todo.content, !todo.completed);
	};

	const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
		onUpdateTodo(todo.id, e.target.value, todo.completed);
	};

	return (
		<li
			key={todo.id}
			className="flex gap-3 items-center bg-gray-300 p-6 rounded-sm"
		>
			<input
				type="checkbox"
				checked={todo.completed}
				onChange={handleToggleComplete}
			/>
			<input
				className="flex-1 p-2 rounded bg-gray-300 border-2"
				type="text"
				value={todo.content}
				onChange={handleTextChange}
			/>
			<button
				onClick={() => onDeleteTodo(todo.id)}
				type="button"
				className="bg-white p-2 rounded-full hover:bg-gray-700"
			>
				❌
			</button>
		</li>
	);
};
export default TodoItem;
