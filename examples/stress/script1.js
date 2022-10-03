const math    = require('@youwol/math')

/*
    This script performs the same as `script2.js`, but without
    any functional programming. We use the so called
    imperative programming (Fortran, C, C++, Basic...)

    See definition.md in 'doc/'
*/

const n = 100000
const index = 0

// ----------------------------------------

// Build an array of array of 6 scalars:
// [[xx, xy, xz, yy, yz, zz], [xx, xy, xz, yy, yz, zz], ...]
const array = []
for (let i=0; i<n; i++) {
    const a = []
    // A sym 3x3 tensor is 6 scalars
    for (let j=0; j<6; j++) {
        a.push( 0.5-Math.random() )
    }
    array.push(a)
}

// ----------------------------------------

const vector = [0,0,0]
let   value  = 0
for (let i=0; i<n; i++) {
    const {values, vectors} = math.eigen(array[i])
    vector[0] += vectors[index  ]/array.length
    vector[1] += vectors[index+1]/array.length
    vector[2] += vectors[index+2]/array.length
    value += values[index]/array.length
}

console.log(vector, value)
