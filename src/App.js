import './App.css';
import {AppRouter} from './router/AppRouter';
import {AlertComponent} from './components/AlertComponent';
import {useState} from 'react';

function App() {

  let tasksStorage = JSON.parse(localStorage.getItem('tasks'));

  const [tasks, setTasks] = useState(tasksStorage === null ? [] : tasksStorage);
  const [active, setActive] = useState(false);

  const title = "#todo";

  const sendValue = (e) => {
    e.preventDefault();

    if(e.target.task.value.length < 1) {
      setActive(true);
      clearTimeout();
      setTimeout(() => {
        setActive(false);
      }, 2000);
      return null;
    };

    let task = {
      id: Date.now(),
      nameTask: e.target.task.value,
      active: true,
      completed: false,
    }

    setTasks((tasks) => {
      return [...tasks, task];
    });

    setActive(false);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    e.target.task.value = ""
  }

  return (
    <div className="App">
      <main className="main">
        <AlertComponent active={active}/>
        <h1 className="title">{title}</h1>
        <header className="header">
          <AppRouter basename={process.env.PUBLIC_URL} tasks={tasks} setTasks={setTasks} sendValue={sendValue}/>
        </header>
      </main>
    </div>
  );
}

export default App;
