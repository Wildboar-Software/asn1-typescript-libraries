import {
    ASN1CharactersError,
    ObjectIdentifier,
    type ASN1Element,
} from "@wildboar/asn1";
import {
    DER,
    _encodeIA5String,
    _encodePrintableString,
} from "@wildboar/asn1/functional";
import {
    AttributeTypeAndValue,
} from "../../modules/InformationFramework/AttributeTypeAndValue.ta.mjs";
import {
    _encode_UnboundedDirectoryString,
} from "../../modules/SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import { _encode_SubstringAssertion } from "../../modules/SelectedAttributeTypes/SubstringAssertion.ta.mjs";
import { _encode_PostalAddress } from "../../modules/SelectedAttributeTypes/PostalAddress.ta.mjs";
import { _encode_TelephoneNumber } from "../../modules/SelectedAttributeTypes/TelephoneNumber.ta.mjs";
import {
    FacsimileTelephoneNumber,
    _encode_FacsimileTelephoneNumber,
} from "../../modules/SelectedAttributeTypes/FacsimileTelephoneNumber.ta.mjs";
import type { FilterItem_substrings_strings_Item as FilterSubstring } from "../../modules/DirectoryAbstractService/FilterItem-substrings-strings-Item.ta.mjs";
import { MATCH_FLAG_CONSTANT_TIME, MATCH_FLAG_VALUE_NORMALIZED } from "../../types/matching.mjs";
import caseExactSubstringsMatch from "./caseExactSubstringsMatch.mjs";
import caseIgnoreSubstringsMatch, {
    caseIgnoreSubstringsMatchTyped,
} from "./caseIgnoreSubstringsMatch.mjs";
import caseIgnoreIA5SubstringsMatch from "./caseIgnoreIA5SubstringsMatch.mjs";
import caseIgnoreListSubstringsMatch from "./caseIgnoreListSubstringsMatch.mjs";
import telephoneNumberSubstringsMatch from "./telephoneNumberSubstringsMatch.mjs";
import facsimileNumberSubstringsMatch from "./facsimileNumberSubstringsMatch.mjs";

const type_ = ObjectIdentifier.fromParts([ 1, 1, 1, 1 ]);

function utf8 (value: string): ASN1Element {
    return _encode_UnboundedDirectoryString({ uTF8String: value }, DER);
}

function stored (value: ASN1Element): AttributeTypeAndValue {
    return new AttributeTypeAndValue(type_, value);
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

describe("caseIgnoreSubstringsMatch", () => {
    const atav = stored(utf8("What are you looking at, you hockey puck?"));

    it("matches successive pieces and does not reuse them", () => {
        const matched = assertion([
            { initial: "what" },
            { any_: "looking" },
            { final: "puck?" },
        ]);
        expect(caseIgnoreSubstringsMatch(matched, atav)).toBe(true);
        expect(caseIgnoreSubstringsMatch(
            matched,
            atav,
            undefined,
            MATCH_FLAG_CONSTANT_TIME,
        )).toBe(true);
        expect(caseIgnoreSubstringsMatch(
            assertion([
                { any_: "abc" },
                { any_: "bcd" },
            ]),
            stored(utf8("abcbcd")),
        )).toBe(true);
        expect(caseIgnoreSubstringsMatch(
            assertion([
                { any_: "abc" },
                { any_: "bcd" },
            ]),
            stored(utf8("abcd")),
        )).toBe(false);
    });

    it("accepts directory-string filter components", () => {
        const filter: FilterSubstring[] = [
            { initial: _encodePrintableString("what", DER) },
            { any_: _encodePrintableString("looking", DER) },
            { final: utf8("puck?") },
        ];
        expect(caseIgnoreSubstringsMatch(filter, atav)).toBe(true);
    });

    it("throws when the assertion cannot be prepared and is UNDEFINED for a bad value", () => {
        expect(() => caseIgnoreSubstringsMatch(assertion([{ any_: "\uFFFD" }]), atav))
            .toThrow(ASN1CharactersError);
        expect(caseIgnoreSubstringsMatchTyped(
            [{ any_: "a" }],
            utf8("\uFFFD"),
        )).toBeUndefined();
        expect(caseIgnoreSubstringsMatch(assertion([]), atav)).toBeUndefined();
    });

    it("skips value preparation when the value is already normalized", () => {
        expect(caseIgnoreSubstringsMatchTyped(
            [{ initial: "a b" }],
            utf8("A  B"),
        )).toBe(true);
        expect(caseIgnoreSubstringsMatchTyped(
            [{ initial: "a b" }],
            utf8("A  B"),
            undefined,
            MATCH_FLAG_VALUE_NORMALIZED,
        )).toBe(false);
    });
});

describe("caseExactSubstringsMatch", () => {
    it("does not fold case", () => {
        const atav = stored(utf8("What"));
        expect(caseExactSubstringsMatch(assertion([{ initial: "What" }]), atav)).toBe(true);
        expect(caseExactSubstringsMatch(assertion([{ initial: "what" }]), atav)).toBe(false);
    });
});

describe("caseIgnoreIA5SubstringsMatch", () => {
    it("folds case on an IA5 filter component", () => {
        const filter: FilterSubstring[] = [
            { any_: _encodeIA5String("ELL", DER) },
        ];
        expect(caseIgnoreIA5SubstringsMatch(
            filter,
            stored(_encodeIA5String("Hello", DER)),
        )).toBe(true);
        expect(caseIgnoreIA5SubstringsMatch(
            assertion([{ any_: "xyz" }]),
            stored(_encodeIA5String("Hello", DER)),
        )).toBe(false);
    });
});

describe("telephoneNumberSubstringsMatch", () => {
    const atav = stored(_encode_TelephoneNumber("+17035551212", DER));

    it("ignores hyphens and spaces and keeps '+'", () => {
        expect(telephoneNumberSubstringsMatch(
            assertion([{ initial: "+1 703-555" }]),
            atav,
        )).toBe(true);
        const filter: FilterSubstring[] = [
            { initial: _encode_TelephoneNumber("+1 703-555", DER) },
        ];
        expect(telephoneNumberSubstringsMatch(filter, atav)).toBe(true);
        expect(telephoneNumberSubstringsMatch(
            assertion([{ initial: "1703" }]),
            atav,
        )).toBe(false);
    });
});

describe("facsimileNumberSubstringsMatch", () => {
    it("matches the telephone number and ignores parameters", () => {
        const value = _encode_FacsimileTelephoneNumber(
            new FacsimileTelephoneNumber("+1 703-555-1212"),
            DER,
        );
        expect(facsimileNumberSubstringsMatch(
            assertion([{ any_: "555-1212" }]),
            stored(value),
        )).toBe(true);
        expect(facsimileNumberSubstringsMatch(
            assertion([{ any_: "555-1213" }]),
            stored(value),
        )).toBe(false);
    });
});

describe("caseIgnoreListSubstringsMatch", () => {
    const atav = stored(_encode_PostalAddress([
        { uTF8String: "Main Street" },
        { uTF8String: "Springfield" },
    ], DER));

    it("matches within lines and does not cross a boundary", () => {
        expect(caseIgnoreListSubstringsMatch(
            assertion([
                { initial: "main" },
                { any_: "spring" },
                { final: "field" },
            ]),
            atav,
        )).toBe(true);
        expect(caseIgnoreListSubstringsMatch(
            assertion([{ any_: "tS" }]),
            atav,
        )).toBe(false);
        expect(caseIgnoreListSubstringsMatch(
            assertion([{ initial: "Spring" }]),
            atav,
        )).toBe(false);
    });

    it("reads a directory-string filter component", () => {
        const filter: FilterSubstring[] = [
            { initial: utf8("main") },
            { final: utf8("field") },
        ];
        expect(caseIgnoreListSubstringsMatch(filter, atav)).toBe(true);
    });
});
