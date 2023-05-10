import { Base } from "./Base";
export declare function comp(f1: Base, f2: Base): Comp;
declare class Comp implements Base {
    private f1;
    private f2;
    constructor(f1: Base, f2: Base);
    eval(v: number): number;
    name(v: string): string;
    derive(): Base;
    isNull(): boolean;
    isCst(): boolean;
}
export {};
