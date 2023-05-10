import { Base } from "./Base"

export function add(f1: Base, f2: Base) {return new Add(f1, f2)}

class Add implements Base {
    constructor(private f1: Base, private f2: Base) {}
    eval(v: number): number {
        return this.f1.eval(v) + this.f2.eval(v) 
    }
    name(v: string): string {
        const s1 = this.f1.name(v)
        const s2 = this.f2.name(v)
        if (s1 === '') {
            if (s2 === '') {
                return ''
            }
            return s2
        }
        if (s2 === '') {
            return s1
        }
        return s1 + "+" + s2
    }
    derive(): Base {
        var a = this.f1.derive()
        var b = this.f2.derive()
        if (a.isNull()) return b
        if (b.isNull()) return a
        return add(a, b)
    }
    isNull(): boolean { return false }
    isCst(): boolean  { return false }
}
