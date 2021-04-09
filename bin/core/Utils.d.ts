export declare class Utils {
    static enableErrorView(element: HTMLIFrameElement): void;
    static enableInterstitialView(element: HTMLIFrameElement): void;
    static disableInterstitialView(element: HTMLIFrameElement): void;
    static postMessageToApp(frameId: string, data: any, origin?: string): void;
    static postMessageToHost(data: any, origin?: string): void;
}
