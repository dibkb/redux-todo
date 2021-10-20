import Input from "./components/Input";
import Stats from "./components/Stats";
import TaskList from "./components/TaskList";
import { useSelector } from "react-redux";
import "./App.css";
function App() {
  const todos = useSelector((state) => state.todo);
  return (
    <div className="container">
      <Input />
      <Stats />
      {JSON.stringify(todos)}
      <TaskList />
    </div>
  );
}

export default App;
