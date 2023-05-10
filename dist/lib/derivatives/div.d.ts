import { Base } from "./Base";
export declare function div(f1: Base, f2: Base): Div;
export declare class Div implements Base {
    private f1;
    private f2;
    constructor(f1: any, f2: any);
    eval(v: number): number;
    name(v: string): string;
    derive(): Base;
    isNull(): boolean;
    isCst(): boolean;
}
