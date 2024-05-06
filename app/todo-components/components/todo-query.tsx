import type { ChangeEvent } from "react";

interface TodoQueryProps {
	searchQuery: string;
	onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TodoQuery = ({ searchQuery, onSearchChange }: TodoQueryProps) => {
	return (
		<div className="pt-6 w-1/2 mx-auto">
			<input
				type="text"
				placeholder="検索..."
				value={searchQuery}
				onChange={onSearchChange}
				className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
			/>
		</div>
	);
};

export default TodoQuery;
