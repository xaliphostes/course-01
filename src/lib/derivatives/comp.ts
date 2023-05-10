import { Base } from "./Base"
import { prod } from "./prod"

export function comp(f1: Base, f2: Base) { return new Comp(f1, f2) }

class Comp implements Base {
    constructor(private f1: Base, private f2: Base) { }
    eval(v: number): number {
        return this.f1.eval(this.f2.eval(v))
    }
    name(v: string): string {
        return this.f1.name(this.f2.name(v))
    }
    derive(): Base {
        return prod(
            comp(this.f1.derive(), this.f2),
            this.f2.derive()
        )
    }
    isNull(): boolean { return false }
    isCst(): boolean { return false }
}
