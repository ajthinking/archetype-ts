import ts from "typescript";
import { KeyValue } from "./types/KeyValue";
export declare const typeAliasFromObject: (name: string, object: KeyValue) => ts.TypeAliasDeclaration;
