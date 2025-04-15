import { useEffect, useState } from "react";
import "./App.css";
import CreateTodo from "./components/createTodo";
import Todo from "./components/todo";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

function App() {

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        localStorage.setItem('theme', theme);

        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme);

        console.log(document.documentElement.classList);
    }, [theme])

    return (
        <div
            className="h-[100vh] main w-full flex flex-col bg-[#e4e5f1] dark:bg-[#161722]"
        >
            <img src="../public/bg-mobile-dark.jpg" className="xs:hidden light:hidden h-[200px] w-full object-cover" />
            <img src="../public/bg-mobile-light.jpg" className="xs:hidden dark:hidden h-[200px] w-full object-cover" />
            <img src="../public/bg-desktop-dark.jpg" className="light:hidden xs:block h-[200px] w-full object-cover" />
            <img src="../public/bg-desktop-light.jpg" className="dark:hidden xs:block h-[200px] w-full object-cover" />
            <div className="flex items-center justify-center w-full">

                <main className="flex flex-col mt-[-180px] px-[30px] gap-5 py-5 w-full md:w-[768px]">
                    <div className="flex justify-between items-center">
                        <div className="">
                            <p className="text-white tracking-[20px] font-bold text-3xl">TODO</p>
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


                    <CreateTodo />


                    <div
                        className="bg-[#fafafa] text-white flex flex-col rounded-md dark:bg-[#25273c] shadow-xl "
                    >
                        <Todo />
                        <div className="flex items-center py-4 px-5 justify-between">
                            <div className="w-[110px]">
                                <p className="text-black/50 dark:text-white/30 text-sm">5 items left</p>
                            </div>
                            <div className="hidden md:flex items-center justify-center gap-5 text-black/50 dark:text-white/30 text-sm">
                                <button className="hover:text-[#3a7bfd] font-bold hover:cursor-pointer">All</button>
                                <button className="hover:text-[#3a7bfd] font-bold hover:cursor-pointer">Active</button>
                                <button className="hover:text-[#3a7bfd] font-bold hover:cursor-pointer">Completed</button>
                            </div>
                            <div className="w-[110px] text-end">
                                <p className="text-black/50 dark:text-white/30 text-sm">Clear completed</p>
                            </div>
                        </div>

                    </div>

                    <div className="bg-[#fafafa] dark:bg-[#25273c] md:hidden flex items-center justify-center gap-5 text-black/50 dark:text-white/30 py-4 rounded-md text-md">
                        <button className="hover:text-[#3a7bfd] font-bold hover:cursor-pointer">All</button>
                        <button className="hover:text-[#3a7bfd] font-bold hover:cursor-pointer">Active</button>
                        <button className="hover:text-[#3a7bfd] font-bold hover:cursor-pointer">Completed</button>
                    </div>

                    <div className="text-black/50 dark:text-white/30 mt-5 text-center text-sm">Drag and drop to reorder list</div>
                </main>
            </div>
        </div>
    );
}

export default App;
