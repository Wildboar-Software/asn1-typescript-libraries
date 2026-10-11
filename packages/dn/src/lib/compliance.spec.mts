import { describe, expect, it } from "vitest";
import { ObjectIdentifier } from "@wildboar/asn1";
import { BER, _encodeUTF8String } from "@wildboar/asn1/functional";
import { AttributeTypeAndValue } from "./AttributeTypeAndValue.ta.mjs";
import type { RelativeDistinguishedName } from "./RelativeDistinguishedName.ta.mjs";
import {
    commonNameOID,
    countryNameOID,
    domainComponentOID,
    organizationNameOID,
    pseudonymOID,
    serialNumberOID,
    streetAddressOID,
    surnameOID,
    uidOID,
} from "./attributeTypes.mjs";
import { isQualifiedCertsIssuerCompliant, isQualifiedCertsSubjectCompliant } from "./qccompliance.mjs";
import { isIetfRfc4514Portable } from "./rfc4514portable.mjs";

function atav (oid: string): AttributeTypeAndValue {
    return new AttributeTypeAndValue(
        ObjectIdentifier.fromString(oid),
        _encodeUTF8String("x", BER),
    );
}

function rdn (...oids: string[]): RelativeDistinguishedName {
    return oids.map(atav);
}

describe("isQualifiedCertsSubjectCompliant()", () => {
    it("accepts subject attribute types in an RDN sequence", () => {
        expect(isQualifiedCertsSubjectCompliant([
            rdn(countryNameOID),
            rdn(organizationNameOID),
            rdn(commonNameOID, serialNumberOID),
            rdn(surnameOID),
            rdn(pseudonymOID),
            rdn(domainComponentOID),
        ])).toBe(true);
    });

    it("accepts a single compliant RDN", () => {
        expect(isQualifiedCertsSubjectCompliant(rdn(commonNameOID, surnameOID))).toBe(true);
    });

    it("rejects an unrecognized attribute type, even in a multi-valued RDN", () => {
        expect(isQualifiedCertsSubjectCompliant([ rdn(countryNameOID), rdn(commonNameOID, uidOID) ])).toBe(false);
        expect(isQualifiedCertsSubjectCompliant(rdn(streetAddressOID))).toBe(false);
    });

    it("treats empty names as compliant", () => {
        expect(isQualifiedCertsSubjectCompliant([])).toBe(true);
    });

    it("issuer check uses a narrower set than the subject check", () => {
        const dn = [ rdn(countryNameOID), rdn(commonNameOID) ];
        expect(isQualifiedCertsSubjectCompliant(dn)).toBe(true);
        expect(isQualifiedCertsIssuerCompliant(dn)).toBe(false);
        expect(isQualifiedCertsIssuerCompliant(
            [ rdn(countryNameOID), rdn(organizationNameOID), rdn(serialNumberOID) ],
        )).toBe(true);
    });
});

describe("isIetfRfc4514Portable()", () => {
    it("accepts the attribute types required by RFC 4514", () => {
        expect(isIetfRfc4514Portable([
            rdn(domainComponentOID),
            rdn(uidOID, commonNameOID),
            rdn(streetAddressOID),
            rdn(countryNameOID),
        ])).toBe(true);
    });

    it("rejects other attribute types", () => {
        expect(isIetfRfc4514Portable([ rdn(commonNameOID), rdn(surnameOID) ])).toBe(false);
        expect(isIetfRfc4514Portable(rdn(commonNameOID, "1.2.3.4"))).toBe(false);
    });

    it("treats empty names as portable", () => {
        expect(isIetfRfc4514Portable([])).toBe(true);
    });
});
