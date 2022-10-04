import { Base } from "./Base"
import { cst } from "./constant"
import { prod } from "./prod"

export function pow(f1: Base, deg: number) {return new Pow(f1, deg)}

// f^n
class Pow implements Base {
    constructor(private f: Base, private deg: number) {}
    eval(v: number): number { 
        return Math.pow(this.f.eval(v), this.deg) 
    }
    name(v: string): string { return "(" + this.f.name(v) + ")^" + this.deg }
    derive(): Base {
        if (this.deg === 0) return cst(0)
        const df = this.f.derive()
        if (this.deg === 1) return df
        if (df.isNull()) return df
        if (this.deg === 2) {
            return prod(prod(cst(this.deg), df), this.f)
        }
        return prod(prod(cst(this.deg), df), pow(this.f, this.deg - 1))
    }
    isNull(): boolean { return false }
    isCst(): boolean  { return false }
}
