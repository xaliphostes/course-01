const { meanNormals, meanValues } = require('../../dist/@youwol/course-01')
const df = require('@youwol/dataframe')

const n = 100000
const index = 0

// ----------------------------------------

// From 8 of instructions lines to 1 (we split the line for clarity)
const serie = df.Serie.create({
    array   : new Array(6*n).fill(0).map(v => (0.5-Math.random())),
    itemSize: 6
})

// ----------------------------------------

// From 10 lines to 1
console.log( meanNormals(serie, index), meanValues (serie, index) )
