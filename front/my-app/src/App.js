
import './App.css';
import logo from './imagenes/logo1.png';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
      <div className="logo">
                <img src={logo} alt="logo" width="200" />
            </div>
      </header>
      <body className="app-body">
        <h1>Bienvenido al sistema de ithreex</h1>
        <br></br>
        <div className="botones">
        <ul>
        <li><button className="boton">Agregar cv</button></li>
        <li><button className="boton">Modificar cv</button></li>
        <li><button className="boton">Vacaciones</button></li>
        </ul>
        </div>
      </body>
      <footer>
        <h4>
          este es el footer
        </h4>
      </footer>
    </div>
  );
}

export default App;
