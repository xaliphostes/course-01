// __________________________________________________________________
// Interface for all mathematical expressions
// __________________________________________________________________
export interface Base {
    eval(x: number): number // numerical value of f at x
    name(x: string): string // symbolic expression of f at x
    derive(): Base          // symbolic expression of f'
    isNull(): boolean       // this = 0 ?
    isCst() : boolean       // this = constant ?
}
