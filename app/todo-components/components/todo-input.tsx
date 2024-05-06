import { Button } from "@/components/ui/button";
import { type ChangeEvent, useState } from "react";
import type { Todo } from "@/app/todo-components/types/todo";
import { v4 as uuidv4 } from "uuid";

type TodoInputProps = {
	onAddTodo: (newTodo: Todo) => void;
};

const TodoInput = ({ onAddTodo }: TodoInputProps) => {
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
		onAddTodo(newTodo);
		setInputValue("");
	};

	return (
		<div className="flex items-center gap-3 mt-4">
			<input
				onChange={(e) => {
					handleInputTodo(e);
				}}
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
	);
};
export default TodoInput;
