export interface Base {
    eval(x: number): number;
    name(x: string): string;
    derive(): Base;
    isNull(): boolean;
    isCst(): boolean;
}
