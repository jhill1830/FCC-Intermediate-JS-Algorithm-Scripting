/* Sorted Union
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].

uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].

uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].

*/

function uniteUnique(...arr) {
    //push first array into its own array
    //loop through second array and loop through with indexOf() and if the result is '-1'. return that number.
    const newArr = arr[0];

    for (let i = 0; i < arr.length; i++){
      for (let j = 0; j < arr[i].length; j++){
        if (newArr.indexOf(arr[i][j]) == -1){
//            console.log(arr[i][j]);
            newArr.push(arr[i][j])
        }
      }
    }

    console.log(newArr)
  return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
