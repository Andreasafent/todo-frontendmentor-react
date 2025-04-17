function TabsComponent({ filter, setFilter }) {
    return (
        <>
            <button onClick={()=>setFilter("all")} className={`${filter==="all" ? "text-[#3a7bfd]" : ""} hover:text-[#3a7bfd] font-bold hover:cursor-pointer`}>All</button>
            <button onClick={()=>setFilter("active")} className={`${filter==="active" ? "text-[#3a7bfd]" : ""} hover:text-[#3a7bfd] font-bold hover:cursor-pointer`}>Active</button>
            <button onClick={()=>setFilter("completed")} className={`${filter==="completed" ? "text-[#3a7bfd]" : ""} hover:text-[#3a7bfd] font-bold hover:cursor-pointer`}>Completed</button>
        </>
    );
}

export default TabsComponent;