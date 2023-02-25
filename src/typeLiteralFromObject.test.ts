import ts from "typescript";
import { expect, it } from "vitest";
import { typeLiteralFromObject } from "./typeLiteralFromObject";

it("returns a empty type if the object is empty", () => {
    const object = {};
    const result = typeLiteralFromObject(object);

    expect(ts.isTypeLiteralNode(result)).toBe(true);
    expect(result.members.length).toBe(0);
});

it("returns a type with a string property", () => {
    const object = { name: "hey im a string" };
    const node = typeLiteralFromObject(object);

    const [member] = node.members;

    assert(ts.isPropertySignature(member));
});
