import { XMarkIcon } from "@heroicons/react/24/outline";

function Todo({ todo, onDelete, onToggle, dragListeners, dragAttributes }) {
    return (
        <div className="flex items-center px-5 py-4 gap-3 border-b border-gray-300 dark:border-gray-700 justify-between">
            <div
                {...dragListeners}
                {...dragAttributes}
                className="cursor-grab active:cursor-grabbing text-gray-400"
            >
                ☰
            </div>
            <input
                type="checkbox"
                onChange={() => onToggle(todo.id)}
                checked={todo.completed}
                className="appearance-none icon text-white rounded-full w-5 h-5 border-1 border-gray-700 checked:bg-purple-500 hover:cursor-pointer"
            />
            <p className={`font-main text-black dark:text-white/80 flex-1 text-md overflow-x-auto ${todo.completed ? 'line-through opacity-30' : ""}`}>{todo.text}</p>

            <XMarkIcon onClick={() => onDelete(todo.id)} className="h-6 w-6 text-black/50 dark:text-white/70 dark:text-white hover:cursor-pointer" />

        </div>
    );
}

export default Todo;
