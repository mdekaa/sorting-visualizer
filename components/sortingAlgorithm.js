'use client';

import { useState, useEffect, useRef } from 'react';
import { bubbleSort } from '../utils/sortAlgorithm';

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [speed, setSpeed] = useState(100);
  const [numElements, setNumElements] = useState(50);
  const sorting = useRef(false);

  useEffect(() => {
    resetArray();
  }, [numElements]);

  const resetArray = () => {
    const arr = Array.from({ length: numElements }, () => Math.floor(Math.random() * 100));
    setArray(arr);
  };

  const handleSort = async () => {
    sorting.current = true;
    await bubbleSort(array, setArray, speed, sorting);
    sorting.current = false;
  };

  const handleStop = () => {
    sorting.current = false;
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center mb-4">
        {array.map((value, idx) => (
          <div
            key={idx}
            style={{ height: `${value * 3}px` }}
            className="bg-blue-500 w-2 mx-1"
          ></div>
        ))}
      </div>
      <div className="flex space-x-4">
        <button onClick={resetArray} className="bg-gray-500 text-white px-4 py-2 rounded">
          Reset Array
        </button>
        <button onClick={handleSort} className="bg-green-500 text-white px-4 py-2 rounded">
          Start Sorting
        </button>
        <button onClick={handleStop} className="bg-red-500 text-white px-4 py-2 rounded">
          Stop Sorting
        </button>
      </div>
      <div className="mt-4">
        <label className="mr-2">Number of Elements:</label>
        <input
          type="number"
          value={numElements}
          onChange={(e) => setNumElements(Number(e.target.value))}
          className="border px-2 py-1 rounded"
        />
      </div>
      <div className="mt-4">
        <label className="mr-2">Sorting Speed (ms):</label>
        <input
          type="number"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          className="border px-2 py-1 rounded"
        />
      </div>
    </div>
  );
};

export default SortingVisualizer;
