// import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Navigation/navbar';
import FlagCarousel from './Components/flagcarousel';
import BackgroundParticles from './Components/particles';
import './scss/app.scss';
import './Components/background.scss';

function App() {
  return (
    <div style={{height: '100%', position: 'relative'}}>
      <BackgroundParticles/>
      <NavBar />
      <h1 class="text-center">Still Under Construction</h1>

      <FlagCarousel />


    </div>
  );
}

export default App;
