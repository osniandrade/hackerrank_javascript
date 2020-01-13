// https://www.hackerrank.com/challenges/js10-count-objects/problem

/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
    let contador = 0;

    for(let ob in objects) {
      if(objects[ob].x == objects[ob].y) { contador++; }
    }

    return contador
}

