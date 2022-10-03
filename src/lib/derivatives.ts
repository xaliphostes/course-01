/*
 * ------------------------------------------------------------
 * Symbolic and numeric evaluation of a function and its
 * first derivative using OOP.
 *
 * Part of the OOP course for PhD students/candidats and Researchers.
 *
 * To go further:
 * 1) How to enhance the design to take into account multiple
 *    derivatives (second, third)?
 * 2) How to enhance the design to take into account multiple
 *    variables?
 *
 * Contact: fmaerten@gmail.com
 * ------------------------------------------------------------
 */

/**
 * Base interface for mathematical expressions.
 * 
 * An interface is a contract that a class must adhere to (all methods)
 * if this class 'implements' the interface.
 */
export interface Base {
    eval(v: number): number   // Evaluate f at v
    deval(v: number): number  // Evaluate f' at v
    name(v: string): string   // symbolic expr of f 
    dname(v: string): string  // symbolic expr of f'
}

// -----------------------------------------------------------------

class Cst implements Base {
    constructor(public v: number) {}
    eval (v: number) { return this.v }
    deval(v: number) { return 0 }
    name (v: string): string { return this.v.toString() }
    dname(v: string): string { return ''}
}
export function cst(v: number) {return new Cst(v)}

class Variable implements Base {
    constructor() {}
    eval (v: number) {
        return v
    }
    deval(v: number) {
        return 1
    }
    name (v: string): string { return v }
    dname(v: string): string { return '1'}
}
export function variable() {return new Variable()}

// (f^n)' = n f' f^(n-1)
class Pow implements Base {
    constructor(private f: Base, private deg: number) {}
    eval (v: number) {
        return Math.pow(this.f.eval(v), this.deg)
    }
    deval(v: number) {
        return this.deg * this.f.deval(v) * Math.pow(this.f.eval(v), this.deg-1)
    }
    name (v: string): string {
        if (this.deg===0) return "1"
        if (this.deg===1) return this.f.name(v)
        return this.f.name(v) + '^' + this.deg
    }
    dname(v: string): string {
        if (this.deg===1) return this.f.dname(v)
        if (this.deg===2) {
            const a = this.f.dname(v)
            if (isNumber(a)) return (2*parseFloat(a)) + this.f.name(v)
            return '2*' + a + this.f.name(v)
        }
        
        const a = this.f.dname(v)
        if (isNumber(a)) return (this.deg*parseFloat(a)) + this.f.name(v) + (this.deg-1===1?'':"^"+(this.deg-1))
        return (this.deg) + '*' + this.f.dname(v) + '*' + this.f.name(v) + (this.deg-1===1?'':"^"+(this.deg-1))
    }
}
export function pow(b: Base, deg: number) {return new Pow(b, deg)}

class Add implements Base {
    constructor(private f1: Base, private f2: Base) {
    }
    eval(v: number)  {
        return this.f1.eval(v) + this.f2.eval(v)
    }
    deval(v: number) {
        return  this.f1.deval(v) + this.f2.deval(v)
    }
    name(v: string): string {
        if (this.f1.name(v) === '' && this.f2.name(v) === '') return ''
        if (this.f1.name(v) === '') return this.f2.name(v)
        if (this.f2.name(v) === '') return this.f1.name(v)
        return this.f1.name(v) + " + " + this.f2.name(v)
    }
    dname(v: string): string {
        if (this.f1.dname(v) === '' && this.f2.dname(v) === '') return ''
        if (this.f1.dname(v) === '') return this.f2.dname(v)
        if (this.f2.dname(v) === '') return this.f1.dname(v)
        return this.f1.dname(v) + " + " + this.f2.dname(v)
    }
}
export function add(a: Base, b: Base) {return new Add(a, b)}

class Sub implements Base {
    constructor(private f1: Base, private f2: Base) {
    }
    eval(v: number)  {
        return this.f1.eval(v) - this.f2.eval(v)
    }
    deval(v: number) {
        return  this.f1.deval(v) - this.f2.deval(v)
    }
    name(v: string): string {
        if (this.f1.name(v) === '' && this.f2.name(v) === '') return ''
        if (this.f1.name(v) === '') return '-'+this.f2.name(v)
        if (this.f2.name(v) === '') return this.f1.name(v)
        return this.f1.name(v) + " - " + this.f2.name(v)
    }
    dname(v: string): string {
        if (this.f1.dname(v) === '' && this.f2.dname(v) === '') return ''
        if (this.f1.dname(v) === '') return '-'+this.f2.dname(v)
        if (this.f2.dname(v) === '') return this.f1.dname(v)
        return this.f1.dname(v) + " - " + this.f2.dname(v)
    }
}
export function sub(a: Base, b: Base) {return new Sub(a, b)}

class Prod implements Base {
    constructor(private f1: Base, private f2: Base) {
    }
    eval(v: number)  {
        return this.f1.eval(v) * this.f2.eval(v)
    }
    deval(v: number) {
        return  this.f1.eval(v) * this.f2.deval(v) + 
                this.f1.deval(v) * this.f2.eval(v)
    }
    name(v: string): string {
        const s1 = this.f1.name(v)
        const s2 = this.f2.name(v)
        const f1 = parseFloat(s1)
        const f2 = parseFloat(s2)
        if (isNumber(s1) && isNumber(s2)) return (f1*f2).toString()
        return toParenthesis(this.f1.name(v)) + " * " + toParenthesis(this.f2.name(v))
    }
    dname(s: string): string {
        const u  = this.f1.name(s)
        const v  = this.f2.name(s)
        const up = this.f1.dname(s)
        const vp = this.f2.dname(s)
        return toParenthesis( toParenthesis(up) + ' * ' + toParenthesis(v) + ' + ' + toParenthesis(u) + ' * ' + toParenthesis(vp) )
    }
}
export function prod(a: Base, b: Base) {return new Prod(a, b)}

class Div implements Base {
    constructor(private f1: Base, private f2: Base) {
    }
    eval(v: number): number {
        return this.f1.eval(v) / this.f2.eval(v)
    }
    deval(v: number): number {
        const f1  = this.f1.eval(v)
        const f2  = this.f2.eval(v)
        const df1 = this.f1.deval(v)
        const df2 = this.f2.deval(v)
        return (df1*f2-f1*df2)/(f2*f2)
    }
    name(v: string): string {
        return toParenthesis(this.f1.name(v)) + " / " + toParenthesis(this.f2.name(v))
    }
    dname(v: string): string {
        const f1  = toParenthesis(this.f1.name(v))
        const f2  = toParenthesis(this.f2.name(v))
        const df1 = toParenthesis(this.f1.dname(v))
        const df2 = toParenthesis(this.f2.dname(v))
        return "(" + df1 + " * " + f2 + " - " + f1 + " * " + df2 + ")/" + f2 + "^2"
    }
}
export function div(a: Base, b: Base) {return new Div(a, b)}


class Sin implements Base {
    eval (v: number): number {return Math.sin(v) }
    deval(v: number): number {return Math.cos(v) }
    name (v: string): string {return "sin(" + v + ")" }
    dname(v: string): string {return "cos(" + v + ")" }
}
export function sin() {return new Sin()}


class Cos implements Base {
    eval (v: number): number {return Math.cos(v) }
    deval(v: number): number {return -Math.sin(v) }
    name (v: string): string {return "cos(" + v + ")" }
    dname(v: string): string {return "(-sin(" + v + "))" }
}
export function cos() {return new Cos()}


// ANOTHER WAY
// -----------
// class Tan extends Div {
//     constructor() {
//         super(new Sin(), new Cos())
//     }
// }
//
class Tan implements Base {
    eval (v: number): number {return Math.tan(v) }
    deval(v: number): number {return 1/Math.cos(v)**2 }
    name (v: string): string {return "tan(" + v + ")" }
    dname(v: string): string {return "1/cos(" + v + ")^2" }
}
export function tan() {return new Tan()}

// Helpers...
// -----------------------------

function isNumber(s: string): boolean {
    return ! Number.isNaN(parseFloat(s))
}

function toParenthesis(a: string): string {
    return '(' + a + ')'
}
  
// -----------------------------------------------------------------
// TODO
// f°g

