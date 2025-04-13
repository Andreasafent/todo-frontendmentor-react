// import { useState } from "react";
import "./App.css";
import CreateTodo from "./components/createTodo";
import Todo from "./components/todo";

function App() {
	return (
		<div
			className="h-[100vh] main"
			style={{ backgroundColor: "hsl(235, 21%, 11%)" }}
		>
			<img src="../public/bg-mobile-dark.jpg" alt="" className="" />
			<main className="flex flex-col mt-[-160px] px-[30px] gap-5">
				<div className="flex justify-between items-center">
					<div className="text-white">
						<p className="tracking-[20px] font-bold text-3xl">TODO</p>
					</div>
					<div className="text-white">Theme</div>
				</div>


				<CreateTodo/>


				<div
					className="text-white flex flex-col rounded-md "
					style={{ backgroundColor: " hsl(235, 24%, 19%)" }}
				>
					<Todo/>
					<div className="flex items-center py-4 px-5 justify-between">
						<p className="text-gray-500 text-sm">5 items left</p>
						<p className="text-gray-500 text-sm">Clear completed</p>
					</div>
					
				</div>

				<div className="flex items-center justify-center gap-5 text-gray-500 py-4 rounded-md text-md" style={{ backgroundColor: " hsl(235, 24%, 19%)" }}>
					<div className="font-bold">All</div>
					<div className="font-bold">Active</div>
					<div className="font-bold">Completed</div>
				</div>

				<div className="text-gray-500 mt-5 text-center text-sm">Drag and drop to reorder list</div>
			</main>
		</div>
	);
}

export default App;
