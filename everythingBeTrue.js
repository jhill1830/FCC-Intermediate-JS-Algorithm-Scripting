/*Everything Be True
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or [] notation.
*/

function truthCheck(collection, pre) {
//iterate through collection
    for (let i = 0; i < collection.length; i++) {
//test if the value of argument 'pre' exists within each object of the collection
        if (collection[i].hasOwnProperty(pre) != true){
            return false;
//test if value of 'pre' is false
        } else if (Number.isNaN(collection[i][pre]) || collection[0][pre] == false || collection[i][pre] == null ||collection[i][pre] == 0) {
            return false;
        };
    };
    return true
}
//evaluates to false(false, "", undefined, null, NaN, 0)
truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age");
