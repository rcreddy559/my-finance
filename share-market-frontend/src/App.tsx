import React from 'react';
import './App.css';
import { MarketProvider } from './components/hooks/MarketProvider';
import { Dashboard } from './components/market/Dashboard';
import { ExpatrioHeader } from './components/market/pages/header/MarketHeader';

function App() {
  return (
      <header>
        <MarketProvider>
          <ExpatrioHeader/>
          <Dashboard/>
        </MarketProvider>
      </header>
  );
}

export default App;
