import type { ASN1Element } from "@wildboar/asn1";
import { DER, _encodeNumericString } from "@wildboar/asn1/functional";
import numericStringMatch from "./numericStringMatch.mjs";

function numeric (value: string): ASN1Element {
    return _encodeNumericString(value, DER);
}

describe("numericStringMatch", () => {
    it("matches identical digit sequences", () => {
        expect(numericStringMatch(numeric("1515"), numeric("1515"))).toBe(true);
    });

    it("ignores multiple internal spaces", () => {
        expect(numericStringMatch(numeric("15  15"), numeric("1515"))).toBe(true);
        expect(numericStringMatch(numeric("1 5 1 5"), numeric("15  15"))).toBe(true);
        expect(numericStringMatch(numeric("12 3"), numeric("1 23"))).toBe(true);
    });

    it("rejects digit sequences that differ after spaces are removed", () => {
        expect(numericStringMatch(numeric("15 15"), numeric("15 16"))).toBe(false);
        expect(numericStringMatch(numeric("1 2 3"), numeric("1234"))).toBe(false);
    });
});
