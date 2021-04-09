import { Api } from "./Api";
export declare class Analytics {
    private _api;
    constructor(api: Api);
    startup(): void;
    contentView(): void;
    purchase(id: string): void;
    addToCart(): void;
    startCheckout(): void;
    search(): void;
    share(): void;
    rating(): void;
    signup(): void;
    login(): void;
    invite(): void;
    levelStart(): void;
    levelComplete(): void;
    userInfo(): void;
}
