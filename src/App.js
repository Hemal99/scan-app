import logo from './logo.svg';
import './App.css';
import scanImg from "../src/images/scanner.png"

function App() {
  return (
    <div className="App">
      <div>

        <h1>Your Web App</h1>
      </div>

      <div>
        <a href='https://app.framealive.com/scanner'>
          <img src={scanImg} alt='' />

        </a>


      </div>


    </div>
  );
}

export default App;
