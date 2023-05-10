import { Base } from "./Base";
export declare function variable(): Var;
declare class Var implements Base {
    eval(v: number): number;
    name(v: string): string;
    derive(): Base;
    isNull(): boolean;
    isCst(): boolean;
}
export {};
