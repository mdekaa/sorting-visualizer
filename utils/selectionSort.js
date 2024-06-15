

const selectionSort = async (arr, setArray, speed, sorting) => {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      if (!sorting.current) {
        return; 
      }
      let minIdx = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIdx]) {
          minIdx = j;
        }
      }
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
      setArray([...arr]);
      await new Promise((resolve) => setTimeout(resolve, speed));
    }
    return arr;
  };
  
  export default selectionSort;
  