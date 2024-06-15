

const merge = async (arr, l, m, r, setArray, speed, sorting) => {
    const n1 = m - l + 1;
    const n2 = r - m;
  
    const leftArr = arr.slice(l, m + 1);
    const rightArr = arr.slice(m + 1, r + 1);
  
    let i = 0, j = 0, k = l;
    while (i < n1 && j < n2) {
      if (!sorting.current) {
        return; // Sorting stopped
      }
      if (leftArr[i] <= rightArr[j]) {
        arr[k] = leftArr[i];
        i++;
      } else {
        arr[k] = rightArr[j];
        j++;
      }
      setArray([...arr]);
      await new Promise((resolve) => setTimeout(resolve, speed));
      k++;
    }
  
    while (i < n1) {
      arr[k] = leftArr[i];
      i++;
      k++;
      setArray([...arr]);
      await new Promise((resolve) => setTimeout(resolve, speed));
    }
  
    while (j < n2) {
      arr[k] = rightArr[j];
      j++;
      k++;
      setArray([...arr]);
      await new Promise((resolve) => setTimeout(resolve, speed));
    }
  };
  
  export const mergeSort = async (arr, setArray, l, r, speed, sorting) => {
    if (l < r) {
      const m = Math.floor((l + r) / 2);
      await mergeSort(arr, setArray, l, m, speed, sorting);
      await mergeSort(arr, setArray, m + 1, r, speed, sorting);
      await merge(arr, l, m, r, setArray, speed, sorting);
    }
    return arr;
  };
  