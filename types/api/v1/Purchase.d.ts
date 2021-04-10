import { Api } from "./Api";
export declare class Purchase {
    private _api;
    constructor(api: Api);
    buy(sku: string): void;
    isSubscribed(): void;
    subscribe(id: string): void;
    showStore(id: string): void;
}
