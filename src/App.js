import './App.css';
import MainPage from './Components/MainPage/MainPage';
import ResumePage from './Components/Resume Page/ResumePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}></Route>
        <Route path="/resume" element={<ResumePage/>}></Route>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
