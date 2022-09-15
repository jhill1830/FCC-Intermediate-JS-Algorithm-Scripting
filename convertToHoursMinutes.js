// 126 = 2:6
// if < 60, return num
// need to handle if time is divisable by 60

function StringChall(num){

    let hours = 0;
    let minutes = 0;

    if (num < 60) {
        console.log(hours.toString() + ":" + num.toString())
        return hours.toString() + ":" + num.toString;
    }
    
    if (num > 60) {
        minutes = num;
        while (minutes >= 60) {
            hours += 1;
            minutes = minutes - 60;
        }
        
        console.log(hours.toString() + ":" + minutes.toString())
        return hours.toString() + ":" + minutes.toString;
    }
}

StringChall(126)