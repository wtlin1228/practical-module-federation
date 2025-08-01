
    export type RemoteKeys = 'carousel/App';
    type PackageType<T> = T extends 'carousel/App' ? typeof import('carousel/App') :any;