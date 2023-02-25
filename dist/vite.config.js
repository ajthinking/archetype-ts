"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("vitest/config");
const vite_1 = __importDefault(require("unplugin-auto-import/vite"));
exports.default = (0, config_1.defineConfig)({
    plugins: [
        (0, vite_1.default)({
            imports: ["vitest"],
            dts: true, // generate TypeScript declaration
        }),
    ],
});
