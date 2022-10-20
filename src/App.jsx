import './App.css';
import Header from './components/Header';
import React, { useState } from 'react';

const lists = [
  {
    id: 1,
    content: 'HTML is easy',
  },
  {
    id: 2,
    content: 'Browser can execute',
  },
  {
    id: 3,
    content: 'GET and POST ',
  }
]

function App() {





  const [text, setText] = useState("")
  const [todo, setTodo] = useState(lists)


  const handleChange = event => {
    setText(event.target.value);

    console.log('value is:', event.target.value);
  };



  const add = (event) => {
    event.preventDefault()
    const noteObject = {
      content: text,
      id: todo.length + 1


    }

    setTodo(currentTodos => currentTodos.concat(noteObject))
    setText('')

    console.log(todo)
  }

  const heading = "To-Do List"

  console.log({ todo });

  return (
    <div className="App">

      <div className="container">

        <Header heading={heading} />


        <form onSubmit={add} className="input">

          <input type="text"
            value={text}
            placeholder='write here'
            onChange={handleChange}
          />
          <button type='submit'>Add</button>
        </form>

        {todo.map(note => <li className='li' key={note.id}>{note.content}</li>)}


      </div>

    </div>
  );
}

export default App;
