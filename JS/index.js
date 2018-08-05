console.log("Project Euler");

// Problem 1
const euler1 = (num) => {
	// To add up the numbers that pass the following condition.
	let sum = 0;
	// Iterate up to number passed as argument.
	for (let i = 1; i < num; i ++) {
		// Check if Number is a multiple of 3 or 5.
		if (i % 3 === 0 || i % 5 === 0) {
			// If it is, add it to sum variable.
			sum += i;
		}
	};
	// Return the sum of all number that are multiples of 3 or 5.
	return sum;
};

console.log(euler1(1000)); //233168

// Problem 2

const fib = (arr) => {

	// Starting values for Fibonacci sequence
	let seeds = [1, 2],
		evenSum = 0;



};