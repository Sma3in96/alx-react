import './App.css';
import logo from './holberton-logo.jpg';
import { getFullYear, getFooterCopy } from './utils';


function App() {
  return (
    <div>
    <div class="App-header">
      <img src={logo} alt="logo"></img>
      <h1>School dashboard</h1>
    </div>
    <div class="App-body">
      <p>Login to access the full dashboard</p>
    </div>
    <div class="App-footer">
      <p>{getFooterCopy(true)}</p>
    </div>
    </div>
  );
}

export default App;
