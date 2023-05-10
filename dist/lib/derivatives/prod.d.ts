import { Base } from "./Base";
export declare function prod(f1: Base, f2: Base): Prod;
declare class Prod implements Base {
    readonly f1: Base;
    readonly f2: Base;
    constructor(f1: Base, f2: Base);
    eval(v: number): number;
    name(v: string): string;
    derive(): Base;
    isNull(): boolean;
    isCst(): boolean;
}
export {};
