import { Api } from "./Api";
export declare class Advert {
    private _api;
    constructor(api: Api);
    showBanner(): void;
    showImage(): void;
    showVideo(): void;
    showVideoReward(id: string): void;
}
