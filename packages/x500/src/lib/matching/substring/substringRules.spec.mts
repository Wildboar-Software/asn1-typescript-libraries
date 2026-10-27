import type { ASN1Element } from "@wildboar/asn1";
import { ObjectIdentifier } from "@wildboar/asn1";
import {
    DER,
    _encodeIA5String,
    _encodeNumericString,
    _encodeOctetString,
    _encodePrintableString,
} from "@wildboar/asn1/functional";
import { FilterItem_substrings } from "../../modules/DirectoryAbstractService/FilterItem-substrings.ta.mjs";
import type { FilterItem_substrings_strings_Item } from "../../modules/DirectoryAbstractService/FilterItem-substrings-strings-Item.ta.mjs";
import { Attribute } from "../../modules/InformationFramework/Attribute.ta.mjs";
import {
    FacsimileTelephoneNumber,
    _encode_FacsimileTelephoneNumber,
} from "../../modules/SelectedAttributeTypes/FacsimileTelephoneNumber.ta.mjs";
import { _encode_OctetSubstringAssertion } from "../../modules/SelectedAttributeTypes/OctetSubstringAssertion.ta.mjs";
import { _encode_PostalAddress } from "../../modules/SelectedAttributeTypes/PostalAddress.ta.mjs";
import { _encode_SubstringAssertion } from "../../modules/SelectedAttributeTypes/SubstringAssertion.ta.mjs";
import type { SubstringAssertion } from "../../modules/SelectedAttributeTypes/SubstringAssertion.ta.mjs";
import { _encode_UnboundedDirectoryString } from "../../modules/SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import {
    caseExactSubstringsMatch,
    caseExactSubstringsFromFilter,
} from "./caseExactSubstringsMatch.mjs";
import {
    caseIgnoreIA5SubstringsMatch,
    caseIgnoreIA5SubstringsFromFilter,
} from "./caseIgnoreIA5SubstringsMatch.mjs";
import {
    caseIgnoreListSubstringsMatch,
    caseIgnoreListSubstringsMatchTyped,
    caseIgnoreListSubstringsFromFilter,
} from "./caseIgnoreListSubstringsMatch.mjs";
import {
    caseIgnoreSubstringsMatch,
    caseIgnoreSubstringsMatchTyped,
    caseIgnoreSubstringsFromFilter,
} from "./caseIgnoreSubstringsMatch.mjs";
import {
    facsimileNumberSubstringsMatch,
    facsimileNumberSubstringsFromFilter,
} from "./facsimileNumberSubstringsMatch.mjs";
import {
    numericStringSubstringsMatch,
    numericStringSubstringsFromFilter,
} from "./numericStringSubstringsMatch.mjs";
import {
    octetStringSubstringsMatch,
    octetStringSubstringsMatchTyped,
    octetStringSubstringsFromFilter,
} from "./octetStringSubstringsMatch.mjs";
import {
    telephoneNumberSubstringsMatch,
    telephoneNumberSubstringsFromFilter,
} from "./telephoneNumberSubstringsMatch.mjs";

const TYPE = ObjectIdentifier.fromParts([ 1, 2, 3 ]);

function utf8 (value: string): ASN1Element {
    return _encode_UnboundedDirectoryString({ uTF8String: value }, DER);
}

function filterItem (
    strings: FilterItem_substrings_strings_Item[],
): FilterItem_substrings {
    return new FilterItem_substrings(TYPE, strings);
}

describe("substring assertion rules", () => {
    const anyEll: SubstringAssertion = [{ any_: { uTF8String: "ell" } }];

    it("accepts an encoded assertion, a directory string, and a native string", () => {
        const encodedAssertion = _encode_SubstringAssertion(anyEll, DER);
        expect(caseIgnoreSubstringsMatch(encodedAssertion, "Hello")).toBe(true);
        expect(caseIgnoreSubstringsMatch(anyEll, { uTF8String: "Hello" })).toBe(true);
        expect(caseIgnoreSubstringsMatch(anyEll, utf8("Hello"))).toBe(true);
        expect(caseIgnoreSubstringsMatch(anyEll, "Hello")).toBe(true);
        expect(caseIgnoreSubstringsMatchTyped(
            [{ kind: "any", value: "ell" }],
            "Hello",
        )).toBe(true);
        expect(caseIgnoreSubstringsMatch(
            [{ any_: { uTF8String: "xyz" } }],
            "Hello",
        )).toBe(false);
    });

    it("matches octet pieces from an element, a decoded assertion, or bytes", () => {
        const stored = new Uint8Array([ 1, 2, 3, 4 ]);
        const pieces = [{ any_: new Uint8Array([ 2, 3 ]) }];
        expect(octetStringSubstringsMatch(pieces, stored)).toBe(true);
        expect(octetStringSubstringsMatch(
            _encode_OctetSubstringAssertion(pieces, DER),
            _encodeOctetString(stored, DER),
        )).toBe(true);
        expect(octetStringSubstringsMatchTyped(
            [{ kind: "any", value: new Uint8Array([ 2, 3 ]) }],
            stored,
        )).toBe(true);
        expect(octetStringSubstringsMatch(
            [{ any_: new Uint8Array([ 9 ]) }],
            stored,
        )).toBe(false);
    });

    it("matches a string list from lines, a postal address, or an element", () => {
        const lines = [ "Main Street", "City" ];
        const pieces: SubstringAssertion = [
            { any_: { uTF8String: "street" } },
            { any_: { uTF8String: "city" } },
        ];
        expect(caseIgnoreListSubstringsMatch(pieces, lines)).toBe(true);
        expect(caseIgnoreListSubstringsMatch(
            pieces,
            [ { uTF8String: "Main Street" }, { uTF8String: "City" } ],
        )).toBe(true);
        expect(caseIgnoreListSubstringsMatch(
            _encode_SubstringAssertion(pieces, DER),
            _encode_PostalAddress(
                [ { uTF8String: "Main Street" }, { uTF8String: "City" } ],
                DER,
            ),
        )).toBe(true);
        expect(caseIgnoreListSubstringsMatchTyped(
            [
                { kind: "any", value: "street" },
                { kind: "any", value: "city" },
            ],
            lines,
        )).toBe(true);
    });

    it("converts directory-string, numeric, telephone, facsimile, IA5, and octet filters", () => {
        expect(caseIgnoreSubstringsFromFilter(filterItem([
            { initial: utf8("Ab") },
            { any_: utf8("cd") },
            { final: utf8("Ef") },
        ]))).toEqual([
            { initial: { uTF8String: "Ab" } },
            { any_: { uTF8String: "cd" } },
            { final: { uTF8String: "Ef" } },
        ]);
        expect(caseExactSubstringsFromFilter(filterItem([
            { any_: utf8("Ab") },
        ]))).toEqual([
            { any_: { uTF8String: "Ab" } },
        ]);
        expect(numericStringSubstringsFromFilter(filterItem([
            { any_: _encodeNumericString("12 3", DER) },
        ]))).toEqual([
            { any_: { printableString: "12 3" } },
        ]);
        expect(telephoneNumberSubstringsFromFilter(filterItem([
            { initial: _encodePrintableString("555-1212", DER) },
        ]))).toEqual([
            { initial: { printableString: "555-1212" } },
        ]);
        expect(facsimileNumberSubstringsFromFilter(filterItem([
            {
                any_: _encode_FacsimileTelephoneNumber(
                    new FacsimileTelephoneNumber("555-0100", undefined),
                    DER,
                ),
            },
        ]))).toEqual([
            { any_: { printableString: "555-0100" } },
        ]);
        expect(facsimileNumberSubstringsFromFilter(filterItem([
            { any_: _encodePrintableString("1-2", DER) },
        ]))).toEqual([
            { any_: { printableString: "1-2" } },
        ]);
        expect(caseIgnoreIA5SubstringsFromFilter(filterItem([
            { any_: _encodeIA5String("Abc", DER) },
        ]))).toEqual([
            { any_: { uTF8String: "Abc" } },
        ]);
        expect(octetStringSubstringsFromFilter(filterItem([
            { initial: _encodeOctetString(new Uint8Array([ 1, 2 ]), DER) },
            { final: _encodeOctetString(new Uint8Array([ 3 ]), DER) },
        ]))).toEqual([
            { initial: new Uint8Array([ 1, 2 ]) },
            { final: new Uint8Array([ 3 ]) },
        ]);
    });

    it("keeps one postal-address line and rejects a multi-line component", () => {
        expect(caseIgnoreListSubstringsFromFilter(filterItem([
            {
                any_: _encode_PostalAddress(
                    [ { uTF8String: "Main" } ],
                    DER,
                ),
            },
        ]))).toEqual([
            { any_: { uTF8String: "Main" } },
        ]);
        expect(caseIgnoreListSubstringsFromFilter(filterItem([
            { any_: utf8("Main") },
        ]))).toEqual([
            { any_: { uTF8String: "Main" } },
        ]);
        expect(caseIgnoreListSubstringsFromFilter(filterItem([
            {
                any_: _encode_PostalAddress(
                    [ { uTF8String: "Main" }, { uTF8String: "City" } ],
                    DER,
                ),
            },
        ]))).toBeUndefined();
    });

    it("copies control and ignores it while matching", () => {
        const control = new Attribute(TYPE, [ utf8("x") ], undefined);
        const item = filterItem([
            { control },
            { initial: utf8("ab") },
            { any_: utf8("cd") },
        ]);
        const assertion = caseIgnoreSubstringsFromFilter(item);
        expect(assertion?.[0]).toEqual({ control });
        expect(assertion?.[1]).toEqual({ initial: { uTF8String: "ab" } });
        expect(caseIgnoreSubstringsMatch(assertion!, "abcd")).toBe(true);
        expect(caseIgnoreSubstringsMatch(item, "abcd")).toBe(true);
        expect(caseIgnoreSubstringsMatch(filterItem([
            { initial: utf8("a") },
            { initial: utf8("b") },
        ]))).toBeUndefined();
    });

    it("rejects an empty filter, an empty piece, a second initial, and a bad component", () => {
        expect(caseIgnoreSubstringsFromFilter(filterItem([]))).toBeUndefined();
        expect(caseIgnoreSubstringsFromFilter(filterItem([
            { initial: utf8("") },
        ]))).toBeUndefined();
        expect(caseIgnoreSubstringsFromFilter(filterItem([
            { initial: utf8("a") },
            { initial: utf8("b") },
        ]))).toBeUndefined();
        expect(caseIgnoreSubstringsFromFilter(filterItem([
            { final: utf8("a") },
            { control: new Attribute(TYPE, [], undefined) },
        ]))).toBeUndefined();
        expect(caseIgnoreSubstringsFromFilter(filterItem([
            utf8("no-choice"),
        ]))).toBeUndefined();
        expect(numericStringSubstringsFromFilter(filterItem([
            { any_: utf8("12") },
        ]))).toBeUndefined();
        expect(octetStringSubstringsFromFilter(filterItem([
            { any_: _encodeOctetString(new Uint8Array(), DER) },
        ]))).toBeUndefined();
        expect(caseIgnoreSubstringsMatch([], "Hello")).toBe(false);
        expect(caseIgnoreSubstringsMatch([{ any_: "" }], "Hello")).toBe(false);
        expect(caseIgnoreSubstringsMatch([
            { initial: "a" },
            { initial: "b" },
        ], "ab")).toBe(false);
    });

    it("consumes pieces in order and does not let them overlap", () => {
        const pieces = [
            { any_: "abc" },
            { any_: "bcd" },
        ];
        expect(caseIgnoreSubstringsMatch(pieces, "abcbcd")).toBe(true);
        expect(caseIgnoreSubstringsMatch(pieces, "abcd")).toBe(false);
        expect(caseIgnoreSubstringsMatch([
            { initial: "abc" },
            { any_: "ab" },
        ], "abcab")).toBe(true);
        expect(caseIgnoreSubstringsMatch([
            { initial: "abc" },
            { any_: "bc" },
        ], "abc")).toBe(false);
        expect(caseExactSubstringsMatch([
            { any_: "abc" },
            { any_: "bcd" },
        ], "abcd")).toBe(false);
    });

    it("prepares case, spaces, and hyphens the way the equality rules do", () => {
        expect(caseIgnoreSubstringsMatch(
            [{ any_: "hello  world" }],
            "Hello World",
        )).toBe(true);
        expect(caseIgnoreSubstringsMatch(
            [{ any_: "strasse" }],
            "Straße",
        )).toBe(true);
        expect(caseExactSubstringsMatch(
            [{ any_: "ell" }],
            "HELLO",
        )).toBe(false);
        expect(caseExactSubstringsMatch(
            [{ any_: "ELL" }],
            "HELLO",
        )).toBe(true);
        expect(caseIgnoreIA5SubstringsMatch(
            [{ any_: { uTF8String: "abc" } }],
            "ABC",
        )).toBe(true);
        expect(numericStringSubstringsMatch(
            [{ initial: "1 2" }, { final: "4 5" }],
            "1 2 3 4 5",
        )).toBe(true);
        expect(numericStringSubstringsMatch(
            [{ any_: "   " }],
            "123",
        )).toBe(false);
        expect(telephoneNumberSubstringsMatch(
            [{ any_: "555 12" }],
            "555-1212",
        )).toBe(true);
        expect(facsimileNumberSubstringsMatch(
            [{ any_: "5551212" }],
            "555-1212",
        )).toBe(true);
        expect(facsimileNumberSubstringsMatch(
            [{ any_: { printableString: "555" } }],
            new FacsimileTelephoneNumber("555-0100", undefined),
        )).toBe(true);
    });

    it("keeps a list piece inside one postal-address line", () => {
        const lines = [ "Main Street", "City" ];
        expect(caseIgnoreListSubstringsMatch(
            [{ any_: "streetcity" }],
            lines,
        )).toBe(false);
        expect(caseIgnoreListSubstringsMatch(
            [{ any_: "street" }, { any_: "city" }],
            lines,
        )).toBe(true);
        expect(caseIgnoreListSubstringsMatch(
            [{ initial: "main" }],
            lines,
        )).toBe(true);
        expect(caseIgnoreListSubstringsMatch(
            [{ final: "city" }],
            lines,
        )).toBe(true);
        expect(caseIgnoreListSubstringsMatch(
            [{ final: "street" }],
            lines,
        )).toBe(false);
        expect(caseIgnoreListSubstringsMatch(
            [{ initial: "Main" }, { any_: "Main" }],
            [ "Main Street" ],
        )).toBe(false);
    });
});
