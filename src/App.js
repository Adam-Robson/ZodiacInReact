
import './App.css';

import Header from './components/Layout/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Layout/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

// Rubric
//     +0.5    Main branch deployed to Netlify X
//     +0.5    Open PR from dev branch with Netlify deploy preview X
//     +3      Header and Footer components X
//     +4      Main component which imports list of Zodiac signs
//     +4      Uses a .map to pass props to a child component
//     +2      Child component displays sign’s image, name and dates
//     +2      Styled using individual style sheets imported into components
//     +2      At least one component uses a background image using an import
//     +2      Zodiac images are loaded dynamically from the public directory
