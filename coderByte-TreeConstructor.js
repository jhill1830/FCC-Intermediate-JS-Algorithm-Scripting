/*
Tree Constructor
Have the function TreeConstructor(strArr) take the array of strings stored in strArr, which will contain pairs of integers in the following format: (i1,i2), where i1 represents a child node in a tree and the second integer i2 signifies that it is the parent of i1. For example: if strArr is ["(1,2)", "(2,4)", "(7,2)"], then this forms the following tree:

                                     4
                                    / 
                                   2     
                                  / \    
                                 1   7

which you can see forms a proper binary tree. Your program should, in this case, return the string true because a valid binary tree can be formed. If a proper binary tree cannot be formed with the integer pairs, then return the string false. All of the integers within the tree will be unique, which means there can only be one node in the tree with the given integer value.
Examples
Input: ["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]
Output: true
Input: ["(1,2)", "(3,2)", "(2,12)", "(5,2)"]
Output: false

*/
function TreeConstructor(strArr) { 

    // code goes here  
  
    //binary tree
      // only 1 root
      // only one path from root to any node
      // maximum 2 children from each node
  
    // val1 = child, val2 = parent
  
    // establish that each parent only has at most two children
      // iterate through array
      // get just the values of strArr
        // use regex and split based on ','
        // replace brackets with ""
      //create parent object that gets children pushed to it.  Checks max 2 children
        //if > 2 children in parent object return false
      //create child object that gets parent value pushed into it.  Checks for only one path
        // if > 1 parent in child object return false

    let parentObj  = {};
    let childObj = {};

    for (let i = 0; i < strArr.length; i++) {        
        let childParent = strArr[i].replace(/[()]/g, "").split(',');
        let parent = childParent[1];
  
        if (childObj[childParent[0]]) {
          childObj[childParent[0]].push(childParent[1]);
        } else {
          childObj[childParent[0]] = [childParent[1]];        
        };
        
        if (childObj[childParent[0]].length > 1) {
          //console.log(false);
          return false;
        };
        
        
        if (parentObj[childParent[1]]) {
          parentObj[parent].push(childParent[0]);
        } else {
          parentObj[childParent[1]] = [childParent[0]];        
        }

        if (parentObj[childParent[1]].length > 2) {
          //console.log(false);
          return false;
        };
      };
    
    //console.log(true);
    return true; 
  }
     
  // keep this function call here 
  TreeConstructor(["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"])