import { Application } from "./Application";
import { Api } from "./api/v1/Api";
import { IApi } from "./api/IApi";
import { Consts } from './core/Consts';
import { Utils } from "./core/Utils";
import { CommandType } from "./core/CommandType";
import { EventType } from "./core/EventType";
export { Consts, Application, Api, IApi, CommandType, EventType, Utils };
export default class PluginIO {
    static hostFrame: HTMLIFrameElement;
    private static _registryService;
    private static _lastFrameId;
    static init(): void;
    static enableHostFrame(path: string): void;
    static disableHostFrame(): void;
}

export as namespace sdk;
