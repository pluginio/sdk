import { Application } from "../Application";
export interface IApi {
    startup(): void;
    application: Application;
}
