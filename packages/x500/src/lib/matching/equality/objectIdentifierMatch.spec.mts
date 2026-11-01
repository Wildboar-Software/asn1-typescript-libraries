import {
    ASN1Construction,
    ASN1TagClass,
    ASN1UniversalType,
    DERElement,
    ObjectIdentifier,
} from "@wildboar/asn1";
import { DER, _encodeObjectIdentifier } from "@wildboar/asn1/functional";
import { Attribute } from "../../modules/InformationFramework/Attribute.ta.mjs";
import objectIdentifierMatch from "./objectIdentifierMatch.mjs";
import { onStoredValue } from "./onStoredValue.spec.mjs";

const match = onStoredValue(objectIdentifierMatch);

function oid (dotted: string): DERElement {
    return _encodeObjectIdentifier(ObjectIdentifier.fromString(dotted), DER) as DERElement;
}

function rawOid (octets: number[], construction = ASN1Construction.primitive): DERElement {
    const el = new DERElement(
        ASN1TagClass.universal,
        construction,
        ASN1UniversalType.objectIdentifier,
    );
    el.value = new Uint8Array(octets);
    return el;
}

describe("objectIdentifierMatch", () => {
    it("matches equal object identifiers", () => {
        expect(match(oid("2.5.4.3"), oid("2.5.4.3"))).toBe(true);
        expect(match(oid("1.3.6.1.4.1.56490.5.1"), oid("1.3.6.1.4.1.56490.5.1"))).toBe(true);
        expect(match(oid("2.999.1"), oid("2.999.1"))).toBe(true);
    });

    it("does not match unequal object identifiers", () => {
        expect(match(oid("2.5.4.3"), oid("2.5.4.4"))).toBe(false);
        expect(match(oid("2.5.4"), oid("2.5.4.3"))).toBe(false);
        expect(match(oid("2.5.4.3"), oid("2.5.4"))).toBe(false);
        expect(match(oid("1.3.6.1.4.1.128"), oid("1.3.6.1.4.1.1.0"))).toBe(false);
    });

    it("matches any of several values", () => {
        const attr = new Attribute(
            ObjectIdentifier.fromParts([ 2, 5, 4, 0 ]),
            [ oid("2.5.6.0"), oid("2.5.6.6") ],
        );
        expect(objectIdentifierMatch(oid("2.5.6.6"), attr)).toBe(true);
        expect(objectIdentifierMatch(oid("2.5.6.7"), attr)).toBe(false);
    });

    it("rejects malformed assertions", () => {
        const cn = oid("2.5.4.3");
        expect(() => match(rawOid([]), cn)).toThrow();
        expect(() => match(rawOid([ 0x55, 0x04, 0x83 ]), cn)).toThrow();
        expect(() => match(rawOid([ 0x80, 0x55 ]), cn)).toThrow();
        expect(() => match(rawOid([ 0x55, 0x80, 0x04 ]), cn)).toThrow();
        expect(() => match(rawOid([ 0x06, 0x01, 0x55 ], ASN1Construction.constructed), cn)).toThrow();
    });

    it("accepts a continuation octet of 0x80 after a non-final octet", () => {
        expect(match(rawOid([ 0x55, 0x81, 0x80, 0x00 ]), oid("2.5.16384"))).toBe(true);
    });

    it("does not match padded values", () => {
        expect(match(oid("2.5.4.3"), rawOid([ 0x55, 0x04, 0x80, 0x03 ]))).toBe(false);
    });
});
