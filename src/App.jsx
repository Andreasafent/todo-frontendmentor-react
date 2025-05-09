import { useEffect, useState } from "react";
import "./App.css";
import CreateTodo from "./components/createTodo";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import TabsComponent from "./components/TabsComponent";
import { useMediaQuery } from "react-responsive";
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, MouseSensor, TouchSensor, } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy, } from '@dnd-kit/sortable';
import SortableItem from "./components/SortableItem";

function App() {

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
    const [todos, setTodos] = useState(() => {
        const stored = localStorage.getItem("todos");
        return stored ? JSON.parse(stored) : [];
    });
    const [filter, setFilter] = useState(localStorage.getItem("filter") || "all");

    const mouseSensor = useSensor(MouseSensor, {
        activationConstraint: {
            distance: 5,
        },
    });

    const touchSensor = useSensor(TouchSensor, {
        activationConstraint: {
            delay: 100,
            tolerance: 5,
        },
    });

    const sensors = useSensors(mouseSensor, touchSensor);

    function handleDragEnd(event) {
        const { active, over } = event;

        if (!over) return;

        if (active.id !== over.id) {
            setTodos((todos) => {
                const oldIndex = todos.findIndex(todo => todo.id === active.id);
                const newIndex = todos.findIndex(todo => todo.id === over.id);

                return arrayMove(todos, oldIndex, newIndex);
            });
        }
    }

    const isMobile = useMediaQuery({ maxWidth: 375 });
    const bgImage = isMobile
        ? theme === "dark"
            ? '/bg-mobile-dark.jpg'
            : '/bg-mobile-light.jpg'
        : theme === 'dark'
            ? '/bg-desktop-dark.jpg'
            : '/bg-desktop-light.jpg';


    const onAdd = (todo) => {
        setTodos(prev => [...prev, { id: Date.now(), text: todo, completed: false }])
    }

    const deleteTodo = (id) => {
        setTodos(prev => prev.filter(todo => todo.id !== id))
    }

    const toggleTodo = (id) => {
        setTodos(prev =>
            prev.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        )
    }

    const deleteCompleted = () => {
        setTodos(todos.filter(todo => !todo.completed));
        if (filter !== "completed") {
            return;
        }
        setFilter("all");
    }

    const filteredTodos = todos.filter(todo => {
        if (filter === "active") return !todo.completed;
        if (filter === "completed") return todo.completed;
        return true;
    })

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    useEffect(() => {
        localStorage.setItem('theme', theme);

        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme);

    }, [theme])

    useEffect(() => {
        localStorage.setItem("filter", filter);
    }, [filter])

    return (
        <div
            className="min-h-[100vh] main w-full flex flex-col bg-[#e4e5f1] dark:bg-[#161722]"
        >
            <img src={bgImage} className="h-[200px] w-full object-cover" />
            <div className="flex items-center justify-center w-full">

                <main className="flex flex-col mt-[-180px] px-[30px] gap-5 py-5 w-full md:w-[768px]">
                    <div className="flex justify-between items-center">
                        <div className="">
                            <p className="text-white tracking-[20px] font-bold text-3xl font-main-bold">TODO</p>
                        </div>
                        <button
                            className="btn"
                            onClick={() => {
                                setTheme(theme === 'dark' ? 'light' : 'dark');
                            }}
                        >
                            {
                                theme === 'dark' ? (
                                    <SunIcon className="h-8 w-8 text-white hover:cursor-pointer" />
                                ) : (
                                    <MoonIcon className="h-8 w-8 text-white hover:cursor-pointer" />
                                )
                            }
                        </button>
                    </div>


                    <CreateTodo
                        onAdd={onAdd}
                    />


                    {todos.length > 0 ? (
                        <>
                            <div
                                className="bg-[#fafafa] text-white flex flex-col rounded-md dark:bg-[#25273c] shadow-xl "
                            >
                                {/* {filteredTodos.map((todo) => (
                                    <Todo
                                        key={todo.id}
                                        todo={todo}
                                        onToggle={toggleTodo}
                                        onDelete={deleteTodo}
                                    />
                                ))} */}
                                <DndContext
                                    sensors={sensors}
                                    collisionDetection={closestCenter}
                                    onDragEnd={handleDragEnd}
                                >
                                    <SortableContext
                                        items={todos.map(todo => todo.id)} // 🔁 Full list here
                                        strategy={verticalListSortingStrategy}
                                    >
                                        {
                                            todos.map(todo =>
                                                // 🔍 Conditionally render based on filter
                                                (filter === "all" ||
                                                    (filter === "active" && !todo.completed) ||
                                                    (filter === "completed" && todo.completed)) && (
                                                    <SortableItem
                                                        key={todo.id}
                                                        id={todo.id}
                                                        todo={todo}
                                                        onToggle={toggleTodo}
                                                        onDelete={deleteTodo}
                                                    />
                                                )
                                            )
                                        }
                                    </SortableContext>
                                </DndContext>
                                <div className="flex items-center py-4 px-5 justify-between">
                                    <div className="w-[150px]">
                                        <p className="text-black/50 dark:text-white/30 text-sm font-main">{filteredTodos.length} items left</p>
                                    </div>
                                    <div className="hidden md:flex items-center justify-center gap-5 text-black/50 dark:text-white/30 text-sm">
                                        <TabsComponent
                                            filter={filter}
                                            setFilter={setFilter}
                                        />
                                    </div>
                                    <div className="w-[150px] text-end">
                                        <button onClick={() => deleteCompleted()} className="text-black/50 dark:text-white/30 text-sm hover:cursor-pointer font-main">Clear completed</button>
                                    </div>
                                </div>

                            </div>

                            <div className="bg-[#fafafa] dark:bg-[#25273c] md:hidden flex items-center justify-center gap-5 text-black/50 dark:text-white/30 py-4 rounded-md text-md shadow-lg">
                                <TabsComponent
                                    filter={filter}
                                    setFilter={setFilter}
                                />
                            </div>

                            <div className="text-black/50 dark:text-white/30 mt-5 text-center text-sm font-main">Drag and drop to reorder list</div>
                        </>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-10 gap-3 text-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-30 w-30 text-gray-300 dark:text-white/20"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={1.5}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12h6m-6 4h6m-7.5 4h9a2 2 0 002-2V6a2 2 0 00-2-2h-9a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                            </svg>
                            <p className="text-lg text-gray-400 dark:text-white/30 font-medium">
                                No todos yet. Take a breath 🌱
                            </p>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}

export default App;
