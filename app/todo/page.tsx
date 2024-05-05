import { Button } from "@/components/ui/button";

export default function Page() {
	return (
		<div className="container">
			<div className="flex items-center gap-3 mt-4">
				<input
					type="text"
					className="border-2 flex-1 p-2 rounded"
					placeholder="タスクを入力してください"
				/>
				<Button className="bg-green-500 text-white font-bold" variant="outline">
					add
				</Button>
			</div>
			<ul className="grid grid-cols-1  gap-3 p-6 backdrop-blur-md">
				<li className="flex gap-3 items-center bg-gray-300 p-6 rounded-sm">
					<input type="checkbox" />
					<p className="flex-1">123</p>
					<button
						type="submit"
						className="bg-white p-2 rounded-full hover:bg-gray-700"
					>
						❌
					</button>
				</li>
				<li className="flex gap-3 items-center bg-gray-300 p-6 rounded-sm">
					<input type="checkbox" />
					<p className="flex-1">123</p>
					<button
						type="submit"
						className="bg-white p-2 rounded-full hover:bg-gray-700"
					>
						❌
					</button>
				</li>
				<li className="flex gap-3 items-center bg-gray-300 p-6 rounded-sm">
					<input type="checkbox" />
					<p className="flex-1">123</p>
					<button
						type="submit"
						className="bg-white p-2 rounded-full hover:bg-gray-700"
					>
						❌
					</button>
				</li>
			</ul>
		</div>
	);
}
