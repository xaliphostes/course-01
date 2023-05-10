import { Base } from "./Base";
export declare function exp(): Exp;
declare class Exp implements Base {
    eval(v: number): number;
    name(v: string): string;
    derive(): Base;
    isNull(): boolean;
    isCst(): boolean;
}
export {};
