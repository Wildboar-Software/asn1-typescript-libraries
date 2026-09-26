import {
    ASN1Construction,
    ASN1TagClass,
    ASN1UniversalType,
    BERElement,
    DURATION_EQUIVALENT,
    ObjectIdentifier,
} from "@wildboar/asn1";
import {
    BER,
    _encodeBitString,
    _encodeBMPString,
    _encodeBoolean,
    _encodeDate,
    _encodeDateTime,
    _encodeDuration,
    _encodeEnumerated,
    _encodeGeneralizedTime,
    _encodeGeneralString,
    _encodeGraphicString,
    _encodeIA5String,
    _encodeInteger,
    _encodeIRI,
    _encodeNull,
    _encodeNumericString,
    _encodeObjectDescriptor,
    _encodeObjectIdentifier,
    _encodeOctetString,
    _encodePrintableString,
    _encodeReal,
    _encodeRelativeIRI,
    _encodeRelativeOID,
    _encodeSequence,
    _encodeTeletexString,
    _encodeTime,
    _encodeTimeOfDay,
    _encodeUniversalString,
    _encodeUTCTime,
    _encodeUTF8String,
    _encodeVisibleString,
} from "@wildboar/asn1/functional";
import type { ASN1Element } from "@wildboar/asn1";
import { describe, expect, it } from "vitest";
import { AttributeTypeAndValue } from "../AttributeTypeAndValue.ta.mjs";
import attributeTypeAndValueToString, {
    defaultValueEncoder,
    distinguishedValueToString,
} from "./tostr.mjs";

const INSTANT = new Date(Date.UTC(2020, 0, 2, 3, 4, 5));

function contextElement(): BERElement {
    const el = new BERElement();
    el.tagClass = ASN1TagClass.context;
    el.construction = ASN1Construction.primitive;
    el.tagNumber = 1;
    el.value = new Uint8Array([0xff]);
    return el;
}

function unrecognizedUniversal(): BERElement {
    const el = new BERElement();
    el.tagClass = ASN1TagClass.universal;
    el.construction = ASN1Construction.primitive;
    el.tagNumber = ASN1UniversalType.videotexString;
    el.value = new Uint8Array([0x01]);
    return el;
}

function constructedOctetString(): BERElement {
    const fragment = new BERElement();
    fragment.tagClass = ASN1TagClass.universal;
    fragment.construction = ASN1Construction.primitive;
    fragment.tagNumber = ASN1UniversalType.octetString;
    fragment.octetString = new Uint8Array([0xbe, 0xef]);

    const el = new BERElement();
    el.tagClass = ASN1TagClass.universal;
    el.construction = ASN1Construction.constructed;
    el.tagNumber = ASN1UniversalType.octetString;
    el.sequence = [fragment];
    return el;
}

describe("defaultValueEncoder()", () => {
    it("prefixes the hexadecimal encoding of the element", () => {
        expect(defaultValueEncoder(contextElement())).toBe("#8101ff");
        expect(defaultValueEncoder(unrecognizedUniversal())).toBe("#150101");
    });
});

describe("distinguishedValueToString()", () => {
    const cases: ReadonlyArray<readonly [string, ASN1Element, string]> = [
        ["TRUE", _encodeBoolean(true, BER), "TRUE"],
        ["FALSE", _encodeBoolean(false, BER), "FALSE"],
        ["a positive integer", _encodeInteger(42, BER), "42"],
        ["a negative integer", _encodeInteger(-7, BER), "-7"],
        ["a bit string", _encodeBitString(new Uint8ClampedArray([1, 0, 1, 1]), BER), "'1011'B"],
        ["a primitive octet string", _encodeOctetString(new Uint8Array([0xde, 0xad]), BER), "'dead'H"],
        ["a constructed octet string", constructedOctetString(), "'beef'H"],
        ["NULL", _encodeNull(null, BER), "NULL"],
        ["an object identifier", _encodeObjectIdentifier(ObjectIdentifier.fromParts([1, 2, 3]), BER), "1.2.3"],
        ["an object descriptor", _encodeObjectDescriptor("router", BER), "router"],
        ["a real", _encodeReal(1.5, BER), "1.5"],
        ["an enumerated", _encodeEnumerated(3, BER), "3"],
        ["a UTF8String", _encodeUTF8String("Jonathan", BER), "Jonathan"],
        ["a relative OID", _encodeRelativeOID([1, 2, 3], BER), "1.2.3"],
        ["a TIME", _encodeTime("2020-01-02", BER), "2020-01-02"],
        ["a SEQUENCE", _encodeSequence([], BER), "#3000"],
        ["a NumericString", _encodeNumericString("123", BER), "123"],
        ["a PrintableString", _encodePrintableString("Hi", BER), "Hi"],
        ["a TeletexString", _encodeTeletexString(new Uint8Array([0x41, 0xa4]), BER), "A$"],
        ["an IA5String", _encodeIA5String("abc", BER), "abc"],
        ["a UTCTime", _encodeUTCTime(INSTANT, BER), "2020-01-02T03:04:05.000Z"],
        ["a GeneralizedTime", _encodeGeneralizedTime(INSTANT, BER), "2020-01-02T03:04:05.000Z"],
        ["a GraphicString", _encodeGraphicString("g", BER), "g"],
        ["a VisibleString", _encodeVisibleString("v", BER), "v"],
        ["a GeneralString", _encodeGeneralString("G", BER), "G"],
        ["a UniversalString", _encodeUniversalString("U", BER), "U"],
        ["a BMPString", _encodeBMPString("B", BER), "B"],
        ["a DATE-TIME", _encodeDateTime(INSTANT, BER), "2020-01-02T03:04:05.000Z"],
        [
            "a DURATION",
            _encodeDuration(new DURATION_EQUIVALENT(1, undefined, undefined, 2, undefined, undefined, 3, undefined), BER),
            "DURATION { years 1days 2seconds 3}",
        ],
        ["an OID-IRI", _encodeIRI("/ISO/Member", BER), "/ISO/Member"],
        ["a RELATIVE-OID-IRI", _encodeRelativeIRI("Member", BER), "Member"],
        ["a non-universal element", contextElement(), "#8101ff"],
        ["an unrecognized universal type", unrecognizedUniversal(), "#150101"],
    ];

    it.each(cases)("stringifies %s", (_label, element, expected) => {
        expect(distinguishedValueToString(element)).toBe(expected);
    });

    it("stringifies a DATE as an ISO-8601 instant", () => {
        const localDate = new Date(2020, 0, 2);
        expect(distinguishedValueToString(_encodeDate(localDate, BER))).toBe(localDate.toISOString());
    });

    it("stringifies a TIME-OF-DAY as unpadded UTC hours, minutes, and seconds", () => {
        const element = _encodeTimeOfDay(new Date(2020, 0, 2, 15, 4, 5), BER);
        const tod = element.timeOfDay;
        expect(distinguishedValueToString(element)).toBe(
            `${tod.getUTCHours()}:${tod.getUTCMinutes()}:${tod.getUTCSeconds()}`,
        );
    });
});

describe("attributeTypeAndValueToString()", () => {
    const commonName = ObjectIdentifier.fromParts([2, 5, 4, 3]);

    it("joins the short type name and the value with an equals sign", () => {
        const atav = new AttributeTypeAndValue(commonName, _encodeUTF8String("Smith, Jr", BER));
        expect(attributeTypeAndValueToString(atav)).toBe("cn=Smith, Jr");
    });

    it("escapes the value when asked", () => {
        const atav = new AttributeTypeAndValue(commonName, _encodeUTF8String("Smith, Jr", BER));
        expect(attributeTypeAndValueToString(atav, true)).toBe("cn=Smith\\, Jr");
    });
});
