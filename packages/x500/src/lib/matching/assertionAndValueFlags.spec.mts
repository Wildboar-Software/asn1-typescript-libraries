import {
    ASN1Construction,
    ASN1TagClass,
    ASN1UniversalType,
    DERElement,
    ObjectIdentifier,
    type ASN1Element,
} from "@wildboar/asn1";
import {
    DER,
    _encodeIA5String,
    _encodeInteger,
    _encodeNumericString,
    _encodePrintableString,
    _encodeSequenceOf,
    _encodeUTF8String,
} from "@wildboar/asn1/functional";
import {
    AttributeTypeAndValue,
} from "../modules/InformationFramework/AttributeTypeAndValue.ta.mjs";
import {
    _encode_UnboundedDirectoryString,
} from "../modules/SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import { _encode_SubstringAssertion } from "../modules/SelectedAttributeTypes/SubstringAssertion.ta.mjs";
import { _encode_OctetSubstringAssertion } from "../modules/SelectedAttributeTypes/OctetSubstringAssertion.ta.mjs";
import {
    DualStringSyntax,
    _encode_DualStringSyntax,
} from "../modules/AttributeCertificateDefinitions/DualStringSyntax.ta.mjs";
import {
    MATCH_FLAG_APPROXIMATE,
    MATCH_FLAG_ASSERTION_NORMALIZED,
    MATCH_FLAG_ASSERTION_VALIDATED,
    MATCH_FLAG_VALUE_VALIDATED,
} from "../types/matching.mjs";
import caseExactIA5Match from "./equality/caseExactIA5Match.mjs";
import caseExactMatch from "./equality/caseExactMatch.mjs";
import caseIgnoreIA5Match from "./equality/caseIgnoreIA5Match.mjs";
import caseIgnoreListMatch from "./equality/caseIgnoreListMatch.mjs";
import caseIgnoreMatch from "./equality/caseIgnoreMatch.mjs";
import directoryStringFirstComponentMatch from "./equality/directoryStringFirstComponentMatch.mjs";
import dnsNameMatch from "./equality/dnsNameMatch.mjs";
import dualStringMatch from "./equality/dualStringMatch.mjs";
import facsimileNumberMatch from "./equality/facsimileNumberMatch.mjs";
import intEmailMatch from "./equality/intEmailMatch.mjs";
import integerMatch from "./equality/integerMatch.mjs";
import jidMatch from "./equality/jidMatch.mjs";
import keywordMatch from "./equality/keywordMatch.mjs";
import numericStringMatch from "./equality/numericStringMatch.mjs";
import objectIdentifierMatch from "./equality/objectIdentifierMatch.mjs";
import sOAIdentifierMatch from "./equality/sOAIdentifierMatch.mjs";
import telephoneNumberMatch from "./equality/telephoneNumberMatch.mjs";
import uriMatch from "./equality/uriMatch.mjs";
import wordMatch from "./equality/wordMatch.mjs";
import caseExactOrderingMatch from "./ordering/caseExactOrderingMatch.mjs";
import caseIgnoreOrderingMatch from "./ordering/caseIgnoreOrderingMatch.mjs";
import integerOrderingMatch from "./ordering/integerOrderingMatch.mjs";
import numericStringOrderingMatch from "./ordering/numericStringOrderingMatch.mjs";
import caseExactSubstringsMatch from "./substring/caseExactSubstringsMatch.mjs";
import caseIgnoreSubstringsMatch from "./substring/caseIgnoreSubstringsMatch.mjs";
import numericStringSubstringsMatch from "./substring/numericStringSubstringsMatch.mjs";
import octetStringSubstringsMatch from "./substring/octetStringSubstringsMatch.mjs";
import { storedPrefixMatchTyped } from "./substring/storedPrefixMatch.mjs";

const attrType = ObjectIdentifier.fromParts([ 2, 5, 4, 3 ]);

function atav (el: ASN1Element): AttributeTypeAndValue {
    return new AttributeTypeAndValue(attrType, el);
}

function utf8 (value: string): ASN1Element {
    return _encode_UnboundedDirectoryString({ uTF8String: value }, DER);
}

function sequenceOf (elements: ASN1Element[]): ASN1Element {
    return _encodeSequenceOf<ASN1Element>(() => (el) => el, DER)(elements);
}

function substrings (
    parts: ({ initial: string } | { any_: string } | { final: string })[],
): ASN1Element {
    return _encode_SubstringAssertion(parts.map((part) => {
        if ("initial" in part) {
            return { initial: { uTF8String: part.initial } };
        }
        if ("any_" in part) {
            return { any_: { uTF8String: part.any_ } };
        }
        return { final: { uTF8String: part.final } };
    }), DER);
}

function primitive (tagNumber: ASN1UniversalType, bytes: number[]): DERElement {
    return new DERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        tagNumber,
        new Uint8Array(bytes),
    );
}

function dual (operation: string, object: string): ASN1Element {
    return _encode_DualStringSyntax(new DualStringSyntax(
        { uTF8String: operation },
        { uTF8String: object },
    ), DER);
}

const N = MATCH_FLAG_ASSERTION_NORMALIZED;
const AV = MATCH_FLAG_ASSERTION_VALIDATED;
const VV = MATCH_FLAG_VALUE_VALIDATED;

describe("MATCH_FLAG_ASSERTION_NORMALIZED", () => {
    it("skips string preparation of directory string assertions", () => {
        expect(caseIgnoreMatch(utf8("  HELLO  "), atav(utf8("hello")))).toBe(true);
        expect(caseIgnoreMatch(utf8("  HELLO  "), atav(utf8("hello")), undefined, N)).toBe(false);
        expect(caseIgnoreMatch(utf8("hello"), atav(utf8("  HELLO  ")), undefined, N)).toBe(true);

        expect(caseExactMatch(utf8("  Hello  "), atav(utf8("Hello")))).toBe(true);
        expect(caseExactMatch(utf8("  Hello  "), atav(utf8("Hello")), undefined, N)).toBe(false);
        expect(caseExactMatch(utf8("Hello"), atav(utf8(" Hello ")), undefined, N)).toBe(true);
    });

    it("skips string preparation of IA5 string assertions", () => {
        const ia5 = (s: string) => _encodeIA5String(s, DER);
        expect(caseIgnoreIA5Match(ia5("FOO"), atav(ia5("foo")))).toBe(true);
        expect(caseIgnoreIA5Match(ia5("FOO"), atav(ia5("foo")), undefined, N)).toBe(false);
        expect(caseIgnoreIA5Match(ia5("foo"), atav(ia5("FOO")), undefined, N)).toBe(true);

        expect(caseExactIA5Match(ia5(" foo "), atav(ia5("foo")))).toBe(true);
        expect(caseExactIA5Match(ia5(" foo "), atav(ia5("foo")), undefined, N)).toBe(false);
    });

    it("skips string preparation of each line of a caseIgnoreListMatch assertion", () => {
        const list = (lines: string[]) => sequenceOf(lines.map(utf8));
        expect(caseIgnoreListMatch(list([ "ONE", "Two" ]), atav(list([ "one", "two" ])))).toBe(true);
        expect(caseIgnoreListMatch(list([ "ONE", "Two" ]), atav(list([ "one", "two" ])), undefined, N)).toBe(false);
        expect(caseIgnoreListMatch(list([ "one", "two" ]), atav(list([ "ONE", "Two" ])), undefined, N)).toBe(true);
    });

    it("skips string preparation of a directoryStringFirstComponentMatch assertion", () => {
        const value = sequenceOf([ utf8("hello"), utf8("ignored") ]);
        expect(directoryStringFirstComponentMatch(utf8("HELLO"), atav(value))).toBe(true);
        expect(directoryStringFirstComponentMatch(utf8("HELLO"), atav(value), undefined, N)).toBe(false);
        expect(directoryStringFirstComponentMatch(utf8("hello"), atav(value), undefined, N)).toBe(true);
    });

    it("skips removal of insignificant characters from numeric and telephone assertions", () => {
        const numeric = (s: string) => _encodeNumericString(s, DER);
        expect(numericStringMatch(numeric("12 34"), atav(numeric("1234")))).toBe(true);
        expect(numericStringMatch(numeric("12 34"), atav(numeric("1234")), undefined, N)).toBe(false);
        expect(numericStringMatch(numeric("1234"), atav(numeric("12 34")), undefined, N)).toBe(true);

        const phone = (s: string) => _encodePrintableString(s, DER);
        expect(telephoneNumberMatch(phone("+1 555-0100"), atav(phone("+15550100")))).toBe(true);
        expect(telephoneNumberMatch(phone("+1 555-0100"), atav(phone("+15550100")), undefined, N)).toBe(false);
        expect(telephoneNumberMatch(phone("+15550100"), atav(phone("+1 555-0100")), undefined, N)).toBe(true);

        expect(facsimileNumberMatch(phone("+1 555-0100"), atav(phone("+15550100")))).toBe(true);
        expect(facsimileNumberMatch(phone("+1 555-0100"), atav(phone("+15550100")), undefined, N)).toBe(false);
        expect(facsimileNumberMatch(phone("+15550100"), atav(phone("+1 555-0100")), undefined, N)).toBe(true);
    });

    it("skips normalization of URI, DNS name, email, and JID assertions", () => {
        const u = (s: string) => _encodeUTF8String(s, DER);
        expect(uriMatch(u("HTTP://Example.com:80"), atav(u("http://example.com/")))).toBe(true);
        expect(uriMatch(u("HTTP://Example.com:80"), atav(u("http://example.com/")), undefined, N)).toBe(false);
        expect(uriMatch(u("http://example.com/"), atav(u("HTTP://Example.com:80")), undefined, N)).toBe(true);

        expect(dnsNameMatch(u("WWW.Example.COM"), atav(u("www.example.com")))).toBe(true);
        expect(dnsNameMatch(u("WWW.Example.COM"), atav(u("www.example.com")), undefined, N)).toBe(false);
        expect(dnsNameMatch(u("www.example.com"), atav(u("WWW.Example.COM")), undefined, N)).toBe(true);

        expect(intEmailMatch(u("User@Example.COM"), atav(u("user@example.com")))).toBe(true);
        expect(intEmailMatch(u("User@Example.COM"), atav(u("user@example.com")), undefined, N)).toBe(false);
        expect(intEmailMatch(u("user@example.com"), atav(u("User@Example.COM")), undefined, N)).toBe(true);

        expect(jidMatch(u("User@Example.COM/res"), atav(u("user@example.com/res")))).toBe(true);
        expect(jidMatch(u("User@Example.COM/res"), atav(u("user@example.com/res")), undefined, N)).toBe(false);
        expect(jidMatch(u("user@example.com/res"), atav(u("User@Example.COM/res")), undefined, N)).toBe(true);
    });

    it("skips preparation of keyword and word assertions", () => {
        expect(keywordMatch(utf8(" banana "), atav(utf8("apple banana")))).toBe(true);
        expect(keywordMatch(utf8(" banana "), atav(utf8("apple banana")), undefined, N)).toBe(false);
        expect(keywordMatch(utf8("BANANA"), atav(utf8("apple banana")), undefined, N)).toBe(true);

        expect(wordMatch(utf8(" banana "), atav(utf8("apple banana")))).toBe(true);
        expect(wordMatch(utf8(" banana "), atav(utf8("apple banana")), undefined, N)).toBe(false);
        expect(wordMatch(utf8("BANANA"), atav(utf8("apple banana")), undefined, N)).toBe(true);
    });

    it("skips preparation of ordering assertions", () => {
        // Prepared, " B" is "b", which is greater than the stored "a".
        // Unprepared, the leading space sorts before "a".
        expect(caseIgnoreOrderingMatch(utf8(" B"), atav(utf8("a")))).toBe(true);
        expect(caseIgnoreOrderingMatch(utf8(" B"), atav(utf8("a")), undefined, N)).toBe(false);
        expect(caseIgnoreOrderingMatch(utf8("b"), atav(utf8(" A")), undefined, N)).toBe(true);

        expect(caseExactOrderingMatch(utf8(" b"), atav(utf8("a")))).toBe(true);
        expect(caseExactOrderingMatch(utf8(" b"), atav(utf8("a")), undefined, N)).toBe(false);

        const numeric = (s: string) => _encodeNumericString(s, DER);
        expect(numericStringOrderingMatch(numeric(" 2"), atav(numeric("1")))).toBe(true);
        expect(numericStringOrderingMatch(numeric(" 2"), atav(numeric("1")), undefined, N)).toBe(false);
    });

    it("skips preparation of substrings assertions", () => {
        const value = atav(utf8("Hello World"));
        expect(caseIgnoreSubstringsMatch(substrings([ { initial: "HELLO" } ]), value)).toBe(true);
        expect(caseIgnoreSubstringsMatch(substrings([ { initial: "HELLO" } ]), value, undefined, N)).toBe(false);
        expect(caseIgnoreSubstringsMatch(substrings([ { initial: "hello" } ]), value, undefined, N)).toBe(true);

        expect(caseExactSubstringsMatch(substrings([ { final: "World " } ]), value)).toBe(true);
        expect(caseExactSubstringsMatch(substrings([ { final: "World " } ]), value, undefined, N)).toBe(false);

        const numeric = atav(_encodeNumericString("12 34 56", DER));
        expect(numericStringSubstringsMatch(substrings([ { any_: "3 4" } ]), numeric)).toBe(true);
        expect(numericStringSubstringsMatch(substrings([ { any_: "3 4" } ]), numeric, undefined, N)).toBe(false);
        expect(numericStringSubstringsMatch(substrings([ { any_: "34" } ]), numeric, undefined, N)).toBe(true);
    });

    it("skips preparation of the storedPrefixMatch assertion", () => {
        expect(storedPrefixMatchTyped("  HELLO world", "hello")).toBe(true);
        expect(storedPrefixMatchTyped("  HELLO world", "hello", N)).toBe(false);
        expect(storedPrefixMatchTyped("hello world", "HELLO", N)).toBe(true);
    });
});

describe("MATCH_FLAG_ASSERTION_VALIDATED", () => {
    it("skips validation of INTEGER assertions", () => {
        const padded = primitive(ASN1UniversalType.integer, [ 0x00, 0x05 ]);
        const five = atav(_encodeInteger(5, DER));
        expect(() => integerMatch(padded, five)).toThrow();
        expect(integerMatch(padded, five, undefined, AV)).toBe(false);
        expect(integerMatch(_encodeInteger(5, DER), five, undefined, AV)).toBe(true);

        expect(() => integerOrderingMatch(padded, five)).toThrow();
        expect(() => integerOrderingMatch(padded, five, undefined, AV)).not.toThrow();
        expect(integerOrderingMatch(_encodeInteger(6, DER), five, undefined, AV)).toBe(true);
    });

    it("skips validation of OBJECT IDENTIFIER assertions", () => {
        const padded = primitive(ASN1UniversalType.objectIdentifier, [ 0x2A, 0x80, 0x03 ]);
        const value = atav(primitive(ASN1UniversalType.objectIdentifier, [ 0x2A, 0x03 ]));
        expect(() => objectIdentifierMatch(padded, value)).toThrow();
        expect(objectIdentifierMatch(padded, value, undefined, AV)).toBe(false);
    });

    it("skips the prohibited-character check of dualStringMatch assertions", () => {
        const bad = dual("read\uFFFD", "file");
        expect(() => dualStringMatch(bad, atav(dual("read", "file")))).toThrow();
        expect(dualStringMatch(bad, atav(dual("read", "file")), undefined, AV)).toBe(false);
    });

    it("skips checking that a sOAIdentifierMatch assertion is NULL", () => {
        const notNull = _encodeInteger(1, DER);
        const value = atav(_encodeInteger(1, DER));
        expect(() => sOAIdentifierMatch(notNull, value)).toThrow();
        expect(() => sOAIdentifierMatch(notNull, value, undefined, AV)).not.toThrow();
    });

    it("still rejects an empty keyword or word assertion", () => {
        const empty = utf8("");
        const value = atav(utf8("apple"));
        expect(() => keywordMatch(empty, value, undefined, N | AV)).toThrow();
        expect(() => wordMatch(empty, value, undefined, N | AV)).toThrow();
    });

    it("skips anchor checks of substrings assertions", () => {
        const value = atav(utf8("Hello World"));
        const twoInitials = substrings([ { initial: "hello" }, { initial: "world" } ]);
        expect(() => caseIgnoreSubstringsMatch(twoInitials, value)).toThrow();
        expect(caseIgnoreSubstringsMatch(twoInitials, value, undefined, AV)).toBe(false);

        const finalFirst = substrings([ { final: "world" }, { any_: "hello" } ]);
        expect(() => caseIgnoreSubstringsMatch(finalFirst, value)).toThrow();
        expect(() => caseIgnoreSubstringsMatch(finalFirst, value, undefined, AV)).not.toThrow();

        const octets = atav(primitive(ASN1UniversalType.octetString, [ 1, 2, 3 ]));
        const twoFinals = _encode_OctetSubstringAssertion([
            { final: new Uint8Array([ 3 ]) },
            { final: new Uint8Array([ 2 ]) },
        ], DER);
        expect(() => octetStringSubstringsMatch(twoFinals, octets)).toThrow();
        expect(octetStringSubstringsMatch(twoFinals, octets, undefined, AV)).toBe(true);
    });

    it("still rejects empty substrings pieces", () => {
        const value = atav(utf8("Hello World"));
        const emptyPiece = substrings([ { initial: "hello" }, { any_: "" } ]);
        expect(() => caseIgnoreSubstringsMatch(emptyPiece, value, undefined, N | AV)).toThrow();

        const octets = atav(primitive(ASN1UniversalType.octetString, [ 1, 2, 3 ]));
        const emptyOctets = _encode_OctetSubstringAssertion([
            { initial: new Uint8Array([ 1 ]) },
            { any_: new Uint8Array(0) },
        ], DER);
        expect(() => octetStringSubstringsMatch(emptyOctets, octets, undefined, AV)).toThrow();
    });
});

describe("MATCH_FLAG_VALUE_VALIDATED", () => {
    it("skips validation of stored INTEGERs in integerOrderingMatch", () => {
        const padded = atav(primitive(ASN1UniversalType.integer, [ 0x00, 0x05 ]));
        expect(integerOrderingMatch(_encodeInteger(10, DER), padded)).toBeUndefined();
        expect(integerOrderingMatch(_encodeInteger(10, DER), padded, undefined, VV)).toBe(false);
    });

    it("skips validation of stored INTEGERs in approximate integerMatch", () => {
        const padded = atav(primitive(ASN1UniversalType.integer, [ 0x00, 0x05 ]));
        const four = _encodeInteger(4, DER);
        expect(integerMatch(four, padded, undefined, MATCH_FLAG_APPROXIMATE)).toBeUndefined();
        expect(integerMatch(four, padded, undefined, MATCH_FLAG_APPROXIMATE | VV)).toBe(true);
    });

    it("skips the prohibited-character check of stored dualStringMatch values", () => {
        const bad = atav(dual("read\uFFFD", "file"));
        expect(dualStringMatch(dual("read\uFFFD", "file"), bad, undefined, AV)).toBeUndefined();
        expect(dualStringMatch(dual("read\uFFFD", "file"), bad, undefined, AV | VV)).toBe(true);
    });
});
