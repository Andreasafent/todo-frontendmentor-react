import { useEffect, useState } from "react";

function CreateTodo({onAdd}) {
    const [todo, setTodo] = useState("");

    const onChange = (e)=>{
        const input = e.target.value;
        
        setTodo(input)
    }

    const onSubmit = ()=>{
        const trimmed = todo.trim();

        if(trimmed.length<=3){
            alert("Please enter more than 3 characters");
            return;
        }
        onAdd(trimmed);
        setTodo("");
    }

    return (
        <div
            className="flex items-center py-4 px-5 rounded-md gap-3 mt-2 bg-[#fafafa] dark:bg-[#25273c]"
        >
            <input
                type="checkbox"
                className="appearance-none icon text-white rounded-full w-5 h-5 border-1 border-gray-700 checked:bg-purple-500"
            />
            <input
                value={todo}
                onChange={onChange}
                className="text-black dark:text-white text-md appearance-none grow bg-transparent focus:outline-none font-main"
                placeholder="Create a new todo..."
                onKeyDown={(e)=>{
                    if(e.key=="Enter"){
                        onSubmit();
                    }
                }}
            />
        </div>
    );
}

export default CreateTodo;
