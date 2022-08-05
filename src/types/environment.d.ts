declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production' | 'test';
            PORT?: string;
            PROJECT_NAME: string;
            MAINTAINER: string;
        }
    }
}

export {};
