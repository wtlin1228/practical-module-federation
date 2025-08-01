import { Route as rootRouteImport } from './routes/__root';
import { Route as AboutRouteImport } from './routes/about';
import { Route as IndexRouteImport } from './routes/index';
declare const AboutRoute: import("@tanstack/router-core").Route<import("@tanstack/react-router").RootRoute<undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown>, "/about", "/about", "/about", "/about", undefined, import("@tanstack/router-core").ResolveParams<"/about">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown>;
declare const IndexRoute: import("@tanstack/router-core").Route<import("@tanstack/react-router").RootRoute<undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown>, "/", "/", "/", "/", undefined, import("@tanstack/router-core").ResolveParams<"/">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown>;
export interface FileRoutesByFullPath {
    '/': typeof IndexRoute;
    '/about': typeof AboutRoute;
}
export interface FileRoutesByTo {
    '/': typeof IndexRoute;
    '/about': typeof AboutRoute;
}
export interface FileRoutesById {
    __root__: typeof rootRouteImport;
    '/': typeof IndexRoute;
    '/about': typeof AboutRoute;
}
export interface FileRouteTypes {
    fileRoutesByFullPath: FileRoutesByFullPath;
    fullPaths: '/' | '/about';
    fileRoutesByTo: FileRoutesByTo;
    to: '/' | '/about';
    id: '__root__' | '/' | '/about';
    fileRoutesById: FileRoutesById;
}
export interface RootRouteChildren {
    IndexRoute: typeof IndexRoute;
    AboutRoute: typeof AboutRoute;
}
declare module '@tanstack/react-router' {
    interface FileRoutesByPath {
        '/about': {
            id: '/about';
            path: '/about';
            fullPath: '/about';
            preLoaderRoute: typeof AboutRouteImport;
            parentRoute: typeof rootRouteImport;
        };
        '/': {
            id: '/';
            path: '/';
            fullPath: '/';
            preLoaderRoute: typeof IndexRouteImport;
            parentRoute: typeof rootRouteImport;
        };
    }
}
export declare const routeTree: import("@tanstack/router-core").Route<any, "/", "/", string, "__root__", undefined, {}, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, RootRouteChildren, FileRouteTypes>;
export {};
