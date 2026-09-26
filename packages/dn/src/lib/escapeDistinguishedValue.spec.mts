import { describe, expect, it } from "vitest";
import escapeDistinguishedValue from "./escapeDistinguishedValue.mjs";

describe("escapeDistinguishedValue()", () => {
    it("returns strings that need no escaping unchanged", () => {
        expect(escapeDistinguishedValue("")).toBe("");
        expect(escapeDistinguishedValue("plain")).toBe("plain");
        expect(escapeDistinguishedValue("foo#bar")).toBe("foo#bar");
        expect(escapeDistinguishedValue("a b")).toBe("a b");
    });

    it("escapes a leading hash or space", () => {
        expect(escapeDistinguishedValue("#foo")).toBe("\\#foo");
        expect(escapeDistinguishedValue(" foo")).toBe("\\ foo");
        expect(escapeDistinguishedValue("# ")).toBe("\\#\\ ");
        expect(escapeDistinguishedValue("  ")).toBe("\\ \\ ");
    });

    it("escapes a trailing space and specials in the middle", () => {
        expect(escapeDistinguishedValue("a ")).toBe("a\\ ");
        expect(escapeDistinguishedValue("a b,")).toBe("a b\\,");
        expect(escapeDistinguishedValue(" #")).toBe("\\ #");
    });

    it("escapes quotes, separators, backslash, and NUL", () => {
        expect(escapeDistinguishedValue("a\"+,;<=>\\\0 ")).toBe("a\\\"\\+\\,\\;\\<\\=\\>\\\\\\00\\ ");
    });
});
