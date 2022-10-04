import { add, tan, div, pow, prod, sin, variable, comp, exp, cst, Base, Div } from "../lib"

function display(f: Base, x: number = 3) {
    console.log(f.name('x'))
    console.log(f.derive().name('x'))
    console.log(f.eval(x))
    console.log(f.derive().eval(x))
}

test('test derivative add', () => {
    const f = add(variable(), variable())

    expect(f.eval(3)).toEqual(6)
    expect(f.derive().eval(3)).toEqual(2)

    expect(f.name('x')).toEqual('x+x')
    expect(f.derive().name('x')).toEqual('1+1')
})

test('test derivative comp', () => {
    const f = comp(pow(variable(), 3), exp())

    expect(f.eval(3)).toBeCloseTo(8103.08)
    expect(f.derive().eval(3)).toBeCloseTo(24309.25)

    expect(f.name('x')).toEqual('(e^(x))^3')
    expect(f.derive().name('x')).toEqual('3*1*(e^(x))^2*e^(x)')
})

test('test derivative constant', () => {
    const f = cst(10)

    expect(f.eval(3)).toBeCloseTo(10)
    expect(f.derive().eval(3)).toBeCloseTo(0)

    expect(f.name('x')).toEqual('10')
    expect(f.derive().name('x')).toEqual('0')
})

test('test derivative div', () => {
    const f = div(sin(), variable())
    
    // display(f)

    expect(f.eval(3)).toBeCloseTo(0.047)
    expect(f.derive().eval(3)).toBeCloseTo(-0.3457)

    expect(f.name('x')).toEqual('(sin(x))/(x)')
    expect(f.derive().name('x')).toEqual('(cos(x)*x-sin(x)*1)/((x)^2)')
})

// Etc...