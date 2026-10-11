import { describe, expect, it } from "vitest";
import { ObjectIdentifier } from "@wildboar/asn1";
import { BER, _encodeUTF8String } from "@wildboar/asn1/functional";
import { AttributeTypeAndValue } from "../AttributeTypeAndValue.ta.mjs";
import type { RelativeDistinguishedName } from "../RelativeDistinguishedName.ta.mjs";
import { commonNameOID, countryNameOID, domainComponentOID } from "../attributeTypes.mjs";
import relativeDistinguishedNameToInteropString from "../rdn/tointerop.mjs";
import rdnSequenceToInteropString from "./tointerop.mjs";

function atav (oid: string, value: string): AttributeTypeAndValue {
    return new AttributeTypeAndValue(
        ObjectIdentifier.fromString(oid),
        _encodeUTF8String(value, BER),
    );
}

describe("relativeDistinguishedNameToInteropString()", () => {
    it("writes numeric OIDs and hex values", () => {
        expect(relativeDistinguishedNameToInteropString([ atav(commonNameOID, "CN") ]))
            .toBe("2.5.4.3=#0c02434e");
    });

    it("joins multiple ATAVs with + in their existing order", () => {
        const rdn: RelativeDistinguishedName = [
            atav(countryNameOID, "US"),
            atav(commonNameOID, "CN"),
        ];
        expect(relativeDistinguishedNameToInteropString(rdn))
            .toBe("2.5.4.6=#0c025553+2.5.4.3=#0c02434e");
    });

    it("returns an empty string for an empty RDN", () => {
        expect(relativeDistinguishedNameToInteropString([])).toBe("");
    });

    it("does not need to escape special characters", () => {
        expect(relativeDistinguishedNameToInteropString([ atav(commonNameOID, "a,b+c") ]))
            .toBe("2.5.4.3=#0c05612c622b63");
    });
});

describe("rdnSequenceToInteropString()", () => {
    it("joins RDNs with , without reversing them", () => {
        expect(rdnSequenceToInteropString([
            [ atav(countryNameOID, "US") ],
            [ atav(commonNameOID, "CN"), atav(domainComponentOID, "a") ],
        ])).toBe("2.5.4.6=#0c025553,2.5.4.3=#0c02434e+0.9.2342.19200300.100.1.25=#0c0161");
    });

    it("returns an empty string for an empty sequence", () => {
        expect(rdnSequenceToInteropString([])).toBe("");
    });
});
