// https://www.hackerrank.com/challenges/js10-throw/problem

/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    let message;
    try {
      if(a > 0) { return 'YES'}
      if(a < 0) { throw message = 'Negative Error'}
      if(a == 0) { throw message = 'Zero Error'}
    } catch (err){
      return message
    }
}