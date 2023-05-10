import { Base } from "./Base";
export declare function pow(f1: Base, deg: number): Pow;
declare class Pow implements Base {
    private f;
    private deg;
    constructor(f: Base, deg: number);
    eval(v: number): number;
    name(v: string): string;
    derive(): Base;
    isNull(): boolean;
    isCst(): boolean;
}
export {};
