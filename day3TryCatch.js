// https://www.hackerrank.com/challenges/js10-try-catch-and-finally/problem

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
	let swt = 0;
	let arranjo;

	try {
		arranjo = s.split('');
		arranjo = arranjo.reverse();
		arranjo = arranjo.join('');
	} 
	catch (err) {
		console.log(err.message);
		swt = 1;
	} 
	finally {
		if (swt == 1) {
			console.log(s);
		} 
		else {
			console.log(arranjo);
		}
	}
}