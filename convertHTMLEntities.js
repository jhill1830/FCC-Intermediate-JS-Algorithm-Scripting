/*

Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

Tests 

convertHTML("Dolce & Gabbana") should return the string Dolce &amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos") should return the string Hamburgers &lt; Pizza &lt; Tacos.
convertHTML("Sixty > twelve") should return the string Sixty &gt; twelve.
convertHTML('Stuff in "quotation marks"') should return the string Stuff in &quot;quotation marks&quot;.
convertHTML("Schindler's List") should return the string Schindler&apos;s List.
convertHTML("<>") should return the string &lt;&gt;.
convertHTML("abc") should return the string abc.


Encode
& == &amp;
< == &lt;
> == &gt;
" == &quot;
' == &apos;

regex for each symbol as above
iterate through string
find symbol
Maybe use key:value array
encode each symbol as above
replace original with encode
return as new string

*/

function convertHTML(str) {
    const dict = [];
    dict['&'] = '&amp;';
    dict['<'] = '&lt;';
    dict['>'] = '&gt;';
    dict['"'] = '&quot;';
    dict["'"] = '&apos;';

    let conv = str;
    for (let i = 0; i <= conv.length; i++) {
        if (dict[conv[i]] != undefined) {
            console.log(dict[conv[i]]);
            console.log(conv[i]);
            conv = conv.replace(conv[i], dict[conv[i]].toString());
        };
    };
    console.log(conv);
    return conv;
  };
  
convertHTML("Hamburgers < Pizza < Tacos");