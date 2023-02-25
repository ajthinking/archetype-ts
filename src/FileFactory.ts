import ts from "typescript";
import { File } from "./File";
import * as fs from "fs";

export const FileFactory = {
    create(path: string) {
        const sourceFile = ts.createSourceFile(
            path,
            "",
            ts.ScriptTarget.Latest,
            false,
            ts.ScriptKind.TS
        );

        return new File(sourceFile);
    },

    load(path: string) {
        const content = fs.readFileSync(path, "utf8");

        const sourceFile = ts.createSourceFile(
            path,
            content,
            ts.ScriptTarget.Latest,
            false,
            ts.ScriptKind.TS
        );

        return new File(sourceFile);
    },
};
