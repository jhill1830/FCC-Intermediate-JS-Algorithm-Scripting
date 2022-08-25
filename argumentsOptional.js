/* Arguments Optional
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.


addTogether(2, 3) should return 5.

Passed
addTogether(23, 30) should return 53.

addTogether(5)(7) should return 12.

addTogether("http://bit.ly/IqT6zt") should return undefined.

addTogether(2, "3") should return undefined.

addTogether(2)([3]) should return undefined.

*/

function addTogether() {
  console.log(arguments)
    for (let i = 0; i < arguments.length; i++){
        if (Number.isInteger(arguments[i]) == false){
            return undefined;
        }
    }
//  return nums.reduce(sum);
}

function sum(add, all){
  return add + all;
}
addTogether(2)(7);
