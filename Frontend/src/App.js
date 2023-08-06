// import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/Navigation/navbar';
import FlagCarousel from './Components/FlagCard/flagcarousel';
import BackgroundParticles from './Components/BGParticles/particles';
import './scss/app.scss';

function App() {
  return (
    <div style={{ height: '100%', position: 'relative' }}>
      <BackgroundParticles />
      <NavBar />
      <h1 className="text-center">Still Under Construction</h1>
      <div class="container-fluid justify-content-center">
        <FlagCarousel />
        
      </div>
    </div>
  );
}

export default App;
