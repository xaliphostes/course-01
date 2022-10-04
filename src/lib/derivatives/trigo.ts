import { Base } from "./Base"
import { Div } from "./div"
import { negate } from "./negate"

export function sin() {return new Sin()}
export function cos() {return new Cos()}
export function tan() {return new Tan()}

class Sin implements Base {
    eval(v: number): number { 
        return Math.sin(v) 
    }
    name(v: string): string { return "sin(" + v + ")" }
    derive(): Base { return cos() }
    isNull(): boolean { return false }
    isCst(): boolean  { return false }
}

class Cos implements Base {
    eval(v: number): number { 
        return Math.cos(v) 
    }
    name(v: string): string { return "cos(" + v + ")" }
    derive(): Base { return negate(sin()) }
    isNull(): boolean { return false }
    isCst(): boolean  { return false }
}

class Tan extends Div {
    constructor() { super(sin(), cos()) }
}
