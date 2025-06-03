export function Header(props) {
    const {todos} = props;
    const todoLength = todos.length;
    const isTasksPlural = todos.length != 1;
    return (
        <header>
            <h1 className="text-gradient">you have {todoLength} open {isTasksPlural ? `tasks`: `task`}.</h1>
        </header>
    )
}