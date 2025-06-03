import { TodoCard } from "./TodoCard";

export function TodoList(props) {
  const { ActiveTab, todos, handleDeleteTodo, handleEditTodo, handleEditTodoText } = props;

  const ActiveTasks =
    ActiveTab === "All"
      ? todos
      : ActiveTab === "Open"
      ? todos.filter((val) => !val.complete)
      : todos.filter((val) => val.complete);

  return (
    <>
      {ActiveTasks.map((todo, todoIndex) => {
        const originalIndex = todos.indexOf(todo);
        return (
          <TodoCard
            key={todoIndex}
            todo={todo}
            todoIndex={originalIndex}
            handleDeleteTodo={handleDeleteTodo}
            handleEditTodo={handleEditTodo}
            handleEditTodoText={handleEditTodoText}
          />
        );
      })}
    </>
  );
}
