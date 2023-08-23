import SteedPic from './Steed_and_horse.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Choice Colt Starting</p>
        <img src={SteedPic} className="App-logo" alt="logo" />
        <p>
          Hi! I'm Stephen and I love horses!
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/stephen-burggraaf-867993226/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn About Me
        </a>
      </header>
    </div>
  );
}

export default App;
