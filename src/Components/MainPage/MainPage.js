import TypingAnim from './TypingAnim';
import CodeInput from './CodeInput';
export default function MainPage() {
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