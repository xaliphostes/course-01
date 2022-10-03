import { add, tan, div, pow, prod, sin, variable } from "../lib"

test('test derivative 1', () => {
    function F(x: number) {
        return x**6 + x**3 + x + Math.sin(x)
    }

    function Fp(x: number) {
        return 6*x**5 + 3*x**2 + 1 + Math.cos(x)
    }

    const f =
    add(
        add(
            add(
                pow(variable(), 6),
                pow(variable(), 3)
            ),
            pow(variable(), 1)
        ),
        sin()
    )

    console.log("f  = " + f.name('x') )
    console.log("f' = " + f.dname('x') )

    expect( f.name('x') ).toEqual('x^6 + x^3 + x + sin(x)')
    expect( f.eval(2) ).toBeCloseTo(F(2))
    expect( f.dname('x') ).toEqual('6x^5 + 3x^2 + 1 + cos(x)')
    expect( f.deval(2) ).toBeCloseTo(Fp(2))
})

test('test derivative 2', () => {
    function F(x: number) {
        return (x**6+Math.sin(x))/(Math.tan(x)+x)
    }

    function Fp(x: number) {
        return ((6*x**5 + Math.cos(x)) * (Math.tan(x) + x) - (x**6 + Math.sin(x))*(1/Math.cos(x)**2 + 1))/(Math.tan(x) + x)**2
    }
    const f =
        div(
            add(
                pow(variable(), 6),
                sin()
            ),
            add(tan(), variable())
        )

    console.log("f  = " + f.name('x') )
    console.log("f' = " + f.dname('x') )

    expect( f.eval(0.5) ).toBeCloseTo(F(0.5))
    expect( f.deval(0.5) ).toBeCloseTo(Fp(0.5))
})
