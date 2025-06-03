import { useState } from "react";

export function TodoInput(props) {
  const {handleAddTodo} = props;
  const [inputValue,setInputValue] = useState('');

  // console.log(inputValue)
  
  return (
    <div className="input-container">
      <input value={inputValue}
       onChange={(e) => {setInputValue(e.target.value)}}
       onKeyDown={(e)=>{
        e.key === 'Enter' && handleAddTodo(inputValue) & setInputValue('');
        
      }}
       type="text" placeholder="Add Task" />
      
      <button onClick={() => {
        if (inputValue){
          handleAddTodo(inputValue);
          setInputValue('');
        }
      }}>
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}
