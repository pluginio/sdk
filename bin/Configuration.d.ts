export declare class Configuration {
    private _data;
    constructor(config: any);
    getString(name: string): string;
    getNumber(name: string): number;
    getBoolean(name: string): boolean;
    getHtmlElement(name: string): HTMLElement;
}
