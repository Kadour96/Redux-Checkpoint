import ListTodos from "./components/ListTodos";
import "./App.css"
import AddTodos from "./components/AddTodos";
function App() {
  return (
    <div className="App" >
 <h1>Todo App</h1>
 <AddTodos/>
 <ListTodos/>

    </div>
  );
}

export default App;
