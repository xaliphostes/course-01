import { Base } from "./Base"
import { pow } from "./pow"
import { prod } from "./prod"
import { sub } from "./sub"

export function div(f1: Base, f2: Base) {return new Div(f1, f2)}

export class Div implements Base {
    constructor(private f1, private f2) {}
    eval(v: number): number { 
        return this.f1.eval(v) / this.f2.eval(v) 
    }
    name(v: string): string { return "(" + this.f1.name(v) + ")/(" + this.f2.name(v) + ")" }
    derive(): Base {
        return div(sub(prod(this.f1.derive(), this.f2),
            prod(this.f1, this.f2.derive())),
            pow(this.f2, 2))
    }
    isNull(): boolean { return false }
    isCst(): boolean  { return false }
}
