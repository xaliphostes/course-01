const { div, pow, sin, cos, comp, exp, add, variable } = require('../../dist/@youwol/course-01')

const x = 0.2

//      sin(x)^2 + cos(x)
// f = -------------------
//           sin(x^3)

let Fct = 
    div(
        add(
            pow(sin(), 2),
            cos()
        ),
		comp(
            sin(),
            pow(variable(), 3)
        )
	)

for (var i=0; i<3; ++i) {
    console.log(" ("+i+")")
    console.log("f   (x)    = "+Fct.name("x"))
    console.log(" ")
    console.log(" ("+i+")")

    const v = Fct.eval(x)
    
    console.log("f   ("+x+") = " + v)
    console.log(" ")
    console.log(" ")
    Fct = Fct.derive()
    console.log('------------------------------------')
}
