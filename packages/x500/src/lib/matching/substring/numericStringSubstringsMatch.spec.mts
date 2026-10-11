import type { ASN1Element } from "@wildboar/asn1";
import { DER, _encodeNumericString } from "@wildboar/asn1/functional";
import numericStringSubstringsMatch from "./numericStringSubstringsMatch.mjs";
import SubstringSelection from "../../types/SubstringSelection.mjs";

function numeric (value: string): ASN1Element {
    return _encodeNumericString(value, DER);
}

describe("numericStringSubstringsMatch", () => {
    const value = numeric("1 2 3 4 5");

    it("matches initial, any, and final substrings with multiple internal spaces", () => {
        expect(numericStringSubstringsMatch(
            numeric("1 2"),
            value,
            SubstringSelection.initial,
        )).toBe(true);
        expect(numericStringSubstringsMatch(
            numeric("2 3 4"),
            value,
            SubstringSelection.any_,
        )).toBe(true);
        expect(numericStringSubstringsMatch(
            numeric("4  5"),
            value,
            SubstringSelection.final,
        )).toBe(true);
        expect(numericStringSubstringsMatch(
            numeric("2 3"),
            numeric("12 34"),
        )).toBe(true);
    });

    it("rejects a substring that is not in the selected position", () => {
        expect(numericStringSubstringsMatch(
            numeric("2 3"),
            value,
            SubstringSelection.initial,
        )).toBe(false);
        expect(numericStringSubstringsMatch(
            numeric("1 2"),
            value,
            SubstringSelection.final,
        )).toBe(false);
        expect(numericStringSubstringsMatch(
            numeric("9 9"),
            value,
            SubstringSelection.any_,
        )).toBe(false);
    });
});
