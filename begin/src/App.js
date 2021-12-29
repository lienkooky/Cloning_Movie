import { useState } from 'react';

function App() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => {
    setToDo(event.target.value);
  };

  const onSubmit = (event) => {
    if (toDo === '') {
      return;
    }
    event.preventDefault();
    setToDos((current) => [toDo, ...current]);
    setToDo((prev) => (prev = ''));
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add to Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((el, i) => {
          return <li key={i}>{el}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
