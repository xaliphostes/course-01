const { sub, prod, div, pow, sin, tan, add, variable } = require('../../dist/@youwol/course-01')

{
    const f =
        prod(
            add(
                add(
                    pow(variable(), 6),
                    pow(variable(), 3)
                ),
                pow(variable(), 1)
            ),
            sub(sin(), variable())
        )

    console.log("f     = " + f.name('x') )
    console.log("f'    = " + f.dname('x') )
    console.log("f(1)  = " + f.eval(1) )
    console.log("f'(1) = " + f.deval(1) )
}
console.log('')
{
    const f =
        div(
            add(
                pow(variable(), 6),
                sin()
            ),
            add(tan(), variable())
        )

    console.log("f     = " + f.name('x') )
    console.log("f'    = " + f.dname('x') )
    console.log("f(1)  = " + f.eval(1) )
    console.log("f'(1) = " + f.deval(1) )
}