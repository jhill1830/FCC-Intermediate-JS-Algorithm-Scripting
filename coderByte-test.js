function test(num){

for (var i = 0; i < num; i++){
    setTimeout(function() {alert(i);}, 1000 + i);
}
    // returns 3 three times

}

(function() {
    var a = b = 5;
})();

console.log(b) // 5
