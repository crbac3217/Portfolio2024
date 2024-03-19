import React from 'react';
import './css/App.css';
import WelcomeSection from './components/WelcomeSection';
import IntroSection from './components/IntroSection';
import WorksSection from './components/WorksSection';
import ContactsSection from './components/ContactsSection';

const App = () => {
    return (
        <div className="app">
            <WelcomeSection />
            <IntroSection />
            <WorksSection />
            <ContactsSection />
        </div>
    );
};

export default App;
