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
    _encodeObjectDescriptor,
    _encodeOctetString,
    _encodePrintableString,
    _encodeVisibleString,
} from "@wildboar/asn1/functional";
import { _encode_UnboundedDirectoryString } from "../modules/SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import { prepString } from "../utils/prepString.mjs";
import { TimeSpecification } from "../modules/SelectedAttributeTypes/TimeSpecification.ta.mjs";
import { UUIDPair } from "../modules/SelectedAttributeTypes/UUIDPair.ta.mjs";
import { booleanMatchTyped } from "./equality/booleanMatch.mjs";
import { caseIgnoreListMatchTyped } from "./equality/caseIgnoreListMatch.mjs";
import caseIgnoreMatch, { caseIgnoreMatchTyped } from "./equality/caseIgnoreMatch.mjs";
import { caseExactMatchTyped } from "./equality/caseExactMatch.mjs";
import integerMatch, { integerMatchTyped } from "./equality/integerMatch.mjs";
import { objectIdentifierMatchTyped } from "./equality/objectIdentifierMatch.mjs";
import { octetStringMatchTyped } from "./equality/octetStringMatch.mjs";
import { uUIDPairMatchTyped } from "./equality/uUIDPairMatch.mjs";
import {
    AttributeTypeAndValue,
} from "../modules/InformationFramework/AttributeTypeAndValue.ta.mjs";
import { evaluateLanguageContext } from "./context/languageContext.mjs";
import { evaluateTemporalContext } from "./context/temporalContext.mjs";

function uds (value: string): ASN1Element {
    return _encode_UnboundedDirectoryString(
        { uTF8String: value },
        () => new DERElement(),
    );
}

const attributeType = ObjectIdentifier.fromParts([ 1, 1, 1, 1 ]);

describe("typed matching inputs", () => {
    it("compares directory strings across string, choice, and element", () => {
        expect(caseIgnoreMatchTyped("hello", "hello")).toBe(true);
        expect(caseIgnoreMatchTyped("hello", { uTF8String: "hello" })).toBe(true);
        expect(caseIgnoreMatchTyped("hello", uds("hello"))).toBe(true);
        expect(caseIgnoreMatchTyped("hello", { uTF8String: "world" })).toBe(false);
        expect(caseIgnoreMatchTyped("hello", _encodeIA5String("Hello", DER))).toBe(true);
        expect(caseIgnoreMatchTyped("world", _encodeIA5String("Hello", DER))).toBe(false);
        expect(caseIgnoreMatchTyped("hello", _encodeVisibleString("Hello", DER))).toBe(true);
        expect(caseIgnoreMatchTyped("hello", _encodeObjectDescriptor("Hello", DER))).toBe(true);
        expect(caseIgnoreMatch(
            uds("Hello"),
            new AttributeTypeAndValue(attributeType, uds("hello")),
        )).toBe(true);
        expect(caseIgnoreMatchTyped(
            "hello",
            _encode_UnboundedDirectoryString({ printableString: "Hello" }, DER),
        )).toBe(true);
        expect(caseIgnoreMatchTyped(
            "hello",
            _encode_UnboundedDirectoryString({ bmpString: "Hello" }, DER),
        )).toBe(true);
        expect(caseIgnoreMatchTyped(
            "hello",
            _encode_UnboundedDirectoryString({ universalString: "Hello" }, DER),
        )).toBe(true);
        expect(caseExactMatchTyped(
            "Hello",
            _encode_UnboundedDirectoryString({
                teletexString: new Uint8Array([ 0x48, 0x65, 0x6c, 0x6c, 0x6f ]),
            }, DER),
        )).toBe(true);
        expect(() => caseIgnoreMatchTyped("a", _encodeInteger(1, DER)))
            .toThrow("Unrecognized CHOICE tag 'UNIVERSAL 2'.");
    });

    it("prepares a PrintableString with only space and ASCII case folding", () => {
        const samples = [
            "Hello",
            "  Hello   World ",
            "   ",
            "A",
            "O'Brien",
            "A+B=C?",
            "abc 123",
        ];
        for (const sample of samples) {
            const exact = prepString(sample);
            const folded = prepString(sample, { caseFold: true });
            const element = _encode_UnboundedDirectoryString(
                { printableString: sample },
                DER,
            );
            expect(caseExactMatchTyped(exact!, element)).toBe(true);
            expect(caseIgnoreMatchTyped(folded!, element)).toBe(true);
            expect(caseIgnoreMatchTyped(folded!, { printableString: sample })).toBe(true);
        }
        expect(caseExactMatchTyped(
            "hello",
            _encode_UnboundedDirectoryString({ printableString: "Hello" }, DER),
        )).toBe(false);
    });

    it("compares integers across number, bigint, and element", () => {
        const two = _encodeInteger(2, DER);
        expect(integerMatchTyped(2, 2n)).toBe(true);
        expect(integerMatchTyped(2n, two)).toBe(true);
        expect(integerMatchTyped(2, 3n)).toBe(false);
        expect(integerMatchTyped(2n, 2n)).toBe(true);
        expect(integerMatch(two, new AttributeTypeAndValue(attributeType, two))).toBe(true);
    });

    it("compares booleans, object identifiers, and octet strings heterogeneously", () => {
        expect(booleanMatchTyped(true, _encodeBoolean(true, DER))).toBe(true);
        expect(booleanMatchTyped(false, true)).toBe(false);

        const oid = ObjectIdentifier.fromString("2.5.4.3");
        const encoded = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.objectIdentifier,
            oid,
        );
        expect(objectIdentifierMatchTyped(oid, "2.5.4.3")).toBe(true);
        expect(objectIdentifierMatchTyped(oid, encoded)).toBe(true);
        expect(objectIdentifierMatchTyped(ObjectIdentifier.fromString("2.5.4.4"), encoded)).toBe(false);

        const bytes = new Uint8Array([ 1, 2, 3 ]);
        expect(octetStringMatchTyped(bytes, _encodeOctetString(bytes, DER))).toBe(true);
        expect(octetStringMatchTyped(new Uint8Array([ 1, 2 ]), bytes)).toBe(false);
    });

    it("matches a string list against directory-string lines", () => {
        expect(caseIgnoreListMatchTyped(
            [ "main street" ],
            [ { uTF8String: "main street" } ],
        )).toBe(true);
        expect(caseIgnoreListMatchTyped(
            [ "main street" ],
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
        expect(uUIDPairMatchTyped(pair, same)).toBe(true);
        expect(uUIDPairMatchTyped(pair, other)).toBe(false);
    });
});
