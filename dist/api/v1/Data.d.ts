import { Api } from "./Api";
export declare class Data {
    private _api;
    constructor(api: Api);
    load(): void;
    save(data: any): void;
}
