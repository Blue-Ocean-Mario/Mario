import logo from './logo.svg';
import axios from 'axios';
import './App.css';

const serverURL = 'http://localhost:3001'

function App() {
  axios.get(serverURL).then((res) => {console.log(res)});

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world.
        </p>
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
