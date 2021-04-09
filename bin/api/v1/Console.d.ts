import { Api } from "./Api";
export declare class Console {
    private _api;
    constructor(api: Api);
    log(command: string, value: string): void;
    info(command: string, value: string): void;
    warn(command: string, value: string): void;
    error(command: string, value: string): void;
}
