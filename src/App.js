
import './App.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header className='bg-warning' >
            <div className="row mx-0">
            
                <div className={`col-md-12`}>
          <h4 className="text-center text-bold ">TODO CRUD APPLICATION</h4>
        </div>
            </div>
           
        
        
      </header>
      <div className="row justify-content-center pt-5">
        <div className='col-md-8'>
        <AddTodoForm />
      <TodoList />
        </div>
      
      </div>
      
    </div>
  );
}

export default App;
