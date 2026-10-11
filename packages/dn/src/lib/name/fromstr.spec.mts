import { describe, expect, it } from "vitest";
import nameFromStringX520 from "./fromstr.mjs";
import nameToString from "./tostr.mjs";

describe("nameFromStringX520()", () => {
    it("parses a string with the rdnSequence prefix", () => {
        const name = nameFromStringX520("rdnSequence:c=US,o=Co+cn=Bob");
        expect(name.rdnSequence).toHaveLength(2);
        expect(name.rdnSequence[1]).toHaveLength(2);
        expect(name.rdnSequence[0][0].value.printableString).toBe("US");
    });

    it("reverses nameToString()", () => {
        const str = "rdnSequence:c=US,o=Co";
        expect(nameToString(nameFromStringX520(str))).toBe(str);
    });

    it("parses the root DSE", () => {
        expect(nameFromStringX520("rdnSequence:")).toEqual({ rdnSequence: [] });
    });

    it("rejects a missing or unknown alternative", () => {
        expect(() => nameFromStringX520("c=US")).toThrow(SyntaxError);
        expect(() => nameFromStringX520("")).toThrow(SyntaxError);
        expect(() => nameFromStringX520("other:c=US")).toThrow(SyntaxError);
        expect(() => nameFromStringX520("rdnSequence :c=US")).toThrow(SyntaxError);
    });
});
