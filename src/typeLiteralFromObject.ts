import ts from "typescript";
import { KeyValue } from "./types/KeyValue";

export const typeLiteralFromObject = (object: KeyValue): ts.TypeLiteralNode => {
    const properties = Object.entries(object).map(([key, value]) => {
        const valueType = typeof value;
        let typeNode: ts.TypeNode = ts.factory.createKeywordTypeNode(
            ts.SyntaxKind.UnknownKeyword
        );

        if (valueType === "string") {
            typeNode = ts.factory.createKeywordTypeNode(
                ts.SyntaxKind.StringKeyword
            );
        }

        if (valueType === "number") {
            typeNode = ts.factory.createKeywordTypeNode(
                ts.SyntaxKind.NumberKeyword
            );
        }

        if (valueType === "boolean") {
            typeNode = ts.factory.createKeywordTypeNode(
                ts.SyntaxKind.BooleanKeyword
            );
        }

        if (valueType === "object") {
            typeNode = typeLiteralFromObject(value as KeyValue);
        }

        return ts.factory.createPropertySignature(
            undefined,
            ts.factory.createIdentifier(key),
            undefined,
            typeNode
        );
    });

    return ts.factory.createTypeLiteralNode(properties);
};
