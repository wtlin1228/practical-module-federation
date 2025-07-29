
    export type RemoteKeys = 'carousel';
    type PackageType<T> = T extends 'carousel' ? typeof import('carousel') :any;