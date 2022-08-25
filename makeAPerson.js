/* Make a Person
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.
*/


var Person = function(firstAndLast) {
  // Only change code below this line

// split the first and last names based on the space
    let arr = firstAndLast.split(" ");
    self.firstName = arr[0];
    self.lastName = arr[1];
    self.fullName = arr[0] + " " + arr[1];
//use array to set the first as index 0 and last as index 1
//    let self.FirstAndLast = firstAndLast;
//fullName should just be set as firstAndLast

    // Complete the method below and implement the others similarly
    this.getFullName = function() {
        return this.getFirstName() + " " + this.getLastName();
    };
    this.getFirstName = function() {
        return firstName;
    };
    this.getLastName = function() {
        return lastName;
    };
    this.setFirstName = function(first) {
        self.firstName = first;
        return firstName;
    };
    this.setLastName = function(last) {
        lastName = last;
        return lastName;
    };
    this.setFullName = function(firstAndLast) {
        let setArr = firstAndLast.split(" ");
        fullName = this.setFirstName(setArr[0]) + " " + this.setLastName(setArr[1])
        return fullName;
    };
};


var bob = new Person('Bob Ross');
bob.getFullName();
bob.setFirstName('test');
console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.getFullName());
