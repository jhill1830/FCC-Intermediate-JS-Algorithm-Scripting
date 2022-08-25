/* Map the Debris
Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on Wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) should return [{name: "sputnik", orbitalPeriod: 86400}].

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].

*/

/*
According to Kepler's Third Law, the orbital period T (in seconds) of two point masses orbiting each other in a circular or elliptic orbit is:[2]

T = SQRT [(4 • pi2 • R3(earthRadius+avgAlt)) / (G*Mcentral)]

a is the orbit's semi-major axis (this should be the earthRadius+avgAlt)
μ = GM is the standard gravitational parameter
G is the gravitational constant,
M is the mass of the more massive body.
*/
function orbitalPeriod(arr) {
  //need to change avgAlt to equal the value in the object array
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var piSqr = Math.pow(3.14159265359, 2);
    var newArr = [];

    for (let i = 0; i < arr.length; i++){
      var avgAlt = arr[i].avgAlt;
      var orbRad = Math.pow(earthRadius+avgAlt, 3);
      var orbPerT= Math.sqrt((4*(piSqr)*(orbRad))/(GM));
      //console.log(arr[i].avgAlt);
      newArr[i] = new Object()
      newArr[i].name = arr[i].name;
      newArr[i].orbitalPeriod = Math.round(orbPerT)
    }
    console.log(newArr)
    return newArr;
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])
