
"use client"
import { useState, useEffect, useRef } from 'react';
import { bubbleSort } from '../utils/bubbleSort';
import { quickSort } from '../utils/quickSort';
import { mergeSort } from '../utils/mergeSort';
import insertionSort from '../utils/insertionSort';
import selectionSort from '../utils/selectionSort';

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [speed, setSpeed] = useState(100);
  const [numElements, setNumElements] = useState(50);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('bubbleSort');
  const [showDescription, setShowDescription] = useState(false);
  const sorting = useRef(false);

  useEffect(() => {
    resetArray();
  }, [numElements]);

  const resetArray = () => {
    const arr = Array.from({ length: numElements }, () =>
      Math.floor(Math.random() * 100)
    );
    setArray(arr);
  };

  const handleSort = async () => {
    sorting.current = true;
    setShowDescription(false); // Hide description when sorting starts
    switch (selectedAlgorithm) {
      case 'bubbleSort':
        await bubbleSort(array, setArray, speed, sorting);
        break;
      case 'quickSort':
        await quickSort(array, setArray, 0, array.length - 1, speed, sorting);
        break;
      case 'mergeSort':
        await mergeSort(array, setArray, 0, array.length - 1, speed, sorting);
        break;
      case 'insertionSort':
        await insertionSort(array, setArray, speed, sorting);
        break;
      case 'selectionSort':
        await selectionSort(array, setArray, speed, sorting);
        break;
      default:
        break;
    }
    sorting.current = false;
  };

  const handleStop = () => {
    sorting.current = false;
  };

  const handleAlgorithmChange = (algorithm) => {
    setSelectedAlgorithm(algorithm);
    setShowDescription(true); // Show description when algorithm changes
  };

  const algorithmDescriptions = {
    bubbleSort: {
      title: 'Bubble Sort',
      description: `Bubble Sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted.`,
      complexity: 'Time Complexity: O(n^2)',
    },
    quickSort: {
      title: 'Quick Sort',
      description: `Quick Sort is a divide-and-conquer algorithm. It selects a 'pivot' element and partitions the other elements into two sub-arrays according to whether they are less than or greater than the pivot. It then recursively sorts the sub-arrays.`,
      complexity: 'Average Time Complexity: O(n log n)',
    },
    mergeSort: {
      title: 'Merge Sort',
      description: `Merge Sort divides the array into two halves, recursively sorts each half, and then merges the two sorted halves into a single sorted array. It uses the 'divide and conquer' strategy.`,
      complexity: 'Time Complexity: O(n log n)',
    },
    insertionSort: {
      title: 'Insertion Sort',
      description: `Insertion Sort builds the final sorted array one item at a time. It iterates through the input elements and grows the sorted array behind it, moving elements greater than the current value one position to the right.`,
      complexity: 'Time Complexity: O(n^2)',
    },
    selectionSort: {
      title: 'Selection Sort',
      description: `Selection Sort sorts an array by repeatedly finding the minimum element from the unsorted part of the array and swapping it with the first unsorted element. It continues until the entire array is sorted.`,
      complexity: 'Time Complexity: O(n^2)',
    },
  };

 


  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="mt-4 mb-8">
        
        <label className="mr-2 font-bold">Select Sorting Algorithm:</label>
        <select
          
          value={selectedAlgorithm}
          onChange={(e) => handleAlgorithmChange(e.target.value)}
          className="border px-2 py-1 rounded bg-black text-white"
        >
          <option className='bg-black text-white' value="bubbleSort">Bubble Sort</option>
          <option className='bg-black text-white' value="quickSort">Quick Sort</option>
          <option className='bg-black text-white' value="mergeSort">Merge Sort</option>
          <option className='bg-black text-white' value="insertionSort">Insertion Sort</option>
          <option className='bg-black text-white' value="selectionSort">Selection Sort</option>
        </select>
      </div>
      
      <div className="flex justify-center mb-4">
        {array.map((value, idx) => (
          <div
            key={idx}
            style={{ height: `${value * 3}px` }}
            className="bg-blue-500 w-2 mx-1"
          ></div>
        ))}
      </div>
      {showDescription && (
        <div className="bg-gray-800 p-4 mb-4 rounded w-96">
          <h2 className="text-xl font-bold mb-2">{algorithmDescriptions[selectedAlgorithm].title}</h2>
          <p className="mb-2">{algorithmDescriptions[selectedAlgorithm].description}</p>
          <p>{algorithmDescriptions[selectedAlgorithm].complexity}</p>
        </div>
      )}
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
        <label className="mr-2 ">Number of Elements:</label>
        <input

          type="number"
          value={numElements}
          onChange={(e) => setNumElements(Number(e.target.value))}
          className="border px-2 py-1 rounded  bg-black text-white"
        />
      </div>
      <div className="mt-4">
        <label className="mr-2">Sorting Speed (ms):</label>
        <input
          type="number"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          className="border px-2 py-1 rounded  bg-black text-white"
        />
      </div>
    </div>
  );
};

export default SortingVisualizer;
