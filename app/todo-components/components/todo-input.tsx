import { Button } from "@/components/ui/button";
import type { ChangeEvent } from "react";

interface TodoInputProps {
	inputValue: string;
	onInputTodo: (value: string) => void;
	onAddTodo: () => void;
}

const TodoInput = ({ inputValue, onInputTodo, onAddTodo }: TodoInputProps) => {
	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		onInputTodo(e.target.value);
	};

	return (
		<div className="flex items-center gap-3 mt-4">
			<input
				onChange={handleInputChange}
				type="text"
				className="border-2 flex-1 p-2 rounded"
				placeholder="タスクを入力してください"
				value={inputValue}
			/>
			<Button
				onClick={onAddTodo}
				className="bg-green-500 text-white font-bold"
				variant="outline"
			>
				add
			</Button>
		</div>
	);
};
export default TodoInput;
