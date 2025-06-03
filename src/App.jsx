import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import { useState , useEffect } from "react";

function App() {
  //   const todos = [
  // { input: 'Hello! Add your first todo!', complete: true },
  // { input: 'Get the groceries!', complete: false },
  // { input: 'Learn how to web design', complete: false },
  // { input: 'Say hi to gran gran', complete: true },
  // ]

  const [todos, setTodos] = useState([
    { input: "Hello! Add your first todo!", complete: true },
  ]);

  const [ActiveTab, setActiveTab] = useState("All");

  function handleAddTodo(newTodo) {
    if(newTodo === ''){
      return;
    }
    const newTodoList = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodoList);
    localStorage.setItem('todo-app',JSON.stringify(newTodoList))

  }

  function handleEditTodo(index) {
    let newTodoList = [...todos];
    console.log(newTodoList);
    newTodoList[index].complete = true;
    setTodos(newTodoList);
    localStorage.setItem('todo-app',JSON.stringify(newTodoList))

  }

  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    setTodos(newTodoList);
    localStorage.setItem('todo-app',JSON.stringify(newTodoList))
  }

  function handleEditTodoText(index) {
    const Inp = document.querySelector(`.todoInp-${index}`);
    const ElemsToHide = document.querySelectorAll(`.mainElemsInTaskCard-${index}`);
    const EditBtn = document.querySelector(`.EditBtn-${index}`);

    console.log(`todoInp-${index}`)
    
    if(Inp.classList.contains('todoInpBlock')){
      if(Inp.value === ''){
        return;
      }
      Inp.classList.remove('todoInpBlock');
      // EditBtn.classList.add('hideAny');
      
      ElemsToHide.forEach((e)=>{
        e.classList.remove('hideAny');
      })

      EditBtn.innerHTML = 'Edit';


      let newTodoList = [...todos];
      newTodoList[index].input = Inp.value;
      setTodos(newTodoList);
      localStorage.setItem('todo-app',JSON.stringify(newTodoList))

    }
    
    else{
    
      Inp.classList.add('todoInpBlock'); 
      Inp.value = todos[index].input;

      ElemsToHide.forEach((e)=>{ 
        e.classList.add('hideAny');
      })
      
      // EditBtn.classList.remove('hideAny');
      EditBtn.innerHTML = 'Update';
      // ElemsToHide.classList.remove('hideAny');
    }
  }

  useEffect(()=>{
    if(!localStorage || !localStorage.getItem('todo-app')) {return};
    let db = JSON.parse(localStorage.getItem('todo-app'));
    console.log('first load');
    setTodos(db);
  },
  [])

  return (
    <>
      <Header todos={todos} />

      <Tabs ActiveTab={ActiveTab} setActiveTab={setActiveTab} todos={todos} />

      <TodoList
        ActiveTab={ActiveTab}
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
        handleEditTodoText={handleEditTodoText}
      />

      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  );
}

export default App;
