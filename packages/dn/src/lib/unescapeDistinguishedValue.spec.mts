import { describe, expect, it } from "vitest";
import escapeDistinguishedValue from "./escapeDistinguishedValue.mjs";
import unescapeDistinguishedValue from "./unescapeDistinguishedValue.mjs";

const samples = [
    "",
    "plain",
    "foo#bar",
    "a b",
    "#foo",
    " foo",
    "# ",
    "  ",
    "a ",
    "a b,",
    " #",
    "a\"+,;<=>\\\0 ",
    "\0",
    " ",
    "#",
    "a  ",
    "  foo",
    "Lučić",
    "a\0b",
    "\\",
    "=",
];

describe("unescapeDistinguishedValue()", () => {
    it("inverts escapeDistinguishedValue", () => {
        for (const value of samples) {
            expect(unescapeDistinguishedValue(escapeDistinguishedValue(value))).toBe(value);
        }
    });

    it("decodes hex pairs as UTF-8", () => {
        expect(unescapeDistinguishedValue("\\00")).toBe("\0");
        expect(unescapeDistinguishedValue("Before\\0dAfter")).toBe("Before\rAfter");
        expect(unescapeDistinguishedValue("Before\\0DAfter")).toBe("Before\rAfter");
        expect(unescapeDistinguishedValue("Lu\\C4\\8Di\\C4\\87")).toBe("Lučić");
    });

    it("throws a syntax error with a lowercase message", () => {
        expect(() => unescapeDistinguishedValue("\\")).toThrow(new SyntaxError("malformed escape"));
        expect(() => unescapeDistinguishedValue("\\q")).toThrow(new SyntaxError("malformed escape"));
        expect(() => unescapeDistinguishedValue("\\0")).toThrow(new SyntaxError("malformed escape"));
        expect(() => unescapeDistinguishedValue("\\FF")).toThrow(new SyntaxError("malformed escape"));
        expect(() => unescapeDistinguishedValue("\\C4")).toThrow(new SyntaxError("malformed escape"));
    });
});
