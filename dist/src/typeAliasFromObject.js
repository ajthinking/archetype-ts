"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeAliasFromObject = void 0;
const typescript_1 = __importDefault(require("typescript"));
const typeLiteralFromObject_1 = require("./typeLiteralFromObject");
const typeAliasFromObject = (name, object) => {
    return typescript_1.default.factory.createTypeAliasDeclaration(undefined, typescript_1.default.factory.createIdentifier(name), undefined, (0, typeLiteralFromObject_1.typeLiteralFromObject)(object));
};
exports.typeAliasFromObject = typeAliasFromObject;
