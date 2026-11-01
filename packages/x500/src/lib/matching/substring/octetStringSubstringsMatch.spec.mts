import { DERElement, ASN1TagClass, ASN1Construction, ASN1UniversalType, ObjectIdentifier } from "@wildboar/asn1";
import { DER } from "@wildboar/asn1/functional";
import {
    AttributeTypeAndValue,
} from "../../modules/InformationFramework/AttributeTypeAndValue.ta.mjs";
import octetStringSubstringsMatch from "./octetStringSubstringsMatch.mjs";
import { _encode_OctetSubstringAssertion } from "../../modules/SelectedAttributeTypes/OctetSubstringAssertion.ta.mjs";
import type { FilterItem_substrings_strings_Item } from "../../modules/DirectoryAbstractService/FilterItem-substrings-strings-Item.ta.mjs";

const type_ = ObjectIdentifier.fromParts([ 1, 1, 1, 1 ]);

function octetString(bytes: number[]): DERElement {
    return new DERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.octetString,
        new Uint8Array(bytes),
    );
}

function stored (bytes: number[]): AttributeTypeAndValue {
    return new AttributeTypeAndValue(type_, octetString(bytes));
}

function assertion (
    items: Parameters<typeof _encode_OctetSubstringAssertion>[0],
): DERElement {
    return _encode_OctetSubstringAssertion(items, DER);
}

describe("octetStringSubstringsMatch", () => {
    it("matches initial, any, and final substrings", () => {
        const value = stored([1, 2, 3, 4, 5]);
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
        const value = stored([1, 2, 3, 4, 5]);
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
        const value = stored([1, 2, 3, 4, 5]);
        expect(octetStringSubstringsMatch(
            assertion([{ initial: new Uint8Array([2, 3]) }]),
            value,
        )).toBe(false);
    });

    it("does not reuse octets already consumed", () => {
        const value = stored([1, 2, 3, 4]);
        expect(octetStringSubstringsMatch(
            assertion([
                { any_: new Uint8Array([1, 2]) },
                { any_: new Uint8Array([2, 3]) },
            ]),
            value,
        )).toBe(false);
        expect(octetStringSubstringsMatch(
            assertion([
                { any_: new Uint8Array([1, 2]) },
                { any_: new Uint8Array([3, 4]) },
            ]),
            value,
        )).toBe(true);
    });

    it("reads an octet-string filter component", () => {
        const filter: FilterItem_substrings_strings_Item[] = [
            { initial: octetString([1, 2]) },
            { final: octetString([5]) },
        ];
        expect(octetStringSubstringsMatch(filter, stored([1, 2, 3, 4, 5]))).toBe(true);
    });
});
