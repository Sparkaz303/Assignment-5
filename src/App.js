import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1>CS 230L</h1>
      <h2>Section - XX</h2>
      <p>WVU ID: XXXXXXX</p>
      <p>Hi I am X</p>
      <Card/>
    </div>
  );
}

export default App;
