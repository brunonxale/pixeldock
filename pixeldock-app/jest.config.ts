import type { Config } from "jest";

const config: Config = {
    preset: "ts-jest",
    testEnvironment: "jest-environment-jsdom",
    moduleNameMapper: {
        "^@/src/(.*)$": "<rootDir>/src/$1",
    },

    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

export default config;
