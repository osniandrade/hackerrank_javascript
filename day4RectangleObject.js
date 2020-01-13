// https://www.hackerrank.com/challenges/js10-objects/problem

/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    let ret = {};

    ret.length = a;
    ret.width = b;
    ret.perimeter = 2 * (a + b);
    ret.area = a * b;

    return (ret);
}