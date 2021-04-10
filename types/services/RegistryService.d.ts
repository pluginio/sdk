export declare class RegistryService {
    private static _instance;
    private _elementList;
    static get instance(): RegistryService;
    constructor();
    parse(): void;
    private parseParams;
    private onAppLoaded;
}
