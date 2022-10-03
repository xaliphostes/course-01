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
    deval(v: number) { return 0.0 }
    name (): string  { return this.v.toString() }
    dname(): string  { return '0'}
}
export function cst(v: number) {return new Cst(v)}


class Monome implements Base {
    constructor(public deg: number, public f: Base) {}
    eval(v: number): number {
        return Math.pow(this.f.eval(v), this.deg)
    }
    deval(v: number): number {
        return this.deg*this.f.deval(v) * Math.pow(this.f.eval(v), this.deg-1)
    }
    name(v: string): string  {
        if (typeof this.f==="number") return v
        return "(" + this.f.name(v) + ")^" + this.deg
    }
    dname(v: string): string {
        if (this.deg==1) return "0"
        const f  = this.f.name(v)
        const df = this.f.dname(v)
        return (this.deg) + "(" + df + ")^" + (this.deg-1) + ".(" + f + ")^" + (this.deg-1)
    }
}
export function monome(deg: number, a: Base) {return new Monome(deg, a)}


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
        return this.f1.name(v) + " + " + this.f2.name(v)
    }
    dname(v: string): string {
        const df1 = this.f1.dname(v)
        const df2 = this.f2.dname(v)
        return "(" + df1 + " + " + df2 + ")"
    }
}
export function add(a: Base, b: Base) {return new Add(a, b)}


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
        return this.f1.name(v) + "." + this.f2.name(v)
    }
    dname(v: string): string {
        const f1  = this.f1.name(v)
        const f2  = this.f2.name(v)
        const df1 = this.f1.dname(v)
        const df2 = this.f2.dname(v)
        return "(" + df1 + "." + f2 + " + " + f1 + "." + df2 + ")"
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
        return '(' + this.f1.name(v) + ")/(" + this.f2.name(v) + ')'
    }
    dname(v: string): string {
        const f1  = this.f1.name(v)
        const f2  = this.f2.name(v)
        const df1 = this.f1.dname(v)
        const df2 = this.f2.dname(v)
        return "(" + df1 + "." + f2 + " - " + f1 + "." + df2 + ")/" + f2 + "^2"
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


class Tan extends Div {
    constructor() {
        super(new Sin(), new Cos())
    }
}
export function tan() {return new Tan()}
  
// -----------------------------------------------------------------
// TODO
// f-g
// f°g