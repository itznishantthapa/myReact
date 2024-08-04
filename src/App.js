
import './App.css';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';

function App() {
  return (
    <>
      <Navbar navName='NavBar' />
      <div className="container">
        <TextFrom heading="Analyze yout text" />
      </div>
    </>
  );
}

export default App;
