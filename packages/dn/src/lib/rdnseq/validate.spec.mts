import { describe, expect, it } from "vitest";
import validateRDNSequenceString from "./validate.mjs";

function expectInvalid (dn: string): void {
    let caught: unknown;
    try {
        validateRDNSequenceString(dn);
    } catch (error) {
        caught = error;
    }
    expect(caught).toBeInstanceOf(SyntaxError);
}

describe("validateRDNSequenceString()", () => {
    it("accepts the empty DN", () => {
        expect(() => validateRDNSequenceString("")).not.toThrow();
    });

    it("accepts the RFC 4514 examples", () => {
        expect(() => validateRDNSequenceString(
            "UID=jsmith,DC=example,DC=net",
        )).not.toThrow();
        expect(() => validateRDNSequenceString(
            "OU=Sales+CN=J.  Smith,DC=example,DC=net",
        )).not.toThrow();
        expect(() => validateRDNSequenceString(
            "CN=James \\\"Jim\\\" Smith\\, III,DC=example,DC=net",
        )).not.toThrow();
        expect(() => validateRDNSequenceString(
            "CN=Before\\0dAfter,DC=example,DC=net",
        )).not.toThrow();
        expect(() => validateRDNSequenceString(
            "1.3.6.1.4.1.1466.0=#04024869",
        )).not.toThrow();
        expect(() => validateRDNSequenceString(
            "CN=Lu\\C4\\8Di\\C4\\87",
        )).not.toThrow();
    });

    it("rejects empty RDNs", () => {
        expectInvalid("cn=foo,");
        expectInvalid(",cn=foo");
        expectInvalid("cn=foo,,ou=bar");
        expectInvalid(",");
    });

    it("rejects RDNs without an unescaped equals sign", () => {
        expectInvalid("cn");
        expectInvalid("cn=foo,ou");
    });

    it("accepts hexstring values in any RDN", () => {
        expect(() => validateRDNSequenceString(
            "cn=Smith,1.2.3=#0402,dc=example",
        )).not.toThrow();
        expect(() => validateRDNSequenceString(
            "dc=example,cn=#0C03416263",
        )).not.toThrow();
    });

    it("rejects numeric OIDs without hexstring values", () => {
        expectInvalid("1.2.3=foo,dc=example");
        expectInvalid("dc=example,1.2.3=a0402");
    });

    it("rejects malformed escapes", () => {
        expectInvalid("cn=foo,ou=bar\\");
        expectInvalid("cn=foo\\q,ou=bar");
    });

    it("does not split on escaped commas", () => {
        expect(() => validateRDNSequenceString(
            "cn=Smith\\, Jr,ou=People",
        )).not.toThrow();
    });
});
