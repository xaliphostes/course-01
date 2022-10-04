import { Base } from "./Base"

export function negate(v: Base) {return new Negate(v)}

export class Negate implements Base {
    constructor(private f: Base) { }
    eval(v: number): number { 
        return -this.f.eval(v) 
    }
    name(v: string): string { return "(-" + this.f.name(v) + ')' }
    derive(): Base { return negate(this.f.derive()) }
    isNull(): boolean { return this.f.isNull() }
    isCst(): boolean { return this.f.isCst() }
}
