const { prod, sin, cos, div, monome, add, cst } = require('../../dist/@youwol/course-01')

// -----------------------------
//
// f = sin(x) * cos(x) + 3
//
// -----------------------------
const f = add( prod(sin(), cos()), cst(3) )

console.log("f(x)    = " + f.name("x"))
console.log("f(0.1)  = " + f.eval(0.1))

console.log("")

console.log("f'(x)   = " + f.dname("x"))
console.log("f'(0.1) = " + f.deval(0.1))

console.log("")

// -----------------------------
//        sin(x)^3
// g = ---------------
//     sin(x) * cos(x)
// -----------------------------
const g = div(monome(3, sin()), f)

console.log("g (x)   = " + g.name("x"))
console.log("g'(x)   = " + g.dname("x"))
