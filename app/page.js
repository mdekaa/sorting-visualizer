// page.js

import React from 'react';
import SortingVisualizer from '@/components/sortingAlgorithm';
import './globals.css'; // Import global styles for dark mode

const Home = () => {
  return (
    <main className="dark-mode flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Sorting Visualizer</h1>
      <SortingVisualizer />
    </main>
  );
}

export default Home;
