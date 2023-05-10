/**
 * Base interface for mathematical expressions.
 *
 * An interface is a contract that a class must adhere to (all methods)
 * if this class 'implements' the interface.
 */
export interface Base {
    eval(v: number): number;
    deval(v: number): number;
    name(v: string): string;
    dname(v: string): string;
}
declare class Cst implements Base {
    v: number;
    constructor(v: number);
    eval(v: number): number;
    deval(v: number): number;
    name(v: string): string;
    dname(v: string): string;
}
export declare function cst(v: number): Cst;
declare class Variable implements Base {
    constructor();
    eval(v: number): number;
    deval(v: number): number;
    name(v: string): string;
    dname(v: string): string;
}
export declare function variable(): Variable;
declare class Pow implements Base {
    private f;
    private deg;
    constructor(f: Base, deg: number);
    eval(v: number): number;
    deval(v: number): number;
    name(v: string): string;
    dname(v: string): string;
}
export declare function pow(b: Base, deg: number): Pow;
declare class Add implements Base {
    private f1;
    private f2;
    constructor(f1: Base, f2: Base);
    eval(v: number): number;
    deval(v: number): number;
    name(v: string): string;
    dname(v: string): string;
}
export declare function add(a: Base, b: Base): Add;
declare class Sub implements Base {
    private f1;
    private f2;
    constructor(f1: Base, f2: Base);
    eval(v: number): number;
    deval(v: number): number;
    name(v: string): string;
    dname(v: string): string;
}
export declare function sub(a: Base, b: Base): Sub;
declare class Prod implements Base {
    private f1;
    private f2;
    constructor(f1: Base, f2: Base);
    eval(v: number): number;
    deval(v: number): number;
    name(v: string): string;
    dname(s: string): string;
}
export declare function prod(a: Base, b: Base): Prod;
declare class Div implements Base {
    private f1;
    private f2;
    constructor(f1: Base, f2: Base);
    eval(v: number): number;
    deval(v: number): number;
    name(v: string): string;
    dname(v: string): string;
}
export declare function div(a: Base, b: Base): Div;
declare class Sin implements Base {
    eval(v: number): number;
    deval(v: number): number;
    name(v: string): string;
    dname(v: string): string;
}
export declare function sin(): Sin;
declare class Cos implements Base {
    eval(v: number): number;
    deval(v: number): number;
    name(v: string): string;
    dname(v: string): string;
}
export declare function cos(): Cos;
declare class Tan implements Base {
    eval(v: number): number;
    deval(v: number): number;
    name(v: string): string;
    dname(v: string): string;
}
export declare function tan(): Tan;
export {};
