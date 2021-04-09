import { Api } from "./api/v1/Api";
import { Configuration } from "./Configuration";
export declare class Application {
    private static _callbackMap;
    private _isInitialized;
    private _api;
    private _config;
    private _sdk;
    private _namespace;
    private _frameId;
    constructor();
    addEventListener(type: string, callback: (_: any) => any): void;
    private init;
    showRestrictedContent(): void;
    showLoader(): void;
    hideLoader(): void;
    get frameId(): string;
    get sdk(): string;
    get namespace(): string;
    get api(): Api;
    get config(): Configuration;
}
