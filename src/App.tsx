import React from 'react';
import { Welcome } from './components/welcome';
import { Jerome } from './components/jerome';
import { Bio } from './components/bio';
import ScrollTop from './components/scroller/Scroller';
import './App.css';

const App = () => {
    return (
        <>
            <Welcome />
            <Jerome />
            <Bio />
            <ScrollTop />
        </>
    )
};

export default App;