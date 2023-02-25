import * as ts from "typescript";

const filename = "test.ts";
const code = `const test: number = 13`;

const sourceFile = ts.createSourceFile(filename, code, ts.ScriptTarget.Latest);

export function printRecursiveFrom(
    node: ts.Node,
    indentLevel: number,
    sourceFile: ts.SourceFile
) {
    const indentation = "-".repeat(indentLevel);
    const syntaxKind = ts.SyntaxKind[node.kind];
    const nodeText = node.getText(sourceFile);
    console.log(`${indentation}${syntaxKind}: ${nodeText}`);

    node.forEachChild((child) =>
        printRecursiveFrom(child, indentLevel + 1, sourceFile)
    );
}

export function testIt() {
    return printRecursiveFrom(sourceFile, 0, sourceFile);
}
