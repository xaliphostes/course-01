import { Base } from "./Base"
import { cst } from "./constant"

export function variable() {return new Var()}

class Var implements Base {
    eval(v: number): number { 
        return v
    }
    name(v: string): string { return v }
    derive(): Base { return cst(1) }
    isNull(): boolean { return false }
    isCst(): boolean { return false }
}

