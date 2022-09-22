import React from 'react';
import './App.scss';
import BodyComponent from './features/bodyComponent/bodyComponent';
import Header from './features/headerComponent/headerComponent.js';

function App() {
    return (
        <div className="App">
            <Header />
            <BodyComponent/>
        </div>
    );
}

export default App;
