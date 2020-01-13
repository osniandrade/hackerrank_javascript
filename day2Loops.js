// https://www.hackerrank.com/challenges/js10-loops/problem



/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    for(let a in s) {
        if(s[a] == 'a' || s[a] == 'e' || s[a] == 'i' || s[a] == 'o' || s[a] == 'u'){                console.log(s[a])
        }
    }
    for(let a in s) {
        if(s[a] != 'a' && s[a] != 'e' && s[a] != 'i' && s[a] != 'o' && s[a] != 'u'){                console.log(s[a])
        }
    }
}

