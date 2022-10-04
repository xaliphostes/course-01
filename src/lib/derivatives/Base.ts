// __________________________________________________________________
// Base class for mathematical expressions
//
export interface Base {
    eval(v: number): number // eval f at v
    name(v: string): string // symbolic expr of f 
    derive(): Base          // expression using Base derivative classes for f'
    isNull(): boolean
    isCst(): boolean
}
