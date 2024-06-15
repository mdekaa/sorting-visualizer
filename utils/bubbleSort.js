// utils/bubbleSort.js

const playSound = (frequency) => {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  oscillator.type = 'sine';
  oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
  oscillator.connect(audioContext.destination);
  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.1); // Play sound for 0.1 seconds
};

export const bubbleSort = async (array, setArray, speed, sorting) => {
  const arr = array.slice();
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (!sorting.current) {
        return; // Exit if sorting is stopped
      }
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        setArray([...arr]);
        playSound(arr[j] * 10); // Play sound based on the value of the element
        await new Promise((resolve) => setTimeout(resolve, speed));
      }
    }
  }
  return arr;
};
