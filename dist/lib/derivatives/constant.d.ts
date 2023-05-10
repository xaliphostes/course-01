import { Base } from "./Base";
export declare function cst(v: number): Cst;
export declare class Cst implements Base {
    readonly v: number;
    constructor(v: number);
    eval(v: number): number;
    name(v: string): string;
    derive(): Base;
    isNull(): boolean;
    isCst(): boolean;
}
