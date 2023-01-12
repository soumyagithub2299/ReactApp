import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';


function App() {
const Nav ={ Home:"Home" ,About:"About" ,Contact:"Contact" ,Team:"Team" }
  return (
    <div className="App">
      <Navbar {...Nav} />
      
    </div>
  );
}

export default App;
