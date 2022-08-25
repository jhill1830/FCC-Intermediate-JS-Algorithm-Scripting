/*  DNA Pairing
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

*/

function pairElement(str) {
    let arr = [];
    let pairA = ["A","T"];
    let pairT = ["T","A"];
    let pairC = ["C","G"];
    let pairG = ["G","C"];

    for (let i = 0; i < str.length; i++){
        if (str[i] == 'G'){arr.push(pairG)}
        else if (str[i] == 'C'){arr.push(pairC)}
        else if (str[i] == 'A'){arr.push(pairA)}
        else if (str[i] == 'T'){arr.push(pairT)}
    }
//    console.log(str.length)
    return str;
}

pairElement("GCG");

/*
pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].

pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].

pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
*/
