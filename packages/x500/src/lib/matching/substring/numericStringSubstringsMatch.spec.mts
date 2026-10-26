import type { ASN1Element } from "@wildboar/asn1";
import { DER, _encodeNumericString } from "@wildboar/asn1/functional";
import numericStringSubstringsMatch from "./numericStringSubstringsMatch.mjs";

function numeric (value: string): ASN1Element {
    return _encodeNumericString(value, DER);
}

describe("numericStringSubstringsMatch", () => {
    const value = numeric("1 2 3 4 5");

    it("matches initial, any, and final substrings with multiple internal spaces", () => {
        expect(numericStringSubstringsMatch(
            [{ initial: { printableString: "1 2" } }],
            value,
        )).toBe(true);
        expect(numericStringSubstringsMatch(
            [{ any_: { printableString: "2 3 4" } }],
            value,
        )).toBe(true);
        expect(numericStringSubstringsMatch(
            [{ final: { printableString: "4  5" } }],
            value,
        )).toBe(true);
        expect(numericStringSubstringsMatch(
            [{ any_: "2 3" }],
            numeric("12 34"),
        )).toBe(true);
    });

    it("rejects a substring that is not in the selected position", () => {
        expect(numericStringSubstringsMatch(
            [{ initial: { printableString: "2 3" } }],
            value,
        )).toBe(false);
        expect(numericStringSubstringsMatch(
            [{ final: "1 2" }],
            value,
        )).toBe(false);
        expect(numericStringSubstringsMatch(
            [{ any_: "9 9" }],
            value,
        )).toBe(false);
    });
});
