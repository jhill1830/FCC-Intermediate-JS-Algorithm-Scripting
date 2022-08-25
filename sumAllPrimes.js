/*
Sum All Primes
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

sumPrimes(10) should return a number.
sumPrimes(10) should return 17.
sumPrimes(977) should return 73156.

This might be faster using memoisation?

Failstates(per se)
    If num == 1

Find the prime numbers
    iterate through num
    How to find if it has more than 2 divisors


Sum all the prime numbers


*/

function sumPrimes(num) {
    if (num == 1) {
        return 0;
    }

    let numArr = []
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= num; j++)  //finds the primes by iterating all the numbers and dividing all the rest from num. The numbers that show up only twice are prime numbers.
            if (i%j == 0){
                numArr.push(i)
            }
        }
    
    // Below filters out only the numbers that show up twice
    let primes = numArr.filter(n => {
        return numArr.filter(n1 => {
            return n1 == n;
        }).length == 2;
    })
    console.log(primes)

    let sum = 0;
    for (let x = 0; x < primes.length; x++) {
        sum += primes[x]
    }
    console.log(sum/2);
    return sum/2;
}
  
sumPrimes(10);