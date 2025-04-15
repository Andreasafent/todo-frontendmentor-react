import { XMarkIcon } from "@heroicons/react/24/outline";

function Todo() {
	return (
		<div className="flex items-center px-5 py-4 gap-3 border-b border-gray-700 justify-between">
			<input
				type="checkbox"
				className="appearance-none icon text-white rounded-full w-5 h-5 border-1 border-gray-700 checked:bg-purple-500"
			/>
            <p className="text-white flex-1 text-xs text-white/30">Complete online JavaScript course</p>
			<XMarkIcon className="h-6 w-6 text-white/30" />
		</div>
	);
}

export default Todo;
