
function countDown(n) {
    if (n === 0) return; //if n reaches 0 stop

    console.log(n); // print the current num

    countDown(n-1); // subtract 1 from the n 
}

function countUp(start, end) {
    if (start > end) return;

    console.log(start);

    countUp(start + 1, end);
}

function sumTo(num) {
    if (num === 1) return 1;

    console.log(num + " this is the current number + " + (num - 1))

    return num + sumTo(num - 1);
}

function factorial(n) {
    if (n === 0) return 1;

    console.log(`Calling factorial(${n})`);
    return n * factorial(n - 1);
}

console.log(factorial(3));