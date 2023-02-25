import ts from "typescript";
import { typeLiteralFromObject } from "./typeLiteralFromObject";
import { KeyValue } from "./types/KeyValue";

export const typeAliasFromObject = (
    name: string,
    object: KeyValue
): ts.TypeAliasDeclaration => {
    return ts.factory.createTypeAliasDeclaration(
        undefined,
        ts.factory.createIdentifier(name),
        undefined,
        typeLiteralFromObject(object)
    );
};
