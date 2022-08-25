/*Binary Agents
Return an English translated sentence of the passed binary string.

The binary string will be space separated.

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") should return the string Aren't bonfires fun!?

binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") should return the string I love FreeCodeCamp!

*/

function binaryAgent(str) {
    var binaToAsc = [];
    var char = ''
    var regex = /\s/ig;
    var binArr = [];
    var bit = [];
    var sum = 0;
    //split binary sequence based on space
    binArr = str.split(regex);

    //iterate through binary arr and convert each 8 bit sequence to number
    //convert binary to ascii value
    for (let i = 0; i < binArr.length; i++) {
        bit[0] = binArr[i][0] * 128;
        bit[1] = binArr[i][1] * 64;
        bit[2] = binArr[i][2] * 32;
        bit[3] = binArr[i][3] * 16;
        bit[4] = binArr[i][4] * 8;
        bit[5] = binArr[i][5] * 4;
        bit[6] = binArr[i][6] * 2;
        bit[7] = binArr[i][7] * 1;

        sum = bit.reduce(func);
        binaToAsc.push(sum);
    }
    //convert ascii to character
    char = String.fromCharCode(...binaToAsc);
    return char;
}

function func(add, all){
  return add + all;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
