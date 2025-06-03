export function TodoCard(props) {
  const { todo, todoIndex, handleDeleteTodo, handleEditTodo, handleEditTodoText } = props;
  console.log(todo.input);
  console.log(`todoInp-${todoIndex}`)

  return (
    <div className="card todo-item">
          <input type="text" name="" 
          data-index={todoIndex} 
          className={`todoInp todoInp-${todoIndex}`}
          onKeyUp={(e)=>{
            if(e.key === 'Enter'){
                handleEditTodoText(todoIndex)
            }
          }}
           />
     
      <p className={`mainElemsInTaskCard-${todoIndex}`} >{todo.input}</p>
      <div className="todo-buttons">
        
        <button className={`mainElemsInTaskCard-${todoIndex}`} disabled={todo.complete}
        onClick={()=>{handleEditTodo(todoIndex);}}>
          <h6>Done</h6>
        </button>

        <button 
        disabled={todo.complete} 
        className={`EditBtn-${todoIndex}`} 
        onClick={()=>{handleEditTodoText(todoIndex)}}
        
        >Edit</button>


        <button
        className={`mainElemsInTaskCard-${todoIndex}`}
          onClick={() => {
            handleDeleteTodo(todoIndex);
          }}
        >
          <h6>Delete</h6>
        </button>



      </div>
    </div>
  );
}
