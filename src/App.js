import React from 'react';
import Header from './components/Header';
import Buttons from './Button';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

export default function App() {
    return (
        <div>
            <Header />
            <Buttons />
            <MainContent />
            <Footer />
        </div>
    )
}