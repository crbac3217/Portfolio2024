// App.jsx
import React from 'react';
import './css/App.css';
import MainSection from './components/mainSection';
import Intro from './components/intro';
import Works from './components/works';
import Contact from './components/contact';

class App extends React.Component {
  render() {
    return (
      <div className="App scroll-container">
        <MainSection />
        <Intro />
        <Works />
        <Contact />
        {/* ... other components if any ... */}
      </div>
    );
  }
}

export default App;
