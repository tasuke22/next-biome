import { type ChangeEvent, useState } from "react";
import type { Todo } from "@/app/todo-components/types/todo";
import TodoInput from "@/app/todo-components/components/todo-input";
import TodoList from "@/app/todo-components/components/todo-list";
import TodoQuery from "@/app/todo-components/components/todo-query";

const TodoForm = () => {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [searchQuery, setSearchQuery] = useState<string>("");

	const handleAddTodo = (newTodo: Todo) => {
		setTodos((prevTodos) => [...prevTodos, newTodo]);
	};

	const handleUpdateTodo = (id: string, newText: string) => {
		setTodos((prevTodos) =>
			prevTodos.map((todo) => {
				if (todo.id === id) {
					return { ...todo, content: newText };
				}
				return todo;
			}),
		);
	};

	const handleDeleteTodo = (id: string) => {
		setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
	};

	const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(e.target.value);
	};

	const filteredTodos = todos.filter((todo) =>
		todo.content.toLowerCase().includes(searchQuery.toLowerCase()),
	);

	return (
		<div className="container">
			<TodoQuery
				searchQuery={searchQuery}
				onSearchChange={handleSearchChange}
			/>
			<TodoInput onAddTodo={handleAddTodo} />
			<TodoList
				todos={filteredTodos}
				onUpdateTodo={handleUpdateTodo}
				onDeleteTodo={handleDeleteTodo}
			/>
		</div>
	);
};

export default TodoForm;
