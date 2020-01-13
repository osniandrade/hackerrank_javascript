// https://www.hackerrank.com/challenges/js10-class/problem

/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
function Polygon(sides) {
    this.sides = sides;
    this.perimeter = perim;
}

function perim() {
    let perimeter = 0;

    for (let ind in this.sides) {
        perimeter += this.sides[ind];
    }
    return (perimeter);
}