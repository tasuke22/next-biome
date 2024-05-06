export type Todo = {
	id: string;
	content: string;
	completed: boolean;
};

export type TodoListProps = {
	todos: Todo[];
	onUpdateTodo: (id: string, newText: string, completed: boolean) => void;
	onDeleteTodo: (id: string) => void;
	totalTasks: number;
	remainingTasks: number;
};

export type TodoItemProps = {
	todo: Todo;
	onUpdateTodo: (id: string, newText: string, completed: boolean) => void;
	onDeleteTodo: (id: string) => void;
};
