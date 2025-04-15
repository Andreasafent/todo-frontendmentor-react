// import { useEffect } from "react";
// import { useState } from "react";

function CreateTodo() {
	

	return (
		<div
			className="flex items-center py-4 px-5 rounded-md gap-3 mt-2"
			style={{ backgroundColor: " hsl(235, 24%, 19%)" }}
		>
			<input
				type="checkbox"
				className="appearance-none icon text-white rounded-full w-5 h-5 border-1 border-gray-700 checked:bg-purple-500"
			/>
			<input
				// value={todo}
				// onChange={onChange}
				className="text-white/70 text-xs appearance-none w-full bg-transparent focus:outline-none"
				placeholder="Create a new todo..."
				// onKeyDown={(e) => {
				// 	if (e.key === "Enter") {
				// 		onAdd()
				// 	}
				// }}
			/>
		</div>
	);
}

export default CreateTodo;
