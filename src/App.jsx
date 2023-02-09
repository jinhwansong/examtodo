import { useState } from 'react';
import './App.css';

function App() {
  const [todolist, setTodolist] = useState([
    { id: 0, text: "react를 배워봅시다." },
  ]);
  const [text,setText] = useState('')
  const textHandler = (event) => {
    setText(event.target.value);
  };
  const addBtn=()=>{
    const a = {
      id: todolist.length + 1,
      text: text,
    };
    setTodolist([...todolist,a]);
  }
  return (
    <div className="inner">
      <div className="top">
        <input value={text} onChange={textHandler} />
        <button onClick={addBtn}>추가하기</button>
      </div>
      <h1>TodoList</h1>
      <ul>
        {todolist.map(function(item){
          return (<li key={item.id}>{item.text}</li>);
        })}
      </ul>
    </div>
  );
}

export default App;
