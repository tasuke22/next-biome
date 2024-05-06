import type { TodoListProps } from "@/app/todo-components/types/todo";
import TodoItem from "@/app/todo-components/components/todo-item";

const TodoList = ({ todos, onUpdateTodo, onDeleteTodo }: TodoListProps) => {
	return (
		<ul className="grid grid-cols-1  gap-3 p-6 backdrop-blur-md">
			{todos.map((todo) => (
				<TodoItem
					key={todo.id}
					todo={todo}
					onUpdateTodo={onUpdateTodo}
					onDeleteTodo={onDeleteTodo}
				/>
			))}
		</ul>
	);
};
export default TodoList;
