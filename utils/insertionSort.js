

const insertionSort = async (arr, setArray, speed, sorting) => {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
      if (!sorting.current) {
        return; 
      }
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, speed));
      }
      arr[j + 1] = key;
      setArray([...arr]);
      await new Promise((resolve) => setTimeout(resolve, speed));
    }
    return arr;
  };
  
  export default insertionSort;
  