import { DERElement, ASN1TagClass, ASN1Construction, ASN1UniversalType } from "@wildboar/asn1";
import { DER } from "@wildboar/asn1/functional";
import octetStringSubstringsMatch from "./octetStringSubstringsMatch.mjs";
import { _encode_OctetSubstringAssertion } from "../../modules/SelectedAttributeTypes/OctetSubstringAssertion.ta.mjs";

function octetString(bytes: number[]): DERElement {
    return new DERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.octetString,
        new Uint8Array(bytes),
    );
}

function assertion (
    items: Parameters<typeof _encode_OctetSubstringAssertion>[0],
): DERElement {
    return _encode_OctetSubstringAssertion(items, DER);
}

describe("octetStringSubstringsMatch", () => {
    it("matches initial, any, and final substrings", () => {
        const value = octetString([1, 2, 3, 4, 5]);
        expect(octetStringSubstringsMatch(
            assertion([{ initial: new Uint8Array([1, 2]) }]),
            value,
        )).toBe(true);
        expect(octetStringSubstringsMatch(
            assertion([{ any_: new Uint8Array([2, 3, 4]) }]),
            value,
        )).toBe(true);
        expect(octetStringSubstringsMatch(
            assertion([{ final: new Uint8Array([4, 5]) }]),
            value,
        )).toBe(true);
        expect(octetStringSubstringsMatch(
            assertion([
                { initial: new Uint8Array([1]) },
                { any_: new Uint8Array([3]) },
                { final: new Uint8Array([5]) },
            ]),
            value,
        )).toBe(true);
    });

    it("rejects a final assertion that is not a suffix", () => {
        const value = octetString([1, 2, 3, 4, 5]);
        expect(octetStringSubstringsMatch(
            assertion([{ final: new Uint8Array([3, 4]) }]),
            value,
        )).toBe(false);
        expect(octetStringSubstringsMatch(
            assertion([{ final: new Uint8Array([1, 2, 3, 4, 5, 6]) }]),
            value,
        )).toBe(false);
        expect(octetStringSubstringsMatch(
            assertion([{ final: new Uint8Array([0, 5]) }]),
            value,
        )).toBe(false);
    });

    it("rejects an initial assertion that is not a prefix", () => {
        const value = octetString([1, 2, 3, 4, 5]);
        expect(octetStringSubstringsMatch(
            assertion([{ initial: new Uint8Array([2, 3]) }]),
            value,
        )).toBe(false);
    });

    it("matches multiple any_ substrings against the same value", () => {
        const value = octetString([1, 2, 3, 4, 5]);
        expect(octetStringSubstringsMatch(
            assertion([
                { any_: new Uint8Array([1, 2]) },
                { any_: new Uint8Array([3, 4]) },
                { any_: new Uint8Array([5]) },
            ]),
            value,
        )).toBe(true);
        expect(octetStringSubstringsMatch(
            assertion([
                { any_: new Uint8Array([1, 2]) },
                { any_: new Uint8Array([9]) },
            ]),
            value,
        )).toBe(false);
    });
});
