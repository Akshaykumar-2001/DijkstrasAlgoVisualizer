import React from 'react';
import './App.css';
import ShortestPathfindingVisualizer from './ShortestPathfindingVisualizer/ShortestPathfindingVisualizer'
import Footer from './ShortestPathfindingVisualizer/Footer';

function App() {
  return (
    <div className="App">
      <ShortestPathfindingVisualizer></ShortestPathfindingVisualizer>
      <Footer></Footer>
    </div>
  );
}

export default App;