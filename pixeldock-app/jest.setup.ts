// jest.setup.ts
import "@testing-library/jest-dom";
import fetch from "cross-fetch";

// Polyfill global fetch for RTK Query
global.fetch = fetch;
