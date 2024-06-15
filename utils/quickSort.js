// utils/quickSort.js

const playSound = (frequency) => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.1); // Play sound for 0.1 seconds
  };
  
  const partition = async (arr, low, high, setArray, speed, sorting) => {
    const pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
      if (!sorting.current) {
        return -1; // Sorting stopped
      }
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        setArray([...arr]);
        playSound(arr[j] * 10); // Play sound based on the value of the element
        await new Promise((resolve) => setTimeout(resolve, speed));
      }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    setArray([...arr]);
    return i + 1;
  };
  
  export const quickSort = async (arr, setArray, low, high, speed, sorting) => {
    if (low < high) {
      const pi = await partition(arr, low, high, setArray, speed, sorting);
      if (pi === -1) return;
      await quickSort(arr, setArray, low, pi - 1, speed, sorting);
      await quickSort(arr, setArray, pi + 1, high, speed, sorting);
    }
    return arr;
  };
  