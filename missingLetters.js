/*

Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Tests
fearNotLetter("abce") should return the string d.
fearNotLetter("abcdefghjklmno") should return the string i.
fearNotLetter("stvwx") should return the string u.
fearNotLetter("bcdf") should return the string e.
fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.

string of alphabet
iterate through alphabet and compare with str
find matching index values
assign first and last values
find the value that's not in the sequence between those values



*/

function fearNotLetter(str) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const matchingIndex = [];
    const missing = [];

    for (let i = 0; i < alphabet.length; i++) {     
        for (let iStr = 0; iStr < str.length; iStr++){  // compare string input with alphabet
            if (str[iStr] == alphabet[i]){              // find matching index values
                matchingIndex.push(i)
            };
        };
    }
    console.log(matchingIndex)
    for (let iSeq = matchingIndex[0]; iSeq <= matchingIndex[matchingIndex.length - 1]; iSeq++) {       // iterate through from first to last index values of matching index's
        if (matchingIndex.indexOf(iSeq) === -1) {        // find index of missing letter in matching values
            missing.push(iSeq);
            console.log(missing)
            return alphabet[missing]                    // If taken out of loop, potentially can find all missing letters
        };
    };
    
    return undefined;
  }
  
  fearNotLetter("cefh");

  //