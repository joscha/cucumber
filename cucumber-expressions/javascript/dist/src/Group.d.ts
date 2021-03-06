export default class Group {
    readonly value: string | null;
    readonly start: number;
    readonly end: number;
    readonly children: Group[];
    constructor(value: string | null, start: number, end: number, children: Group[]);
    readonly values: string[];
}
