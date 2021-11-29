import './style.css';
import './App.css';
import moonImage from './moon.jpg';

function App() {
  return (
    <div className="App">
      <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
        <h1 className="title red">JSX checkpoint</h1>
        <br />
        <img src={moonImage} alt="this is the moon" width="400"/>
        <br />
        
        <img src="earth.jpg" alt="this is the earth" width="400" ></img>
      </div>
    </div>
  );
}

export default App;