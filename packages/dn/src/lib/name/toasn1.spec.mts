import { describe, expect, it } from "vitest";
import { ObjectIdentifier } from "@wildboar/asn1";
import { BER, _encodeUTF8String } from "@wildboar/asn1/functional";
import { AttributeTypeAndValue } from "../AttributeTypeAndValue.ta.mjs";
import { commonNameOID, countryNameOID, domainComponentOID } from "../attributeTypes.mjs";
import attributeTypeAndValueToASN1String from "../atav/toasn1.mjs";
import relativeDistinguishedNameToASN1String from "../rdn/toasn1.mjs";
import rdnSequenceToASN1String from "../rdnseq/toasn1.mjs";
import nameToASN1String from "./toasn1.mjs";

function atav (oid: string, value: string): AttributeTypeAndValue {
    return new AttributeTypeAndValue(
        ObjectIdentifier.fromString(oid),
        _encodeUTF8String(value, BER),
    );
}

describe("attributeTypeAndValueToASN1String()", () => {
    it("writes the numeric OID and the value's toString()", () => {
        const a = atav(commonNameOID, "Jonathan");
        expect(attributeTypeAndValueToASN1String(a))
            .toBe(`{ type 2.5.4.3, value ${a.value.toString()} }`);
        expect(a.toASN1String()).toBe(attributeTypeAndValueToASN1String(a));
        expect(attributeTypeAndValueToASN1String(a)).toContain("Jonathan");
    });
});

describe("relativeDistinguishedNameToASN1String()", () => {
    it("writes an empty RDN as { }", () => {
        expect(relativeDistinguishedNameToASN1String([])).toBe("{ }");
    });

    it("joins ATAVs with a comma in their existing order", () => {
        const a = atav(countryNameOID, "US");
        const b = atav(commonNameOID, "CN");
        expect(relativeDistinguishedNameToASN1String([ a, b ])).toBe(
            `{ ${attributeTypeAndValueToASN1String(a)}, ${attributeTypeAndValueToASN1String(b)} }`,
        );
    });
});

describe("rdnSequenceToASN1String()", () => {
    it("writes an empty sequence as { }", () => {
        expect(rdnSequenceToASN1String([])).toBe("{ }");
    });

    it("joins RDNs with a comma without reversing them", () => {
        const a = atav(countryNameOID, "US");
        const b = atav(commonNameOID, "CN");
        const c = atav(domainComponentOID, "a");
        expect(rdnSequenceToASN1String([ [ a ], [ b, c ] ])).toBe(
            "{ "
            + relativeDistinguishedNameToASN1String([ a ])
            + ", "
            + relativeDistinguishedNameToASN1String([ b, c ])
            + " }",
        );
    });
});

describe("nameToASN1String()", () => {
    it("prefixes the rdnSequence alternative", () => {
        const rdns = [ [ atav(countryNameOID, "US") ] ];
        expect(nameToASN1String({ rdnSequence: rdns }))
            .toBe(`rdnSequence : ${rdnSequenceToASN1String(rdns)}`);
    });

    it("handles the empty name", () => {
        expect(nameToASN1String({ rdnSequence: [] })).toBe("rdnSequence : { }");
    });
});
