import { Api } from "./Api";
export declare class User {
    private _api;
    constructor(api: Api);
    username(): void;
    friends(): void;
    followers(): void;
    following(): void;
    isLoggedIn(): void;
    login(): void;
}
