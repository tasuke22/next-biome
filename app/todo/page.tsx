"use client";

import { Button } from "@/components/ui/button";
import { type ChangeEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface Todo {
	id: string;
	content: string;
	completed: boolean;
}

export default function Page() {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [inputValue, setInputValue] = useState("");

	const handleInputTodo = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
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
			<div className="flex items-center gap-3 mt-4">
				<input
					onChange={handleInputTodo}
					type="text"
					className="border-2 flex-1 p-2 rounded"
					placeholder="タスクを入力してください"
					value={inputValue}
				/>
				<Button
					onClick={handleAddTodo}
					className="bg-green-500 text-white font-bold"
					variant="outline"
				>
					add
				</Button>
			</div>
			<ul className="grid grid-cols-1  gap-3 p-6 backdrop-blur-md">
				{todos.map((todo) => (
					<li
						key={todo.id}
						className="flex gap-3 items-center bg-gray-300 p-6 rounded-sm"
					>
						<input type="checkbox" />
						<input
							className="flex-1 p-2 rounded bg-gray-300 border-2"
							type="text"
							value={todo.content}
							onChange={(e) => handleUpdateTodo(todo.id, e.target.value)}
						/>
						<button
							onClick={() => handleDeleteTodo(todo.id)}
							type="button"
							className="bg-white p-2 rounded-full hover:bg-gray-700"
						>
							❌
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
