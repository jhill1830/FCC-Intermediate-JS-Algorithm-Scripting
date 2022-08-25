function spinalCase(str) {
  let test = [];//str.toLowerCase();
  //establish regex based on whitespaces and capitals
  let regex = /[A-Z]*[a-z]+/g; //i=case insensitive, g=global

  //turn the string into an array based on the regex values
  let x = str.match(regex);

  //return the array as a concatenated string, but with '-' between each array value
  test = x[0]
  for(let i = 1; i < x.length; i++) {
    test += '-' + x[i];
  }

//if statement to remove any empty array  items AKA ['']
  console.log(x)
  console.log(test.toLowerCase());
  return test.toLowerCase();

}

spinalCase("This Is Spinal Tap");
spinalCase("thisIsSpinalTap");
spinalCase("The_Andy_Griffith_Show");
spinalCase("Teletubbies say Eh-oh");
spinalCase("AllThe-small Things");
