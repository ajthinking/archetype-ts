import ts from "typescript";
import util from "util";
import * as fs from "fs";
import { typeAliasFromObject } from "./typeAliasFromObject";
import { FileFactory } from "./FileFactory";

export class File {
    private sourceFile: ts.SourceFile;

    constructor(sourceFile: ts.SourceFile) {
        this.sourceFile = sourceFile;
    }

    static create(path: string) {
        return FileFactory.create(path);
    }

    static load(path: string) {
        return FileFactory.load(path);
    }

    addTypeAliasFromObject(
        name: string,
        object: { [key: string]: unknown }
    ): this {
        const printer = ts.createPrinter({
            newLine: ts.NewLineKind.LineFeed,
        });

        const nodes = ts.factory.createNodeArray([
            typeAliasFromObject(name, object),
        ]);

        const printedString = printer.printList(
            ts.ListFormat.MultiLine,
            nodes,
            this.sourceFile
        );

        fs.writeFileSync(this.sourceFile.fileName, printedString);

        return this;
    }

    save() {
        const printer = ts.createPrinter({
            newLine: ts.NewLineKind.LineFeed,
        });

        const nodes = ts.factory.createNodeArray([]);

        const printedString = printer.printList(
            ts.ListFormat.MultiLine,
            nodes,
            this.sourceFile
        );

        fs.writeFileSync(this.sourceFile.fileName, printedString);

        return this;
    }

    [util.inspect.custom](depth: number, opts: any) {
        return `<File: ${this.sourceFile.fileName}>`;
    }
}
