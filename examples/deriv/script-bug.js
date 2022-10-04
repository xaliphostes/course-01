const { div, pow, sin, cos, comp, exp, add, variable, tan } = require('../../dist/@youwol/course-01')

const x = 0.2

let Fct =
    comp(
        variable(),
        pow(variable(), 2)
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

/*
Something wrong here if we uncomment the code in prod.ts:

    Prod {
        f1: Prod {
            f1: Cst { v: 2 },
            f2: Cst { v: 1 }
        },
        f2: Var {}
    }
*/
