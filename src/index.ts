import dotenv from 'dotenv';

enum EnvironmentVersion {
    example = `.env.example`,
    development = `.env.dev`,
    test = `.env.test`,
    production = `.env.production`
}

const getEnvVariable = (version: string) => {
    dotenv.config({ path: version });
    return {
        projectName: process.env.PROJECT_NAME,
        maintainer: process.env.MAINTAINER,
        envVersion: process.env.NODE_ENV
    };
};

const { projectName, maintainer, envVersion } = getEnvVariable(EnvironmentVersion.example);
console.log(projectName);
console.log(maintainer);
console.log(envVersion);
