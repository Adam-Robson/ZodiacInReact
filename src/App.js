/* eslint-disable no-undef */

import './App.css';

import Header from './components/Layout/Header/Header';
import Main from './components/Main/Main';
// Main is now imported using a background image
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
