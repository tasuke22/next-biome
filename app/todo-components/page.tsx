"use client";

import { useState } from "react";
import type { Todo } from "@/app/todo-components/types/todo";
import { v4 as uuidv4 } from "uuid";
import TodoInput from "@/app/todo-components/components/todo-input";
import TodoList from "@/app/todo-components/components/todo-list";

export default function Page() {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [inputValue, setInputValue] = useState("");

	const handleInputTodo = (value: string) => {
		setInputValue(value);
	};

	const handleAddTodo = () => {
		if (!inputValue.trim()) return alert("タスクを入力してください");
		const newTodo: Todo = {
			id: uuidv4(),
			content: inputValue,
			completed: false,
		};
		setTodos((prevTodos) => [...prevTodos, newTodo]);
		setInputValue("");
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
			<TodoInput
				inputValue={inputValue}
				onInputTodo={handleInputTodo}
				onAddTodo={handleAddTodo}
			/>
			<TodoList
				todos={todos}
				onUpdateTodo={handleUpdateTodo}
				onDeleteTodo={handleDeleteTodo}
			/>
		</div>
	);
}
