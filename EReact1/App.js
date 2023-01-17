import logo from './logo.svg';
import './App.css';
import Contacto from './component/pure/componenteA';
import EstadoContacto from './component/pure/componenteB';
//import ComponenteB from './component/pure/componenteB';
//import Contacto from './component/pure/Contacto';
//import Greeting from './components/pure/greeting'
// import GreetingF from './components/pure/greetingF';
// import TaskListComponent from './components/container/task.list';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        {/* la importación de greeting */}
        {/* <Greeting name="Cristian"></Greeting>  */}
        {/* Componente de ejemplo fuuncional */}
         {/* <GreetingF name="David"></GreetingF>  */}
        {/* Componente de listado de taresas */}
        {/* <TaskListComponent></TaskListComponent> */}
        {/* -------------------------------------- */}


        <Contacto nombre="Cristian" apellido="Arias" email="ejemplo@asdg8exa.com" conectado={true} />
        <EstadoContacto contacto={Contacto} />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
     
  
      </header>
  
    </div>
   
 
  );
}

export default App;
