import { Base } from "./Base"

export function exp() {return new Exp()}

class Exp implements Base {
    eval(v: number): number { 
        return Math.exp(v) 
    }
    name(v: string): string { return "e^(" + v + ")" }
    derive(): Base { return this }
    isNull(): boolean { return false }
    isCst(): boolean  { return false }
}
