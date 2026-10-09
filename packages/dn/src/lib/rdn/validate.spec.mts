import { describe, expect, it } from "vitest";
import validateRelativeDistinguishedNameString, {
    isRelativeDistinguishedNameString,
} from "./validate.mjs";

describe("isRelativeDistinguishedNameString()", () => {
    it("returns whether the string is valid", () => {
        expect(isRelativeDistinguishedNameString("cn=a+sn=b")).toBe(true);
        expect(isRelativeDistinguishedNameString("")).toBe(false);
        expect(isRelativeDistinguishedNameString("cn=a,dc=b")).toBe(false);
        expect(isRelativeDistinguishedNameString("cn=a++sn=b")).toBe(false);
    });
});

function expectInvalid (rdn: string): void {
    let caught: unknown;
    try {
        validateRelativeDistinguishedNameString(rdn);
    } catch (error) {
        caught = error;
    }
    expect(caught).toBeInstanceOf(SyntaxError);
}

describe("validateRelativeDistinguishedNameString()", () => {
    it("accepts single- and multi-valued RDNs", () => {
        expect(() => validateRelativeDistinguishedNameString("cn=Smith")).not.toThrow();
        expect(() => validateRelativeDistinguishedNameString(
            "OU=Sales+CN=J.  Smith",
        )).not.toThrow();
        expect(() => validateRelativeDistinguishedNameString(
            "cn=Smith\\, Jr+gn=Jonathan",
        )).not.toThrow();
    });

    it("rejects empty RDNs and empty values", () => {
        expectInvalid("");
        expectInvalid("+cn=a");
        expectInvalid("cn=a+");
        expectInvalid("cn=a++sn=b");
        expectInvalid("+");
    });

    it("rejects RDNs without an unescaped equals sign", () => {
        expectInvalid("cn");
        expectInvalid("cn+sn=b");
    });

    it("accepts hexstring values in multi-valued RDNs", () => {
        expect(() => validateRelativeDistinguishedNameString(
            "cn=Smith+1.2.3=#0402",
        )).not.toThrow();
        expect(() => validateRelativeDistinguishedNameString(
            "2.5.4.3=#0402+cn=#0C03416263",
        )).not.toThrow();
    });

    it("rejects numeric types without hexstring values in multi-valued RDNs", () => {
        expectInvalid("cn=Smith+1.2.3=a0402");
    });

    it("validates each attribute type and value as escaped", () => {
        expectInvalid("cn=a,b");
        expectInvalid("cn= a+sn=b");
        expectInvalid("cn=a+sn=b\\q");
        expect(() => validateRelativeDistinguishedNameString(
            "cn=a\\,b+sn=\\ b",
        )).not.toThrow();
    });

    it("does not split on escaped plus signs", () => {
        expect(() => validateRelativeDistinguishedNameString(
            "cn=a\\+b",
        )).not.toThrow();
    });
});
