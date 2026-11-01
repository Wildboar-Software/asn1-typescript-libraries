import { ObjectIdentifier, type ASN1Element } from "@wildboar/asn1";
import { DER, _encodeNumericString } from "@wildboar/asn1/functional";
import {
    AttributeTypeAndValue,
} from "../../modules/InformationFramework/AttributeTypeAndValue.ta.mjs";
import { _encode_SubstringAssertion } from "../../modules/SelectedAttributeTypes/SubstringAssertion.ta.mjs";
import type { FilterItem_substrings_strings_Item } from "../../modules/DirectoryAbstractService/FilterItem-substrings-strings-Item.ta.mjs";
import numericStringSubstringsMatch from "./numericStringSubstringsMatch.mjs";

const type_ = ObjectIdentifier.fromParts([ 1, 1, 1, 1 ]);

function numeric (value: string): ASN1Element {
    return _encodeNumericString(value, DER);
}

function stored (value: string): AttributeTypeAndValue {
    return new AttributeTypeAndValue(type_, numeric(value));
}

function assertion (
    parts: { initial?: string; any_?: string; final?: string }[],
): ASN1Element {
    return _encode_SubstringAssertion(parts.map((part) => {
        if (part.initial !== undefined) {
            return { initial: { uTF8String: part.initial } };
        }
        if (part.any_ !== undefined) {
            return { any_: { uTF8String: part.any_ } };
        }
        return { final: { uTF8String: part.final ?? "" } };
    }), DER);
}

describe("numericStringSubstringsMatch", () => {
    const value = stored("1 2 3 4 5");

    it("removes spaces and matches successive pieces", () => {
        expect(numericStringSubstringsMatch(
            assertion([
                { initial: "1 2" },
                { any_: "3" },
                { final: "4  5" },
            ]),
            value,
        )).toBe(true);
        expect(numericStringSubstringsMatch(
            assertion([{ any_: "2 3" }]),
            stored("12 34"),
        )).toBe(true);
    });

    it("rejects a piece that is out of order or not in range", () => {
        expect(numericStringSubstringsMatch(
            assertion([{ initial: "2 3" }]),
            value,
        )).toBe(false);
        expect(numericStringSubstringsMatch(
            assertion([{ final: "1 2" }]),
            value,
        )).toBe(false);
        expect(numericStringSubstringsMatch(
            assertion([{ any_: "9 9" }]),
            value,
        )).toBe(false);
        // "34" is consumed by the first piece, so it cannot satisfy the second.
        expect(numericStringSubstringsMatch(
            assertion([{ any_: "3 4" }, { any_: "3 4" }]),
            value,
        )).toBe(false);
    });

    it("reads a numeric-string filter component", () => {
        const filter: FilterItem_substrings_strings_Item[] = [
            { initial: numeric("1 2") },
            { final: numeric("5") },
        ];
        expect(numericStringSubstringsMatch(filter, value)).toBe(true);
        expect(numericStringSubstringsMatch(
            [{ initial: numeric("5") }],
            value,
        )).toBe(false);
    });
});
