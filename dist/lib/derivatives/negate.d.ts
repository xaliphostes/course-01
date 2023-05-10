import { Base } from "./Base";
export declare function negate(v: Base): Negate;
export declare class Negate implements Base {
    private f;
    constructor(f: Base);
    eval(v: number): number;
    name(v: string): string;
    derive(): Base;
    isNull(): boolean;
    isCst(): boolean;
}
