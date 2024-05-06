export type Todo = {
	id: string;
	content: string;
	completed: boolean;
};

export type TodoListProps = {
	todos: Todo[];
	onUpdateTodo: (id: string, newText: string) => void;
	onDeleteTodo: (id: string) => void;
};

export type TodoItemProps = {
	todo: Todo;
	onUpdateTodo: (id: string, newText: string) => void;
	onDeleteTodo: (id: string) => void;
};
