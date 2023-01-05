import './App.css';
import TypingAnim from './Components/MainPage/TypingAnim';
import CodeInput from './Components/MainPage/CodeInput';

function App() {
  return (
    <div className="App">
      <div className="App-Top">
      </div>
      <header className="App-header">
        <CodeInput />
        <TypingAnim/>
      </header>
    </div>
  );
}

export default App;
