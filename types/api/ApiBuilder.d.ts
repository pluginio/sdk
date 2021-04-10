import { IApi } from "./IApi";
export declare class ApiBuilder {
    static create(type: ApiType): IApi;
    static createFromString(version: string): IApi;
}
export declare enum ApiType {
    v1 = "1"
}
