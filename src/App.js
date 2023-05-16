import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import LeftApp from './components/LeftApp';
import RightApp from './components/RightApp';


function App() {
  return (
    <>
    <Navbar/>
    <div className="content">
      <LeftApp/>
      <RightApp/>
    </div>
    </>
  );
}

export default App;
