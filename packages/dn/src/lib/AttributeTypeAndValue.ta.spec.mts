import { describe, expect, it } from "vitest";
import {
    ASN1Construction,
    ASN1TagClass,
    ASN1UniversalType,
    DERElement,
    ObjectIdentifier,
} from "@wildboar/asn1";
import { AttributeTypeAndValue } from "./AttributeTypeAndValue.ta.mjs";

const commonName = ObjectIdentifier.fromString("2.5.4.3");

function utf8Element(s: string): DERElement {
    const el = new DERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.utf8String,
    );
    el.utf8String = s;
    return el;
}

describe("AttributeTypeAndValue string forms", () => {
    it("uses the short name for a registered LDAP attribute type", () => {
        const value = new AttributeTypeAndValue(commonName, utf8Element("CN"));
        expect(value.toString()).toBe("cn=CN");
        expect(value.toLdapString()).toBe("cn=CN");
    });

    it("keeps a non-LDAP short name only outside the LDAP form", () => {
        const organizationIdentifier = ObjectIdentifier.fromString("2.5.4.97");
        const value = new AttributeTypeAndValue(organizationIdentifier, utf8Element("NTRUS-123"));
        expect(value.toString()).toBe("organizationIdentifier=NTRUS-123");
        expect(value.toLdapString()).toBe("2.5.4.97=#0c094e545255532d313233");
    });

    it("uses a numeric OID and the unrecognized hex value encoding", () => {
        const value = new AttributeTypeAndValue(commonName, utf8Element("CN"));
        expect(value.toInteropString()).toBe("2.5.4.3=#0c02434e");
    });

    it("produces identical keys for values that would match", () => {
        const a = new AttributeTypeAndValue(commonName, utf8Element("  Smith,  JOHN "));
        const b = new AttributeTypeAndValue(commonName, utf8Element("smith, john"));
        expect(a.toKey()).toBe("2.5.4.3=smith, john");
        expect(a.toKey()).toBe(b.toKey());
    });
});
