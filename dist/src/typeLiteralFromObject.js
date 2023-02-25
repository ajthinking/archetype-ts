"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeLiteralFromObject = void 0;
const typescript_1 = __importDefault(require("typescript"));
const typeLiteralFromObject = (object) => {
    const properties = Object.entries(object).map(([key, value]) => {
        const valueType = typeof value;
        let typeNode = typescript_1.default.factory.createKeywordTypeNode(typescript_1.default.SyntaxKind.UnknownKeyword);
        if (valueType === "string") {
            typeNode = typescript_1.default.factory.createKeywordTypeNode(typescript_1.default.SyntaxKind.StringKeyword);
        }
        if (valueType === "number") {
            typeNode = typescript_1.default.factory.createKeywordTypeNode(typescript_1.default.SyntaxKind.NumberKeyword);
        }
        if (valueType === "boolean") {
            typeNode = typescript_1.default.factory.createKeywordTypeNode(typescript_1.default.SyntaxKind.BooleanKeyword);
        }
        if (valueType === "object") {
            typeNode = (0, exports.typeLiteralFromObject)(value);
        }
        return typescript_1.default.factory.createPropertySignature(undefined, typescript_1.default.factory.createIdentifier(key), undefined, typeNode);
    });
    return typescript_1.default.factory.createTypeLiteralNode(properties);
};
exports.typeLiteralFromObject = typeLiteralFromObject;
