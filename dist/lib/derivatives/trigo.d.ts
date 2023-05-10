import { Base } from "./Base";
import { Div } from "./div";
export declare function sin(): Sin;
export declare function cos(): Cos;
export declare function tan(): Tan;
declare class Sin implements Base {
    eval(v: number): number;
    name(v: string): string;
    derive(): Base;
    isNull(): boolean;
    isCst(): boolean;
}
declare class Cos implements Base {
    eval(v: number): number;
    name(v: string): string;
    derive(): Base;
    isNull(): boolean;
    isCst(): boolean;
}
declare class Tan extends Div {
    constructor();
}
export {};
