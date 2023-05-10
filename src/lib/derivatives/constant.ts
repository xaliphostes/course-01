import { Base } from "./Base"

export function cst(v: number) { return new Cst(v) }

export class Cst implements Base {
    constructor(public readonly v: number) { }
    eval(v: number): number {
        return this.v
    }
    name(v: string): string { return this.v.toString() }
    derive(): Base { return cst(0) }
    isNull(): boolean { return this.v === 0 }
    isCst(): boolean { return true }
}
