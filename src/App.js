import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

// Rubric
//     +0.5    Main branch deployed to Netlify X
//     +0.5    Open PR from dev branch with Netlify deploy preview
//     +3      Header and Footer components
//     +4      Main component which imports list of Zodiac signs
//     +4      Uses a .map to pass props to a child component
//     +2      Child component displays sign’s image, name and dates
//     +2      Styled using individual style sheets imported into components
//     +2      At least one component uses a background image using an import
//     +2      Zodiac images are loaded dynamically from the public directory
