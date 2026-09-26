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
    _encodeBoolean,
    _encodeIA5String,
    _encodeInteger,
    _encodeOctetString,
    _encodePrintableString,
} from "@wildboar/asn1/functional";
import { _encode_UnboundedDirectoryString } from "../modules/SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import { TimeSpecification } from "../modules/SelectedAttributeTypes/TimeSpecification.ta.mjs";
import { UUIDPair } from "../modules/SelectedAttributeTypes/UUIDPair.ta.mjs";
import { booleanMatch } from "./equality/booleanMatch.mjs";
import { caseIgnoreListMatch } from "./equality/caseIgnoreListMatch.mjs";
import { caseIgnoreMatch, caseIgnoreMatchTyped } from "./equality/caseIgnoreMatch.mjs";
import { integerMatch, integerMatchTyped } from "./equality/integerMatch.mjs";
import { objectIdentifierMatch } from "./equality/objectIdentifierMatch.mjs";
import { octetStringMatch } from "./equality/octetStringMatch.mjs";
import { uUIDPairMatch } from "./equality/uUIDPairMatch.mjs";
import { caseIgnoreOrderingMatch } from "./ordering/caseIgnoreOrderingMatch.mjs";
import { integerOrderingMatch } from "./ordering/integerOrderingMatch.mjs";
import { caseIgnoreSubstringsMatch } from "./substring/caseIgnoreSubstringsMatch.mjs";
import { storedPrefixMatch } from "./substring/storedPrefixMatch.mjs";
import { evaluateLanguageContext } from "./context/languageContext.mjs";
import { evaluateTemporalContext } from "./context/temporalContext.mjs";

function uds (value: string): ASN1Element {
    return _encode_UnboundedDirectoryString(
        { uTF8String: value },
        () => new DERElement(),
    );
}

describe("typed matching inputs", () => {
    it("compares directory strings across string, choice, and element", () => {
        expect(caseIgnoreMatch("Hello", "hello")).toBe(true);
        expect(caseIgnoreMatch("Hello", { uTF8String: "hello" })).toBe(true);
        expect(caseIgnoreMatch({ printableString: "Hello" }, "hello")).toBe(true);
        expect(caseIgnoreMatch("Hello", uds("hello"))).toBe(true);
        expect(caseIgnoreMatch(uds("Hello"), { uTF8String: "world" })).toBe(false);
        expect(caseIgnoreMatch(_encodeIA5String("Hello", DER), "hello")).toBe(true);
        expect(caseIgnoreMatch("world", _encodeIA5String("Hello", DER))).toBe(false);
        expect(caseIgnoreMatchTyped("Hello", "hello")).toBe(true);
    });

    it("compares integers across number, bigint, and element", () => {
        const two = _encodeInteger(2, DER);
        expect(integerMatch(2, 2n)).toBe(true);
        expect(integerMatch(two, 2)).toBe(true);
        expect(integerMatch(2n, two)).toBe(true);
        expect(integerMatch(2, 3n)).toBe(false);
        expect(integerMatchTyped(2n, 2n)).toBe(true);
        expect(integerOrderingMatch(1, 2n)).toBeLessThan(0);
        expect(integerOrderingMatch(two, 1)).toBeGreaterThan(0);
        expect(integerOrderingMatch(2n, two)).toBe(0);
    });

    it("compares booleans, object identifiers, and octet strings heterogeneously", () => {
        expect(booleanMatch(true, _encodeBoolean(true, DER))).toBe(true);
        expect(booleanMatch(false, _encodeBoolean(true, DER))).toBe(false);

        const oid = ObjectIdentifier.fromString("2.5.4.3");
        const encoded = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.objectIdentifier,
            oid,
        );
        expect(objectIdentifierMatch("2.5.4.3", oid)).toBe(true);
        expect(objectIdentifierMatch(oid, encoded)).toBe(true);
        expect(objectIdentifierMatch("2.5.4.4", encoded)).toBe(false);

        const bytes = new Uint8Array([ 1, 2, 3 ]);
        expect(octetStringMatch(bytes, _encodeOctetString(bytes, DER))).toBe(true);
        expect(octetStringMatch(new Uint8Array([ 1, 2 ]), bytes)).toBe(false);
    });

    it("orders and substring-matches a string against an encoded directory string", () => {
        expect(caseIgnoreOrderingMatch("b", { uTF8String: "A" })).toBeGreaterThan(0);
        expect(caseIgnoreOrderingMatch({ printableString: "A" }, "b")).toBeLessThan(0);
        expect(caseIgnoreSubstringsMatch("ELL", uds("Hello"))).toBe(true);
        expect(caseIgnoreSubstringsMatch(uds("xyz"), "Hello")).toBe(false);
        expect(storedPrefixMatch("7035551212", "703")).toBe(true);
    });

    it("matches a string list against directory-string lines", () => {
        expect(caseIgnoreListMatch(
            [ "Main Street" ],
            [ { uTF8String: "main street" } ],
        )).toBe(true);
        expect(caseIgnoreListMatch(
            [ "Main Street" ],
            [ { printableString: "Other" } ],
        )).toBe(false);
    });

    it("matches a language code string against a PrintableString element", () => {
        expect(evaluateLanguageContext("en", _encodePrintableString("en", DER))).toBe(true);
        expect(evaluateLanguageContext(_encodePrintableString("fr", DER), "en")).toBe(false);
    });

    it("matches a Date assertion against a decoded TimeSpecification", () => {
        const spec = new TimeSpecification({
            absolute: {
                startTime: new Date("2020-01-01T00:00:00Z"),
                endTime: new Date("2020-12-31T00:00:00Z"),
            },
        });
        expect(evaluateTemporalContext(new Date("2020-06-01T00:00:00Z"), spec)).toBe(true);
        expect(evaluateTemporalContext({ at: new Date("2019-01-01T00:00:00Z") }, spec)).toBe(false);
    });

    it("matches decoded UUID pairs without re-encoding them", () => {
        const issuer = new Uint8Array(16);
        const subject = new Uint8Array(16);
        subject[0] = 1;
        const pair = new UUIDPair(issuer, subject);
        const same = new UUIDPair(Uint8Array.from(issuer), Uint8Array.from(subject));
        const other = new UUIDPair(issuer, issuer);
        expect(uUIDPairMatch(pair, same)).toBe(true);
        expect(uUIDPairMatch(pair, other)).toBe(false);
    });
});
