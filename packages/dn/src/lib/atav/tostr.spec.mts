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
    const type_ = ObjectIdentifier.fromParts([2, 5, 4, 3]);
    const cases: ReadonlyArray<readonly [string, ASN1Element, string | null]> = [
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
        ["a SEQUENCE", _encodeSequence([], BER), null],
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
        ["a non-universal element", contextElement(), null],
        ["an unrecognized universal type", unrecognizedUniversal(), null],
    ];

    it.each(cases)("stringifies %s", (_label, element, expected) => {
        expect(distinguishedValueToString(type_, element)).toBe(expected);
    });

    it("stringifies a DATE as an ISO-8601 instant", () => {
        const localDate = new Date(2020, 0, 2);
        expect(distinguishedValueToString(type_, _encodeDate(localDate, BER))).toBe(localDate.toISOString());
    });

    it("stringifies a TIME-OF-DAY as unpadded UTC hours, minutes, and seconds", () => {
        const element = _encodeTimeOfDay(new Date(2020, 0, 2, 15, 4, 5), BER);
        const tod = element.timeOfDay;
        expect(distinguishedValueToString(type_, element)).toBe(
            `${tod.getUTCHours()}:${tod.getUTCMinutes()}:${tod.getUTCSeconds()}`,
        );
    });
});

describe("postal addresses", () => {
    const postalAddress = ObjectIdentifier.fromParts([2, 5, 4, 16]);
    const lines = ["123 Main St", "Apt 4", "Springfield", "IL", "62704", "US"];

    function utf8Lines(text: readonly string[]): ASN1Element {
        return _encodeSequence(text.map((line) => _encodeUTF8String(line, BER)), BER);
    }

    it("joins six directory-string lines with $", () => {
        expect(distinguishedValueToString(postalAddress, utf8Lines(lines))).toBe(lines.join("$"));
    });

    it("stringifies each DirectoryString alternative in a line", () => {
        const value = _encodeSequence([
            _encodeUTF8String("utf8", BER),
            _encodePrintableString("printable", BER),
            _encodeBMPString("bmp", BER),
            _encodeUniversalString("universal", BER),
            _encodeTeletexString(new Uint8Array([0x41, 0xa4]), BER),
            _encodeUTF8String("tail", BER),
        ], BER);
        expect(distinguishedValueToString(postalAddress, value)).toBe("utf8$printable$bmp$universal$A$$tail");
    });

    it("does not display an empty sequence", () => {
        expect(distinguishedValueToString(ObjectIdentifier.fromParts([2, 5, 4, 3]), _encodeSequence([], BER))).toBeNull();
    });
});

describe("distinguishedValueToString() with comparable", () => {
    const commonName = ObjectIdentifier.fromParts([2, 5, 4, 3]);
    const serialNumber = ObjectIdentifier.fromParts([2, 5, 4, 5]);
    const telephoneNumber = ObjectIdentifier.fromParts([2, 5, 4, 20]);
    const postalAddress = ObjectIdentifier.fromParts([2, 5, 4, 16]);
    const dnsName = ObjectIdentifier.fromParts([2, 5, 4, 100]);
    const intEmail = ObjectIdentifier.fromParts([2, 5, 4, 104]);
    const jid = ObjectIdentifier.fromParts([2, 5, 4, 105]);
    const emailAddress = ObjectIdentifier.fromParts([1, 2, 840, 113549, 1, 9, 1]);
    const homePhone = ObjectIdentifier.fromParts([0, 9, 2342, 19200300, 100, 1, 20]);
    const mobile = ObjectIdentifier.fromParts([0, 9, 2342, 19200300, 100, 1, 41]);
    const pager = ObjectIdentifier.fromParts([0, 9, 2342, 19200300, 100, 1, 42]);
    const unrecognized = ObjectIdentifier.fromParts([1, 3, 6, 1, 4, 1, 99999, 1]);

    const cmp = (type_: ObjectIdentifier, el: ASN1Element): string | null =>
        distinguishedValueToString(type_, el, true);

    it("does not normalize when comparable is not set", () => {
        expect(distinguishedValueToString(commonName, _encodeUTF8String(" Jonathan  WILBUR ", BER)))
            .toBe(" Jonathan  WILBUR ");
    });

    it("prepares and case-folds directory strings", () => {
        expect(cmp(commonName, _encodeUTF8String("  Jonathan \t WILBUR ", BER))).toBe("jonathan wilbur");
        expect(cmp(commonName, _encodePrintableString("Jonathan Wilbur", BER))).toBe("jonathan wilbur");
        expect(cmp(commonName, _encodeBMPString("JONATHAN WILBUR", BER))).toBe("jonathan wilbur");
        expect(cmp(commonName, _encodeUniversalString("jonathan wilbur", BER))).toBe("jonathan wilbur");
        expect(cmp(commonName, _encodeTeletexString(new Uint8Array([0x41, 0x42]), BER))).toBe("ab");
        expect(cmp(commonName, _encodeIA5String("ABC", BER))).toBe("abc");
    });

    it("applies full case folding", () => {
        expect(cmp(commonName, _encodeUTF8String("Straße", BER)))
            .toBe(cmp(commonName, _encodeUTF8String("STRASSE", BER)));
    });

    it("does not case-fold serialNumber", () => {
        expect(cmp(serialNumber, _encodePrintableString("  ABC  123 ", BER))).toBe("ABC 123");
    });

    it("truncates UTCTime and GeneralizedTime to seconds", () => {
        const fractional = (text: string): BERElement => {
            const el = new BERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.generalizedTime,
            );
            el.value = new TextEncoder().encode(text);
            return el;
        };
        expect(cmp(commonName, _encodeUTCTime(INSTANT, BER))).toBe("2020-01-02T03:04:05Z");
        expect(cmp(commonName, _encodeGeneralizedTime(INSTANT, BER))).toBe("2020-01-02T03:04:05Z");
        expect(cmp(commonName, fractional("20200102030405.123Z"))).toBe("2020-01-02T03:04:05Z");
        expect(cmp(commonName, fractional("20200102030405.987Z"))).toBe("2020-01-02T03:04:05Z");
        expect(distinguishedValueToString(commonName, fractional("20200102030405.123Z")))
            .toBe("2020-01-02T03:04:05.123Z");
    });

    it("prepares and case-folds each line of a postal address", () => {
        const value = _encodeSequence([
            _encodeUTF8String("123  Main St", BER),
            _encodePrintableString("SPRINGFIELD", BER),
            _encodePrintableString("+1 555-1234", BER),
        ], BER);
        expect(cmp(postalAddress, value)).toBe("123 main st$springfield$+1 555-1234");
    });

    it("removes spaces and hyphens from PrintableStrings of unrecognized types that look like telephone numbers", () => {
        expect(cmp(unrecognized, _encodePrintableString("+1 555-123-4567", BER))).toBe("+15551234567");
        expect(cmp(unrecognized, _encodePrintableString(" +44 20 7946 0958 ", BER))).toBe("+442079460958");
    });

    it("does not treat values of recognized types as telephone numbers", () => {
        expect(cmp(commonName, _encodePrintableString("+1 555-123-4567", BER))).toBe("+1 555-123-4567");
    });

    it("does not treat other strings as telephone numbers", () => {
        expect(cmp(unrecognized, _encodeUTF8String("+1 555-123-4567", BER))).toBe("+1 555-123-4567");
        expect(cmp(unrecognized, _encodePrintableString("1 555-123-4567", BER))).toBe("1 555-123-4567");
        expect(cmp(unrecognized, _encodePrintableString("+1 555-123-4567 x", BER))).toBe("+1 555-123-4567 x");
        expect(cmp(unrecognized, _encodePrintableString("+1 555-123-4567-", BER))).toBe("+1 555-123-4567-");
        const long = "+1 234 567 890 123 456 789 012 3";
        expect(long.length).toBe(32);
        expect(cmp(unrecognized, _encodePrintableString(long, BER))).toBe(long);
    });

    it.each([
        ["telephoneNumber", telephoneNumber],
        ["homePhone", homePhone],
        ["mobile", mobile],
        ["pager", pager],
    ])("removes spaces and hyphens from %s regardless of form", (_label, type_) => {
        expect(cmp(type_, _encodePrintableString("(555) 123-4567", BER))).toBe("(555)1234567");
        expect(cmp(type_, _encodeUTF8String("+1 555-123-4567 EXT 9", BER))).toBe("+15551234567ext9");
    });

    it("removes spaces from NumericStrings", () => {
        expect(cmp(commonName, _encodeNumericString(" 123 456 ", BER))).toBe("123456");
    });

    it("normalizes dnsName to lowercase A-labels without a root dot", () => {
        const expected = "xn--bcher-kva.example";
        expect(cmp(dnsName, _encodeUTF8String("Bücher.EXAMPLE.", BER))).toBe(expected);
        expect(cmp(dnsName, _encodeUTF8String("BÜCHER.example", BER))).toBe(expected);
        expect(cmp(dnsName, _encodeUTF8String("XN--BCHER-KVA.example", BER))).toBe(expected);
        expect(cmp(dnsName, _encodeUTF8String("Straße.de", BER))).toBe("xn--strae-oqa.de");
    });

    it("falls back to case folding for an invalid dnsName", () => {
        expect(cmp(dnsName, _encodeUTF8String("Not A Domain", BER))).toBe("not a domain");
    });

    it("normalizes values of unrecognized types that look like DNS names", () => {
        expect(cmp(unrecognized, _encodeIA5String("WWW.Example.COM", BER))).toBe("www.example.com");
        expect(cmp(unrecognized, _encodeUTF8String("Bücher.example", BER))).toBe("xn--bcher-kva.example");
        expect(cmp(unrecognized, _encodeUTF8String("_ldap._tcp.Example.com", BER))).toBe("_ldap._tcp.example.com");
    });

    it("does not treat values of recognized types as DNS names", () => {
        expect(cmp(commonName, _encodeUTF8String("Bücher.example", BER))).toBe("bücher.example");
    });

    it("does not treat values without a plausible top-level domain as DNS names", () => {
        expect(cmp(unrecognized, _encodeUTF8String("Bücher.123", BER))).toBe("bücher.123");
        expect(cmp(unrecognized, _encodeUTF8String("Bücher", BER))).toBe("bücher");
    });

    it.each([
        ["intEmail", intEmail],
        ["emailAddress", emailAddress],
        ["an unrecognized type", unrecognized],
    ])("normalizes email addresses of %s", (_label, type_) => {
        expect(cmp(type_, _encodeUTF8String("Jonathan.WILBUR@Bücher.EXAMPLE", BER)))
            .toBe("jonathan.wilbur@xn--bcher-kva.example");
        expect(cmp(type_, _encodeIA5String("Jonathan.Wilbur@xn--bcher-kva.example", BER)))
            .toBe("jonathan.wilbur@xn--bcher-kva.example");
    });

    it("normalizes Jabber IDs, preserving the case of the resource", () => {
        expect(cmp(jid, _encodeUTF8String("Juliet@Example.COM/Balcony", BER))).toBe("juliet@example.com/Balcony");
        expect(cmp(jid, _encodeUTF8String("Juliet@Bücher.example", BER))).toBe("juliet@xn--bcher-kva.example");
        expect(cmp(jid, _encodeUTF8String("Example.COM", BER))).toBe("example.com");
        expect(cmp(unrecognized, _encodeUTF8String("Juliet@Example.COM/Balcony", BER)))
            .toBe("juliet@example.com/Balcony");
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
