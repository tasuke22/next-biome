import type { TodoItemProps } from "@/app/todo-components/types/todo";

const TodoItem = ({ todo, onUpdateTodo, onDeleteTodo }: TodoItemProps) => {
	return (
		<li
			key={todo.id}
			className="flex gap-3 items-center bg-gray-300 p-6 rounded-sm"
		>
			<input type="checkbox" />
			<input
				className="flex-1 p-2 rounded bg-gray-300 border-2"
				type="text"
				value={todo.content}
				onChange={(e) => onUpdateTodo(todo.id, e.target.value)}
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
