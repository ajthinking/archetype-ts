import ts from "typescript";
import { File } from "./File";
import { FileFactory } from "./FileFactory";
import { testIt } from "./loadExisting";

// const file = new File("./src/demo.ts");

// file.addTypeAliasFromObject("Contact", {
//     properties: {
//         name: "string",
//         age: "number",
//     },
// }).addTypeAliasFromObject("Company", {
//     properties: {
//         name: "string",
//         profit: "number",
//     },
// });

const file = FileFactory.create("./src/index.ts");
file.save();
