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
    _encodeNumericString,
    _encodePrintableString,
} from "@wildboar/asn1/functional";
import {
    AttributeTypeAndValue,
} from "../modules/InformationFramework/AttributeTypeAndValue.ta.mjs";
import {
    _encode_UnboundedDirectoryString,
} from "../modules/SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import { _encode_SubstringAssertion } from "../modules/SelectedAttributeTypes/SubstringAssertion.ta.mjs";
import { _encode_PostalAddress } from "../modules/SelectedAttributeTypes/PostalAddress.ta.mjs";
import type {
    FilterItem_substrings_strings_Item as FilterSubstring,
} from "../modules/DirectoryAbstractService/FilterItem-substrings-strings-Item.ta.mjs";
import {
    MATCH_FLAG_ASSERTION_NORMALIZED,
    MATCH_FLAG_CONSTANT_TIME,
    MATCH_FLAG_VALUE_NORMALIZED,
    type Matcher,
} from "../types/matching.mjs";
import * as equality from "./equality/index.mjs";
import * as ordering from "./ordering/index.mjs";
import * as substring from "./substring/index.mjs";

const type_ = ObjectIdentifier.fromParts([ 1, 1, 1, 1 ]);

function stored (value: ASN1Element): AttributeTypeAndValue {
    return new AttributeTypeAndValue(type_, value);
}

function utf8 (value: string): ASN1Element {
    return _encode_UnboundedDirectoryString({ uTF8String: value }, DER);
}

function ia5 (value: string): ASN1Element {
    return _encodeIA5String(value, DER);
}

function numeric (value: string): ASN1Element {
    return _encodeNumericString(value, DER);
}

function printable (value: string): ASN1Element {
    return _encodePrintableString(value, DER);
}

function postal (lines: string[]): ASN1Element {
    return _encode_PostalAddress(lines.map((line) => ({ uTF8String: line })), DER);
}

function sequence (...components: ASN1Element[]): ASN1Element {
    const el = new DERElement(
        ASN1TagClass.universal,
        ASN1Construction.constructed,
        ASN1UniversalType.sequence,
    );
    el.sequence = components;
    return el;
}

function pieces (
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

interface NormalizationCase {
    readonly matcher: Matcher;
    readonly decode: (el: ASN1Element) => unknown;
    readonly normalize: (assertion: any, el?: ASN1Element) => unknown;
    /** An assertion that only matches `value` after normalization. */
    readonly raw: ASN1Element;
    /** The encoding of `raw` after normalization. */
    readonly normalized: ASN1Element;
    readonly value: ASN1Element;
}

const cases: Record<string, NormalizationCase> = {
    caseIgnoreMatch: {
        matcher: equality.caseIgnoreMatch,
        decode: equality.decodeCaseIgnoreMatchAssertion,
        normalize: equality.normalizeCaseIgnoreMatchAssertion,
        raw: utf8("  DUNDEE  "),
        normalized: utf8("dundee"),
        value: utf8("Dundee"),
    },
    caseExactMatch: {
        matcher: equality.caseExactMatch,
        decode: equality.decodeCaseExactMatchAssertion,
        normalize: equality.normalizeCaseExactMatchAssertion,
        raw: utf8("  Dundee  "),
        normalized: utf8("Dundee"),
        value: utf8("Dundee"),
    },
    caseIgnoreIA5Match: {
        matcher: equality.caseIgnoreIA5Match,
        decode: equality.decodeCaseIgnoreIA5MatchAssertion,
        normalize: equality.normalizeCaseIgnoreIA5MatchAssertion,
        raw: ia5(" FOO  bar "),
        normalized: ia5("foo bar"),
        value: ia5("foo BAR"),
    },
    caseExactIA5Match: {
        matcher: equality.caseExactIA5Match,
        decode: equality.decodeCaseExactIA5MatchAssertion,
        normalize: equality.normalizeCaseExactIA5MatchAssertion,
        raw: ia5(" Foo  bar "),
        normalized: ia5("Foo bar"),
        value: ia5("Foo bar"),
    },
    caseIgnoreListMatch: {
        matcher: equality.caseIgnoreListMatch,
        decode: equality.decodeCaseIgnoreListMatchAssertion,
        normalize: equality.normalizeCaseIgnoreListMatchAssertion,
        raw: postal([ "  Main ST ", "SPRINGFIELD" ]),
        normalized: postal([ "main st", "springfield" ]),
        value: postal([ "Main St", "Springfield" ]),
    },
    directoryStringFirstComponentMatch: {
        matcher: equality.directoryStringFirstComponentMatch,
        decode: equality.decodeDirectoryStringFirstComponentMatchAssertion,
        normalize: equality.normalizeDirectoryStringFirstComponentMatchAssertion,
        raw: utf8(" FOO "),
        normalized: utf8("foo"),
        value: sequence(utf8("Foo"), utf8("ignored")),
    },
    numericStringMatch: {
        matcher: equality.numericStringMatch,
        decode: equality.decodeNumericStringMatchAssertion,
        normalize: equality.normalizeNumericStringMatchAssertion,
        raw: numeric("123 456"),
        normalized: numeric("123456"),
        value: numeric("12 3456"),
    },
    telephoneNumberMatch: {
        matcher: equality.telephoneNumberMatch,
        decode: equality.decodeTelephoneNumberMatchAssertion,
        normalize: equality.normalizeTelephoneNumberMatchAssertion,
        raw: printable("+1 555-0100"),
        normalized: printable("+15550100"),
        value: printable("+1-555-0100"),
    },
    facsimileNumberMatch: {
        matcher: equality.facsimileNumberMatch,
        decode: equality.decodeFacsimileNumberMatchAssertion,
        normalize: equality.normalizeFacsimileNumberMatchAssertion,
        raw: printable("+1 555-0100"),
        normalized: printable("+15550100"),
        value: printable("+1-555-0100"),
    },
    uriMatch: {
        matcher: equality.uriMatch,
        decode: equality.decodeUriMatchAssertion,
        normalize: equality.normalizeUriMatchAssertion,
        raw: utf8("HTTP://Example.COM:80/a/./b"),
        normalized: utf8("http://example.com/a/b"),
        value: utf8("http://example.com/a/b"),
    },
    keywordMatch: {
        matcher: equality.keywordMatch,
        decode: equality.decodeKeywordMatchAssertion,
        normalize: equality.normalizeKeywordMatchAssertion,
        raw: utf8(" Dundee "),
        normalized: utf8("DUNDEE"),
        value: utf8("visit dundee today"),
    },
    wordMatch: {
        matcher: equality.wordMatch,
        decode: equality.decodeWordMatchAssertion,
        normalize: equality.normalizeWordMatchAssertion,
        raw: utf8(" Dundee "),
        normalized: utf8("DUNDEE"),
        value: utf8("visit dundee today"),
    },
    dnsNameMatch: {
        matcher: equality.dnsNameMatch,
        decode: equality.decodeDnsNameMatchAssertion,
        normalize: equality.normalizeDnsNameMatchAssertion,
        raw: utf8(" WWW.Example.COM "),
        normalized: utf8("www.example.com"),
        value: utf8("www.example.com"),
    },
    jidMatch: {
        // Library API/precondition coverage, not a JID conformance fixture:
        // the generic negative test deliberately supplies UNPREPARED data with
        // ASSERTION_NORMALIZED, violating that optimization flag's precondition.
        matcher: equality.jidMatch,
        decode: equality.decodeJidMatchAssertion,
        normalize: equality.normalizeJidMatchAssertion,
        raw: utf8("User@Example.COM/Res"),
        normalized: utf8("user@example.com/Res"),
        value: utf8("user@example.com/Res"),
    },
    intEmailMatch: {
        matcher: equality.intEmailMatch,
        decode: equality.decodeIntEmailMatchAssertion,
        normalize: equality.normalizeIntEmailMatchAssertion,
        raw: utf8("Alice@Example.COM"),
        normalized: utf8("alice@example.com"),
        value: utf8("alice@example.com"),
    },
    caseIgnoreOrderingMatch: {
        matcher: ordering.caseIgnoreOrderingMatch,
        decode: ordering.decodeCaseIgnoreOrderingMatchAssertion,
        normalize: ordering.normalizeCaseIgnoreOrderingMatchAssertion,
        raw: utf8(" ZEBRA "),
        normalized: utf8("zebra"),
        value: utf8("apple"),
    },
    caseExactOrderingMatch: {
        matcher: ordering.caseExactOrderingMatch,
        decode: ordering.decodeCaseExactOrderingMatchAssertion,
        normalize: ordering.normalizeCaseExactOrderingMatchAssertion,
        raw: utf8(" Zebra "),
        normalized: utf8("Zebra"),
        value: utf8("Apple"),
    },
    numericStringOrderingMatch: {
        matcher: ordering.numericStringOrderingMatch,
        decode: ordering.decodeNumericStringOrderingMatchAssertion,
        normalize: ordering.normalizeNumericStringOrderingMatchAssertion,
        raw: numeric("1 9"),
        normalized: numeric("19"),
        value: numeric("15"),
    },
    caseIgnoreSubstringsMatch: {
        matcher: substring.caseIgnoreSubstringsMatch,
        decode: substring.decodeCaseIgnoreSubstringsMatchAssertion,
        normalize: substring.normalizeCaseIgnoreSubstringsMatchAssertion,
        raw: pieces([{ initial: "  WHAT " }, { final: " YOU " }]),
        normalized: pieces([{ initial: "what" }, { final: "you" }]),
        value: utf8("What are you"),
    },
    caseExactSubstringsMatch: {
        matcher: substring.caseExactSubstringsMatch,
        decode: substring.decodeCaseExactSubstringsMatchAssertion,
        normalize: substring.normalizeCaseExactSubstringsMatchAssertion,
        raw: pieces([{ initial: " What  " }]),
        normalized: pieces([{ initial: "What" }]),
        value: utf8("What are you"),
    },
    caseIgnoreIA5SubstringsMatch: {
        matcher: substring.caseIgnoreIA5SubstringsMatch,
        decode: substring.decodeCaseIgnoreIA5SubstringsMatchAssertion,
        normalize: substring.normalizeCaseIgnoreIA5SubstringsMatchAssertion,
        raw: pieces([{ any_: " ARE " }]),
        normalized: pieces([{ any_: "are" }]),
        value: ia5("What are you"),
    },
    numericStringSubstringsMatch: {
        matcher: substring.numericStringSubstringsMatch,
        decode: substring.decodeNumericStringSubstringsMatchAssertion,
        normalize: substring.normalizeNumericStringSubstringsMatchAssertion,
        raw: pieces([{ initial: "12 3" }]),
        normalized: pieces([{ initial: "123" }]),
        value: numeric("123456"),
    },
    telephoneNumberSubstringsMatch: {
        matcher: substring.telephoneNumberSubstringsMatch,
        decode: substring.decodeTelephoneNumberSubstringsMatchAssertion,
        normalize: substring.normalizeTelephoneNumberSubstringsMatchAssertion,
        raw: pieces([{ initial: "+1 555" }]),
        normalized: pieces([{ initial: "+1555" }]),
        value: printable("+1-555-0100"),
    },
    facsimileNumberSubstringsMatch: {
        matcher: substring.facsimileNumberSubstringsMatch,
        decode: substring.decodeFacsimileNumberSubstringsMatchAssertion,
        normalize: substring.normalizeFacsimileNumberSubstringsMatchAssertion,
        raw: pieces([{ initial: "+1 555" }]),
        normalized: pieces([{ initial: "+1555" }]),
        value: printable("+1-555-0100"),
    },
};

describe.each(Object.entries(cases))("%s", (_name, c) => {
    it("normalizing the decoded raw assertion gives the decoded normalized assertion", () => {
        expect(c.normalize(c.decode(c.raw), c.raw)).toEqual(c.decode(c.normalized));
    });

    it("normalizing a normalized assertion does not change it", () => {
        const normalized = c.decode(c.normalized);
        expect(c.normalize(normalized, c.normalized)).toEqual(normalized);
    });

    it.each([ 0, MATCH_FLAG_CONSTANT_TIME ])("normalizes the assertion by default (extra flags: %d)", (flags) => {
        expect(c.matcher(c.raw, stored(c.value), undefined, flags)).toBe(true);
        expect(c.matcher(c.normalized, stored(c.value), undefined, flags)).toBe(true);
    });

    it.each([ 0, MATCH_FLAG_CONSTANT_TIME ])("trusts the assertion with MATCH_FLAG_ASSERTION_NORMALIZED (extra flags: %d)", (flags) => {
        const trusted = flags | MATCH_FLAG_ASSERTION_NORMALIZED;
        expect(c.matcher(c.normalized, stored(c.value), undefined, trusted)).toBe(true);
        expect(c.matcher(c.raw, stored(c.value), undefined, trusted)).toBe(false);
    });
});

describe("substrings filter items with MATCH_FLAG_ASSERTION_NORMALIZED", () => {
    it("skips preparation of directory-string components", () => {
        const raw: FilterSubstring[] = [{ initial: utf8("  WHAT ") }];
        const normalized: FilterSubstring[] = [{ initial: utf8("what") }];
        const value = stored(utf8("What are you"));
        const match = substring.caseIgnoreSubstringsMatch;
        expect(match(raw, value)).toBe(true);
        expect(match(raw, value, undefined, MATCH_FLAG_ASSERTION_NORMALIZED)).toBe(false);
        expect(match(normalized, value, undefined, MATCH_FLAG_ASSERTION_NORMALIZED)).toBe(true);
    });

    it("rejects an empty piece even when the assertion is trusted", () => {
        const value = stored(utf8("anything"));
        expect(() => substring.caseIgnoreSubstringsMatch(
            [{ any_: utf8("") }],
            value,
            undefined,
            MATCH_FLAG_ASSERTION_NORMALIZED,
        )).toThrow();
    });
});

describe("storedPrefixMatch with MATCH_FLAG_ASSERTION_NORMALIZED", () => {
    it("skips preparation of the presented string only", () => {
        const { storedPrefixMatch } = substring;
        expect(storedPrefixMatch(utf8(" AREA 51 "), utf8("area"))).toBe(true);
        expect(storedPrefixMatch(utf8(" AREA 51 "), utf8("area"), MATCH_FLAG_ASSERTION_NORMALIZED)).toBe(false);
        expect(storedPrefixMatch(utf8("area 51"), utf8(" AREA "), MATCH_FLAG_ASSERTION_NORMALIZED)).toBe(true);
        expect(storedPrefixMatch(
            utf8("area 51"),
            utf8("area"),
            MATCH_FLAG_ASSERTION_NORMALIZED | MATCH_FLAG_VALUE_NORMALIZED,
        )).toBe(true);
    });
});

describe("normalizeCaseIgnoreListMatchAssertion iterators", () => {
    it("prepares lines from an iterator in order", () => {
        expect(equality.normalizeCaseIgnoreListMatchAssertion(
            [ "  Main ST ", "SPRINGFIELD" ].values(),
        )).toEqual([ "main st", "springfield" ]);
    });
});
