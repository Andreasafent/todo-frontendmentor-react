import { useEffect } from "react";
import { useState } from "react";

function CreateTodo() {
	const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
	const onChange = (e) => {
		setTodo(e.target.value);
	};

    const onAdd = ()=>{
        if(!todo || todo.length<3){
            alert("Please enter a valid todo");
            return;
        }
        setTodos([...todos, todo]);
    }

    useEffect(()=>{
        console.log(todos)
    }, [todos])

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
				value={todo}
				onChange={onChange}
				className="text-white text-xs"
				placeholder="Create a new todo..."
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						onAdd()
					}
				}}
			/>
		</div>
	);
}

export default CreateTodo;
