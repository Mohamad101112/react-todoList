
export function Tabs(props) {
    let {ActiveTab,setActiveTab,todos} = props;
    const tabs = ['All','Open','Closed'];
    
    function filterBystatus(status) {
        let counter = 0;
        todos.forEach(todo => {
            if(todo.complete === status) {
                counter++;
            }
        });
        return counter;
    }
   
   
    return (

            <nav>
                {tabs.map((tab,tabIndex)=>{
                    const numOfTasks = tab === 'All' ?
                        todos.length:
                        tab ===  'Open' ? 
                        filterBystatus(false):
                        filterBystatus(true)
                    ;

                    return (
                        <button key={tabIndex} onClick={()=>{setActiveTab(tab)} } 
                        className={"tab-button " + (tab === ActiveTab ?  ' tab-selected':'')}>
                        <h4>
                        {tab}
                        <span> ({numOfTasks})</span>    
                        </h4></button>    
                )
            })}
            <hr />
            </nav>
        )
}