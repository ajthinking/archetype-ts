"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typescript_1 = __importDefault(require("typescript"));
const vitest_1 = require("vitest");
const typeLiteralFromObject_1 = require("./typeLiteralFromObject");
(0, vitest_1.it)("returns a empty type if the object is empty", () => {
    const object = {};
    const result = (0, typeLiteralFromObject_1.typeLiteralFromObject)(object);
    (0, vitest_1.expect)(typescript_1.default.isTypeLiteralNode(result)).toBe(true);
    (0, vitest_1.expect)(result.members.length).toBe(0);
});
(0, vitest_1.it)("returns a type with a string property", () => {
    const object = { name: "hey im a string" };
    const node = (0, typeLiteralFromObject_1.typeLiteralFromObject)(object);
    const [member] = node.members;
    assert(typescript_1.default.isPropertySignature(member));
});
