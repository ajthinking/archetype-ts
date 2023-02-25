"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.File = void 0;
const typescript_1 = __importDefault(require("typescript"));
const fs = __importStar(require("fs"));
const typeAliasFromObject_1 = require("./typeAliasFromObject");
class File {
    constructor(filePath) {
        this.filePath = filePath;
        this.sourceFile = typescript_1.default.createSourceFile("this-name-is-ignored.ts", "", typescript_1.default.ScriptTarget.Latest, false, typescript_1.default.ScriptKind.TS);
    }
    addTypeAliasFromObject(name, object) {
        const printer = typescript_1.default.createPrinter({
            newLine: typescript_1.default.NewLineKind.LineFeed,
        });
        const nodes = typescript_1.default.factory.createNodeArray([
            (0, typeAliasFromObject_1.typeAliasFromObject)(name, object),
        ]);
        const printedString = printer.printList(typescript_1.default.ListFormat.MultiLine, nodes, this.sourceFile);
        fs.writeFileSync(this.filePath, printedString);
        return this;
    }
    // addTypeAlias(options: { name: string; type: string; isExported: boolean }) {
    //     const printer = ts.createPrinter({
    //         newLine: ts.NewLineKind.LineFeed,
    //     });
    //     const nodes = ts.factory.createNodeArray([
    //         ts.factory.createTypeAliasDeclaration(
    //             [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
    //             ts.factory.createIdentifier("MyType"),
    //             undefined,
    //             ts.factory.createTypeLiteralNode([
    //                 ts.factory.createPropertySignature(
    //                     undefined,
    //                     ts.factory.createIdentifier("properties"),
    //                     undefined,
    //                     ts.factory.createKeywordTypeNode(
    //                         ts.SyntaxKind.StringKeyword
    //                     )
    //                 ),
    //             ])
    //         ),
    //     ]);
    //     const sourceFile = ts.createSourceFile(
    //         "this-name-is-ignored.ts",
    //         "",
    //         ts.ScriptTarget.Latest,
    //         false,
    //         ts.ScriptKind.TS
    //     );
    //     const printedString = printer.printList(
    //         ts.ListFormat.MultiLine,
    //         nodes,
    //         sourceFile
    //     );
    //     fs.writeFileSync(this.filePath, printedString);
    //     return this;
    // }
    save() {
        return this;
    }
}
exports.File = File;
