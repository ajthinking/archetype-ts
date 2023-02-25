"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const File_1 = require("./File");
const file = new File_1.File("./src/demo.ts");
file.addTypeAliasFromObject("Contact", {
    properties: {
        name: "string",
        age: "number",
    },
}).addTypeAliasFromObject("Company", {
    properties: {
        name: "string",
        profit: "number",
    },
});
/*
file.cursorAtRoot()
  // insert the entity type
  .insertTypeAliasDeclaration({
    name,
    modifiers,
    object,
  })
  // insert the properties lookup object
  .insertConstDeclaration({
    name,
    modifiers,
    value,
  })
  // sort the identifiers
  .cursorsAt(query => query.isTypeAliasDeclaration() || query.isConstDeclaration())
  .sortIdentifiers()
  // lint & save
  .lint()
  .save()
*/
