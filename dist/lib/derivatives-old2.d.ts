/**
 * ------------------------------------------------------------
 * Symbolic and numeric evaluation of a function and its
 * nth derivatives using OOP.
 *
 * Part of the OOP course for PhD students and Researchers.
 *
 * Questions:
 * 1) How to enhance the design to take into account multiple
 *    variables?
 *
 * Contact: fmaerten@gmail.com
 * ------------------------------------------------------------
 */
export interface Base {
    eval(v: number): number;
    name(v: string): string;
    derive(): Base;
    isNull(): boolean;
    isCst(): boolean;
}
declare class Cst implements Base {
    readonly v: number;
    constructor(v: number);
    eval(v: any): number;
    name(v: any): string;
    derive(): Cst;
    isNull(): boolean;
    isCst(): boolean;
}
export declare function cst(v: number): Cst;
declare class Negate implements Base {
    private f;
    constructor(f: Base);
    eval(v: any): number;
    name(v: any): string;
    derive(): Negate;
    isNull(): boolean;
    isCst(): boolean;
}
export declare function negate(v: Base): Negate;
declare class Var implements Base {
    eval(v: any): any;
    name(v: any): any;
    derive(): Cst;
    isNull(): boolean;
    isCst(): boolean;
}
export declare function variable(): Var;
declare class Prod implements Base {
    readonly f1: Base;
    readonly f2: Base;
    constructor(f1: Base, f2: Base);
    eval(v: any): number;
    name(v: any): string;
    derive(): Base;
    isNull(): boolean;
    isCst(): boolean;
}
export declare function prod(f1: Base, f2: Base): Prod;
declare class Pow implements Base {
    private f;
    private deg;
    constructor(f: Base, deg: number);
    eval(v: any): number;
    name(v: any): string;
    derive(): any;
    isNull(): boolean;
    isCst(): boolean;
}
export declare function pow(f1: Base, deg: number): Pow;
declare class Add implements Base {
    private f1;
    private f2;
    constructor(f1: Base, f2: Base);
    eval(v: any): number;
    name(v: any): string;
    derive(): Base | Add;
    isNull(): boolean;
    isCst(): boolean;
}
export declare function add(f1: Base, f2: Base): Add;
declare class Sub implements Base {
    private f1;
    private f2;
    constructor(f1: Base, f2: Base);
    eval(v: any): number;
    name(v: any): string;
    derive(): any;
    isNull(): boolean;
    isCst(): boolean;
}
export declare function sub(f1: Base, f2: Base): Sub;
declare class Div implements Base {
    private f1;
    private f2;
    constructor(f1: any, f2: any);
    eval(v: any): number;
    name(v: any): string;
    derive(): Div;
    isNull(): boolean;
    isCst(): boolean;
}
export declare function div(f1: Base, f2: Base): Div;
declare class Comp implements Base {
    private f1;
    private f2;
    constructor(f1: Base, f2: Base);
    eval(v: any): number;
    name(v: any): string;
    derive(): any;
    isNull(): boolean;
    isCst(): boolean;
}
export declare function comp(f1: Base, f2: Base): Comp;
declare class Sin implements Base {
    eval(v: any): number;
    name(v: any): string;
    derive(): Cos;
    isNull(): boolean;
    isCst(): boolean;
}
export declare function sin(): Sin;
declare class Cos implements Base {
    eval(v: any): number;
    name(v: any): string;
    derive(): Negate;
    isNull(): boolean;
    isCst(): boolean;
}
export declare function cos(): Cos;
declare class Tan extends Div {
    constructor();
}
export declare function tan(): Tan;
declare class Exp implements Base {
    eval(v: any): number;
    name(v: any): string;
    derive(): this;
    isNull(): boolean;
    isCst(): boolean;
}
export declare function exp(): Exp;
export {};
