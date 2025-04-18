function TabsComponent({ filter, setFilter }) {

    const tabs = [
        "all",
        "active",
        "completed",
    ]

    return (
        <>
            { 
                tabs.map(tab=>(
                    <button key={tab} onClick={() => setFilter(tab)} className={`${filter === tab ? "text-[#3a7bfd]" : ""} hover:text-[#3a7bfd] font-bold hover:cursor-pointer`}>{tab.charAt(0).toUpperCase() + tab.slice(1)}</button>
                ))
            }
        </>
    );
}

export default TabsComponent;