//Pig Latin
/*
- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add 'ay' to it.

- If a word begins with a vowel, just add 'way' at the end.
*/
function translatePigLatin(str) {
    let vowelReg = /^[a,e,o,i,u]/;
    let consReg = /^[b,c,d,f,g,h,j,k,l,m,n,p,q,r,s,t,v,w,x,y,z]+/
    let test = vowelReg.test(str);
    let pigLatin = ''
    let strMatch = []

    if (test == true){
      pigLatin = str + 'way';

    } else {
      strMatch = str.match(consReg);
      pigLatin = str.replace(consReg, '') + strMatch.toString() + 'ay';
    }
    return pigLatin;

}

translatePigLatin("consonant");
