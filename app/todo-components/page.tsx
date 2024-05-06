"use client";

import TodoInput from "@/app/todo-components/components/todo-input";
import TodoList from "@/app/todo-components/components/todo-list";
import { useState } from "react";
import type { Todo } from "@/app/todo-components/types/todo";

export default function Page() {
	const [todos, setTodos] = useState<Todo[]>([]);

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

	return (
		<div className="container">
			<TodoInput onAddTodo={handleAddTodo} />
			<TodoList
				todos={todos}
				onUpdateTodo={handleUpdateTodo}
				onDeleteTodo={handleDeleteTodo}
			/>
		</div>
	);
}
