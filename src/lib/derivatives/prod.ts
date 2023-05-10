import { add } from "./add"
import { Base } from "./Base"
import { Cst, cst } from "./constant"

export function prod(f1: Base, f2: Base) {return new Prod(f1, f2)}

// f*g
// f'*g + f*g'
class Prod implements Base {
    constructor(public readonly f1: Base, public readonly f2: Base) { }
    eval(v: number): number {
        return this.f1.eval(v) * this.f2.eval(v)
    }
    name(v: string): string { 
        if (this.f1.isNull() || this.f2.isNull()) return ""
        const s1 = this.f1.name(v)
        const s2 = this.f2.name(v)
        if (s1 === '1') {
            if (s2 === '1') {
                return "1"
            }
            return s2
        }
        if (s2 === '1') {
            return s1
        }
        return s1 + "*" + s2
    }
    derive(): Base {
        const a = this.f1.derive()
        const b = this.f2.derive()

        // -------------------------------------------------
        // TODO:
        // 1) Optimlization by simplification
        // 2) Detect the bug in the following commented code
        // -------------------------------------------------

        // if (a.isNull()) {
        //     if (b.isNull()) return cst(0)
        //     if (this.f1.isCst() && b.isCst()) return cst((this.f1 as Cst).v * (b as Cst).v)
        //     return prod(this.f1, b)
        // }
        // if (b.isNull()) {
        //     if (a.isCst() && this.f2.isCst()) return cst((this.f2 as Cst).v * (a as Cst).v)
        //     return prod(a, this.f2)
        // }
        // console.log(this.f2, b.name('x')) // second arg is 'NaN' !

        return add(prod(a, this.f2), prod(this.f1, b))
    }
    isNull(): boolean { return this.f1.isNull() && this.f2.isNull() }
    isCst(): boolean  { return this.f1.isCst() && this.f2.isCst() }
}
