import logo from './logo.svg';
import './App.css';
import ComponentA from './components/componentA';

function App() {
  const contact = {
    name: 'Armando',
    lastname: 'Zamarbide',
    email: 'armandoz@example.com',
    connected: true,
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComponentA contact={contact} />       
      </header>
    </div>
  );
}

export default App;
