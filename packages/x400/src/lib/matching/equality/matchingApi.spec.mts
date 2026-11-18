import {
    ASN1Construction,
    ASN1TagClass,
    ASN1UniversalType,
    DERElement,
    ObjectIdentifier,
} from "@wildboar/asn1";
import { Attribute, AttributeTypeAndValue } from "@wildboar/x500/InformationFramework";
import {
    MATCH_FLAG_ORDERING_GREATER,
    MATCH_FLAG_ORDERING_OR_EQUAL,
} from "@wildboar/x500";
import { contentIdentifierMatch } from "./contentIdentifierMatch.mjs";
import { mSStringMatch } from "./mSStringMatch.mjs";
import { mSStringOrderingMatch } from "../ordering/mSStringOrderingMatch.mjs";
import { mSSingleSubstringMatch } from "../substring/mSSingleSubstringMatch.mjs";

const type_ = ObjectIdentifier.fromParts([ 2, 6, 0 ]);

function printable (text: string): DERElement {
    return new DERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.printableString,
        text,
    );
}

function stored (text: string): AttributeTypeAndValue {
    return new AttributeTypeAndValue(type_, printable(text));
}

describe("X.400 matchers on the X.500 Matcher API", () => {
    test("contentIdentifierMatch compares one stored value", () => {
        expect(contentIdentifierMatch(printable("Hello   World"), stored("Hello World"))).toBe(true);
        expect(contentIdentifierMatch(printable("Hello"), stored("hello"))).toBe(false);
    });

    test("mSStringMatch folds case and matches any attribute value", () => {
        const attr = new Attribute(
            type_,
            [ printable("other"), printable("Hello   there") ],
        );
        expect(mSStringMatch(printable("hello there"), attr)).toBe(true);
        expect(mSStringMatch(printable("absent"), attr)).toBe(false);
    });

    test("a malformed stored MSString is UNDEFINED", () => {
        const bool = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.boolean,
            true,
        );
        expect(mSStringMatch(printable("hi"), new AttributeTypeAndValue(type_, bool))).toBeUndefined();
    });

    test("byte-identical values match before they are decoded", () => {
        const bool = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.boolean,
            true,
        );
        const same = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.boolean,
            true,
        );
        expect(mSStringMatch(bool, new AttributeTypeAndValue(type_, same))).toBe(true);
    });

    test("mSStringOrderingMatch treats the stored value as the lesser one by default", () => {
        expect(mSStringOrderingMatch(printable("M"), stored("a"))).toBe(true);
        expect(mSStringOrderingMatch(printable("A"), stored("m"))).toBe(false);
        expect(mSStringOrderingMatch(
            printable("Same"),
            stored("same"),
            undefined,
            MATCH_FLAG_ORDERING_OR_EQUAL,
        )).toBe(true);
        expect(mSStringOrderingMatch(
            printable("A"),
            stored("m"),
            undefined,
            MATCH_FLAG_ORDERING_GREATER | MATCH_FLAG_ORDERING_OR_EQUAL,
        )).toBe(true);
    });

    test("mSSingleSubstringMatch accepts an encoded MSString as any-substring", () => {
        expect(mSSingleSubstringMatch(printable("cat"), stored("the CAT sat"))).toBe(true);
        expect(mSSingleSubstringMatch(printable("dog"), stored("the cat sat"))).toBe(false);
    });

    test("mSSingleSubstringMatch accepts substrings filter pieces", () => {
        expect(mSSingleSubstringMatch(
            [ { initial: printable("the") }, { final: printable("sat") } ],
            stored("the cat sat"),
        )).toBe(true);
        expect(mSSingleSubstringMatch(
            [ { initial: printable("cat") } ],
            stored("the cat sat"),
        )).toBe(false);
    });
});
