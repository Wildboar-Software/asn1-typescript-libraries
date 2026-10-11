import { describe, expect, it } from "vitest";
import { ASN1Construction, ASN1TagClass, ObjectIdentifier } from "@wildboar/asn1";
import { BER, _encodeIA5String, _encodeUTF8String } from "@wildboar/asn1/functional";
import { AttributeTypeAndValue } from "../AttributeTypeAndValue.ta.mjs";
import type { RelativeDistinguishedName } from "../RelativeDistinguishedName.ta.mjs";
import { asDITAscending, asDITDescending } from "./order.mjs";
import { toDnsName } from "./todnsname.mjs";

const dcOID = ObjectIdentifier.fromParts([0, 9, 2342, 19200300, 100, 1, 25]);
const cnOID = ObjectIdentifier.fromParts([2, 5, 4, 3]);

function dc (label: string): RelativeDistinguishedName {
    return [new AttributeTypeAndValue(dcOID, _encodeIA5String(label, BER))];
}

describe("toDnsName()", () => {
    it("joins the labels in the order given", () => {
        expect(toDnsName([dc("www"), dc("example"), dc("com")]))
            .toBe("www.example.com");
    });

    it("joins the labels in the order supplied, whatever the DIT order", () => {
        const rdns = [dc("www"), dc("example"), dc("com")];
        expect(toDnsName(asDITAscending(rdns))).toBe("www.example.com");
        expect(toDnsName(asDITDescending(rdns))).toBe("www.example.com");
        expect(toDnsName(asDITDescending([...rdns].reverse()))).toBe("com.example.www");
    });

    it("converts a single label", () => {
        expect(toDnsName([dc("localhost")])).toBe("localhost");
    });

    it("returns null for an empty sequence", () => {
        expect(toDnsName([])).toBeNull();
    });

    it("returns null if an RDN has more than one ATAV", () => {
        const multi: RelativeDistinguishedName = [...dc("example"), ...dc("org")];
        expect(toDnsName([dc("www"), multi, dc("com")])).toBeNull();
    });

    it("returns null if an RDN is empty", () => {
        expect(toDnsName([dc("www"), [], dc("com")])).toBeNull();
    });

    it("returns null if an attribute type is not domainComponent", () => {
        const cn: RelativeDistinguishedName = [
            new AttributeTypeAndValue(cnOID, _encodeIA5String("example", BER)),
        ];
        expect(toDnsName([dc("www"), cn, dc("com")])).toBeNull();
    });

    it("returns null if a value is not an IA5String", () => {
        const utf8: RelativeDistinguishedName = [
            new AttributeTypeAndValue(dcOID, _encodeUTF8String("example", BER)),
        ];
        expect(toDnsName([dc("www"), utf8, dc("com")])).toBeNull();
    });

    it("returns null if a value has an IA5String tag number in a non-universal class", () => {
        const el = _encodeIA5String("a", BER);
        el.tagClass = ASN1TagClass.context;
        const odd: RelativeDistinguishedName = [new AttributeTypeAndValue(dcOID, el)];
        expect(toDnsName([odd])).toBeNull();
    });

    it("propagates errors from decoding an IA5String", () => {
        // A constructed IA5String whose content is not a series of elements.
        const el = _encodeIA5String("example", BER);
        el.construction = ASN1Construction.constructed;
        el.value = new Uint8Array([0x61, 0xff]);
        const bad: RelativeDistinguishedName = [new AttributeTypeAndValue(dcOID, el)];
        expect(() => toDnsName([bad])).toThrow();
    });
});
