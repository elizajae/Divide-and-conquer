function findFirstOccurrence(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let firstOccurrence = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (arr[mid] === num) {
        firstOccurrence = mid;
        right = mid - 1; 
      } else if (arr[mid] < num) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return firstOccurrence;
  }

  function findLastOccurrence(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let lastOccurrence = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (arr[mid] === num) {
        lastOccurrence = mid;
        left = mid + 1;
      } else if (arr[mid] < num) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return lastOccurrence;
  }

function sortedFrequency(arr, num) {
    const firstIdx = findFirstOccurrence(arr, num);
    const lastIdx = findLastOccurrence(arr, num);
  
    if (firstIdx === -1) {
      return -1;
    }
    return lastIdx - firstIdx + 1;
  }
module.exports = sortedFrequency