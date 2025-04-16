import { XMarkIcon } from "@heroicons/react/24/outline";

function Todo({ todo, onDelete }) {
    return (
        <div className="flex items-center px-5 py-4 gap-3 border-b border-gray-300 dark:border-gray-700 justify-between">
            <input
                type="checkbox"
                className="appearance-none icon text-white rounded-full w-5 h-5 border-1 border-gray-700 checked:bg-purple-500"
            />
            <p className="text-black dark:text-white/50 flex-1 text-xs">{todo.text}</p>

            <XMarkIcon onClick={()=> onDelete(todo.id)} className="h-6 w-6 text-black/50 dark:text-white/70 dark:text-white hover:cursor-pointer" />

        </div>
    );
}

export default Todo;
