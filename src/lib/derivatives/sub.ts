import { Base } from "./Base"
import { negate } from "./negate"

export function sub(f1: Base, f2: Base) {return new Sub(f1, f2)}

class Sub implements Base {
    constructor(private f1: Base, private f2: Base) {}
    eval(v: number): number { 
        return this.f1.eval(v) - this.f2.eval(v) 
    }
    name(v: string): string { return this.f1.name(v) + "-" + this.f2.name(v) }
    derive(): Base {
        var a = this.f1.derive()
        var b = this.f2.derive()
        if (a.isNull()) return negate(b)
        if (b.isNull()) return a
        return sub(a, b)
    }
    isNull(): boolean { return false }
    isCst(): boolean  { return false }
}
