import { ASN1UniversalType } from "@wildboar/asn1";
import { describe, expect, it } from "vitest";
import { ParsedAttributeTypeAndValue } from "../ParsedAttributeTypeAndValue.mjs";
import { atavFromStringX520 } from "./fromstr.mjs";

function parse(type: string, value: string) {
    return atavFromStringX520(new ParsedAttributeTypeAndValue(type, value));
}

const directoryStringTypes: ReadonlyArray<readonly [string, string]> = [
    ["cn", "2.5.4.3"],
    ["sn", "2.5.4.4"],
    ["gn", "2.5.4.42"],
    ["givenName", "2.5.4.42"],
    ["initials", "2.5.4.43"],
    ["generationQualifier", "2.5.4.44"],
    ["st", "2.5.4.8"],
    ["l", "2.5.4.7"],
    ["o", "2.5.4.10"],
    ["ou", "2.5.4.11"],
    ["title", "2.5.4.12"],
    ["pseudonym", "2.5.4.65"],
    ["street", "2.5.4.9"],
    ["streetAddress", "2.5.4.9"],
    ["postalCode", "2.5.4.17"],
    ["uid", "0.9.2342.19200300.100.1.1"],
    ["userid", "0.9.2342.19200300.100.1.1"],
    ["documentIdentifier", "0.9.2342.19200300.100.1.11"],
    ["buildingName", "0.9.2342.19200300.100.1.48"],
    ["roomNumber", "0.9.2342.19200300.100.1.6"],
    ["uniqueIdentifier", "0.9.2342.19200300.100.1.44"],
    ["dmdName", "2.5.4.54"],
    ["houseIdentifier", "2.5.4.51"],
    ["postOfficeBox", "2.5.4.18"],
    ["organizationIdentifier", "2.5.4.97"],
];

const telephoneNumberTypes: ReadonlyArray<readonly [string, string]> = [
    ["telephoneNumber", "2.5.4.20"],
    ["homePhone", "0.9.2342.19200300.100.1.20"],
    ["homeTelephoneNumber", "0.9.2342.19200300.100.1.20"],
    ["mobile", "0.9.2342.19200300.100.1.41"],
    ["mobileTelephoneNumber", "0.9.2342.19200300.100.1.41"],
    ["pager", "0.9.2342.19200300.100.1.42"],
    ["pagerTelephoneNumber", "0.9.2342.19200300.100.1.42"],
];

describe("atavFromStringX520()", () => {
    it.each(directoryStringTypes)("encodes %s as an UnboundedDirectoryString", (type, oid) => {
        const printable = parse(type, "Wildboar");
        expect(printable.type_.toString()).toBe(oid);
        expect(printable.value.tagNumber).toBe(ASN1UniversalType.printableString);
        expect(printable.value.printableString).toBe("Wildboar");

        const utf8 = parse(type.toUpperCase(), "Jón");
        expect(utf8.type_.toString()).toBe(oid);
        expect(utf8.value.tagNumber).toBe(ASN1UniversalType.utf8String);
        expect(utf8.value.utf8String).toBe("Jón");
    });

    it("rejects an empty UnboundedDirectoryString", () => {
        expect(() => parse("cn", "")).toThrow(
            new SyntaxError('attribute type "cn": length problem (value length 0, expected at least 1)'),
        );
    });

    it("encodes countryName as a two-character PrintableString", () => {
        const atav = parse("c", "US");
        expect(atav.type_.toString()).toBe("2.5.4.6");
        expect(atav.value.tagNumber).toBe(ASN1UniversalType.printableString);
        expect(atav.value.printableString).toBe("US");
        expect(() => parse("c", "USA")).toThrow(
            new SyntaxError('attribute type "c": length problem (value length 3, expected 2)'),
        );
        expect(() => parse("c", "U")).toThrow(
            new SyntaxError('attribute type "c": length problem (value length 1, expected 2)'),
        );
        expect(() => parse("c", "U$")).toThrow(
            new SyntaxError('attribute type "c": character problem (value contains a character outside PrintableString)'),
        );
    });

    it("encodes countryCode3c as a three-character PrintableString", () => {
        const atav = parse("c3", "USA");
        expect(atav.type_.toString()).toBe("2.5.4.98");
        expect(atav.value.tagNumber).toBe(ASN1UniversalType.printableString);
        expect(atav.value.printableString).toBe("USA");
        expect(() => parse("c3", "US")).toThrow(
            new SyntaxError('attribute type "c3": length problem (value length 2, expected 3)'),
        );
        expect(() => parse("c3", "U$")).toThrow(
            new SyntaxError('attribute type "c3": length problem (value length 2, expected 3)'),
        );
    });

    it("encodes countryCode3n as a three-character NumericString", () => {
        const atav = parse("n3", "840");
        expect(atav.type_.toString()).toBe("2.5.4.99");
        expect(atav.value.tagNumber).toBe(ASN1UniversalType.numericString);
        expect(atav.value.numericString).toBe("840");
        expect(() => parse("n3", "84")).toThrow(
            new SyntaxError('attribute type "n3": length problem (value length 2, expected 3)'),
        );
        expect(() => parse("n3", "84A")).toThrow(
            new SyntaxError('attribute type "n3": character problem (value contains a character outside NumericString)'),
        );
        expect(() => parse("n3", "A")).toThrow(
            new SyntaxError('attribute type "n3": length problem (value length 1, expected 3)'),
        );
    });

    it("encodes dnQualifier as an unbounded PrintableString", () => {
        const atav = parse("dnQualifier", "ABC-1");
        expect(atav.type_.toString()).toBe("2.5.4.46");
        expect(atav.value.tagNumber).toBe(ASN1UniversalType.printableString);
        expect(atav.value.printableString).toBe("ABC-1");
        expect(parse("dnQualifier", "").value.printableString).toBe("");
        expect(() => parse("dnQualifier", "Ä")).toThrow(
            new SyntaxError('attribute type "dnQualifier": character problem (value contains a character outside PrintableString)'),
        );
    });

    it("encodes serialNumber as a non-empty PrintableString", () => {
        const atav = parse("serialNumber", "A,B");
        expect(atav.type_.toString()).toBe("2.5.4.5");
        expect(atav.value.tagNumber).toBe(ASN1UniversalType.printableString);
        expect(atav.value.printableString).toBe("A,B");
        expect(() => parse("serialNumber", "")).toThrow(
            new SyntaxError('attribute type "serialNumber": length problem (value length 0, expected at least 1)'),
        );
        expect(() => parse("serialNumber", "Ä")).toThrow(
            new SyntaxError('attribute type "serialNumber": character problem (value contains a character outside PrintableString)'),
        );
    });

    it.each(telephoneNumberTypes)("encodes %s as a TelephoneNumber", (type, oid) => {
        const atav = parse(type, "+1 512 315 0280");
        expect(atav.type_.toString()).toBe(oid);
        expect(atav.value.tagNumber).toBe(ASN1UniversalType.printableString);
        expect(atav.value.printableString).toBe("+1 512 315 0280");
    });

    it("rejects a TelephoneNumber outside size 1..32", () => {
        expect(() => parse("telephoneNumber", "")).toThrow(
            new SyntaxError('attribute type "telephoneNumber": length problem (value length 0, expected 1..32)'),
        );
        expect(() => parse("mobile", "+".repeat(33))).toThrow(
            new SyntaxError('attribute type "mobile": length problem (value length 33, expected 1..32)'),
        );
        expect(() => parse("pager", "Jón")).toThrow(
            new SyntaxError('attribute type "pager": character problem (value contains a character outside PrintableString)'),
        );
    });

    it("encodes dc as an IA5String", () => {
        const atav = parse("dc", "example");
        expect(atav.type_.toString()).toBe("0.9.2342.19200300.100.1.25");
        expect(atav.value.tagNumber).toBe(ASN1UniversalType.ia5String);
        expect(atav.value.ia5String).toBe("example");
        expect(() => parse("dc", "Jón")).toThrow(
            new SyntaxError('attribute type "dc": character problem (value contains a character outside IA5String)'),
        );
    });

    it("encodes mail as an IA5String of at most 256 characters", () => {
        const atav = parse("mail", "user@example.com");
        expect(atav.type_.toString()).toBe("0.9.2342.19200300.100.1.3");
        expect(atav.value.ia5String).toBe("user@example.com");
        expect(parse("rfc822Mailbox", "a@b.test").type_.toString()).toBe("0.9.2342.19200300.100.1.3");
        expect(() => parse("mail", "a".repeat(257))).toThrow(
            new SyntaxError('attribute type "mail": length problem (value length 257, expected 0..256)'),
        );
    });

    it("encodes emailAddress as an IA5String of size 1..255", () => {
        const atav = parse("emailAddress", "user@example.com");
        expect(atav.type_.toString()).toBe("1.2.840.113549.1.9.1");
        expect(atav.value.tagNumber).toBe(ASN1UniversalType.ia5String);
        expect(atav.value.ia5String).toBe("user@example.com");
        expect(() => parse("emailAddress", "")).toThrow(
            new SyntaxError('attribute type "emailAddress": length problem (value length 0, expected 1..255)'),
        );
    });

    it("rejects a uid that is empty or longer than 256 characters", () => {
        expect(parse("uid", "A".repeat(256)).value.printableString).toBe("A".repeat(256));
        expect(() => parse("uid", "A".repeat(257))).toThrow(
            new SyntaxError('attribute type "uid": length problem (value length 257, expected 1..256)'),
        );
        expect(() => parse("userid", "")).toThrow(
            new SyntaxError('attribute type "userid": length problem (value length 0, expected 1..256)'),
        );
    });

    it("rejects a COSINE DirectoryString longer than 256 characters", () => {
        expect(() => parse("buildingName", "A".repeat(257))).toThrow(
            new SyntaxError('attribute type "buildingName": length problem (value length 257, expected 1..256)'),
        );
    });

    it("encodes dnsName, intEmail, and jid as UTF8String", () => {
        const cases: ReadonlyArray<readonly [string, string, string]> = [
            ["dnsName", "2.5.4.100", "example.com"],
            ["DNS name", "2.5.4.100", "example.com"],
            ["intEmail", "2.5.4.104", "user@example.com"],
            ["Internationalized Email", "2.5.4.104", "用户@example.com"],
            ["jid", "2.5.4.105", "user@example.com"],
            ["Jabber identifier", "2.5.4.105", "user@example.com"],
        ];
        for (const [type, oid, value] of cases) {
            const atav = parse(type, value);
            expect(atav.type_.toString()).toBe(oid);
            expect(atav.value.tagNumber).toBe(ASN1UniversalType.utf8String);
            expect(atav.value.utf8String).toBe(value);
        }
    });

    it("encodes urnC as a PrintableString", () => {
        const atav = parse("urnC", "urn:example");
        expect(atav.type_.toString()).toBe("2.5.4.89");
        expect(atav.value.tagNumber).toBe(ASN1UniversalType.printableString);
        expect(atav.value.printableString).toBe("urn:example");
    });

    it("encodes oidC as an INTEGER", () => {
        const atav = parse("oidC", "42");
        expect(atav.type_.toString()).toBe("2.17.1.2.2");
        expect(atav.value.tagNumber).toBe(ASN1UniversalType.integer);
        expect(atav.value.integer).toBe(42);
        expect(parse("oidC", "-7").value.integer).toBe(-7);
        expect(() => parse("oidC", "")).toThrow(
            new SyntaxError('attribute type "oidC": length problem (value length 0, expected at least 1)'),
        );
        expect(() => parse("oidC", "4a")).toThrow(
            new SyntaxError('attribute type "oidC": character problem (value contains a character outside INTEGER)'),
        );
    });

    it("encodes objectIdentifier as an OBJECT IDENTIFIER", () => {
        const atav = parse("objectIdentifier", "1.2.3");
        expect(atav.type_.toString()).toBe("2.5.4.106");
        expect(atav.value.tagNumber).toBe(ASN1UniversalType.objectIdentifier);
        expect(atav.value.objectIdentifier.toString()).toBe("1.2.3");
        expect(parse("Object Identifier", "2.5.4.3").value.objectIdentifier.toString()).toBe("2.5.4.3");
        expect(() => parse("objectIdentifier", "")).toThrow(
            new SyntaxError('attribute type "objectIdentifier": length problem (value length 0, expected at least 1)'),
        );
        expect(() => parse("objectIdentifier", "1.2.x")).toThrow(
            new SyntaxError('attribute type "objectIdentifier": character problem (value contains a character outside OBJECT IDENTIFIER)'),
        );
        expect(() => parse("objectIdentifier", "1")).toThrow(
            new SyntaxError('attribute type "objectIdentifier": value is not an object identifier'),
        );
    });

    it.each([
        ["mHSCountryName", "2.6.10.3.11", 3, "GB"],
        ["mHSADMDName", "2.6.10.3.9", 16, "ATT"],
        ["mHSPRMDName", "2.6.10.3.25", 16, "ACME"],
        ["mHSOrganizationName", "2.6.10.3.21", 64, "UCL"],
        ["mHSOrganizationalUnitName", "2.6.10.3.22", 32, "CS"],
        ["mHSCommonNameAttribute", "2.6.10.3.10", 64, "Steve Kille"],
        ["mHSSurnameAttribute", "2.6.10.3.27", 40, "Kille"],
        ["mHSGivenNameAttribute", "2.6.10.3.15", 16, "Steve"],
        ["mHSInitialsAttribute", "2.6.10.3.16", 5, "S"],
        ["mHSGenerationQualifierAttribute", "2.6.10.3.14", 3, "Jr"],
        ["mHSNetworkAddressAttribute", "2.6.10.3.18", 16, "234273400148"],
        ["mHSExtendedNetworkAddressAttribute", "2.6.10.3.13", 256, "3100123456"],
        ["mHSTerminalIdentifierAttribute", "2.6.10.3.28", 24, "T-ID"],
        ["mHSTerminalTypeAttribute", "2.6.10.3.29", 5, "3"],
        ["mHSNumericUserIdentifierAttribute", "2.6.10.3.20", 32, "12345"],
        ["mHSPDSNameAttribute", "2.6.10.3.23", 16, "PDS"],
        ["mHSPostalCodeAttribute", "2.6.10.3.24", 16, "WC1E"],
    ] as const)("encodes %s as a bounded DirectoryString", (type, oid, max, value) => {
        const atav = parse(type, value);
        expect(atav.type_.toString()).toBe(oid);
        expect(atav.value.tagNumber).toBe(ASN1UniversalType.printableString);
        expect(atav.value.printableString).toBe(value);
        expect(() => parse(type, "")).toThrow(
            new SyntaxError(`attribute type "${type}": length problem (value length 0, expected 1..${max})`),
        );
        expect(() => parse(type, "A".repeat(max + 1))).toThrow(
            new SyntaxError(`attribute type "${type}": length problem (value length ${max + 1}, expected 1..${max})`),
        );
    });

    it.each([
        ["postalAddress", "2.5.4.16"],
        ["registeredAddress", "2.5.4.26"],
    ] as const)("encodes %s as a PostalAddress", (type, oid) => {
        const atav = parse(type, "1234 Main St.$Anytown, CA 12345$USA");
        expect(atav.type_.toString()).toBe(oid);
        expect(atav.value.tagNumber).toBe(ASN1UniversalType.sequence);
        const lines = atav.value.sequence;
        expect(lines.every((line) => line.tagNumber === ASN1UniversalType.printableString)).toBe(true);
        expect(lines.map((line) => line.printableString)).toEqual([
            "1234 Main St.",
            "Anytown, CA 12345",
            "USA",
        ]);
    });

    it("encodes a non-printable postal-address line as UTF8String", () => {
        const atav = parse("PostalAddress", "Jón$Reykjavík");
        expect(atav.type_.toString()).toBe("2.5.4.16");
        expect(atav.value.sequence.map((line) => line.utf8String)).toEqual(["Jón", "Reykjavík"]);
    });

    it("unescapes \\24 and \\5C inside a postal-address line", () => {
        const atav = parse("postalAddress", "cost\\5Cunit$sweep\\24stakes$\\5cdollar");
        expect(atav.value.sequence.map((line) => line.utf8String)).toEqual([
            "cost\\unit",
            "sweep$stakes",
            "\\dollar",
        ]);
    });

    it("rejects an empty postal-address line", () => {
        const empty = new SyntaxError(
            'attribute type "postalAddress": length problem (value length 0, expected at least 1)',
        );
        expect(() => parse("postalAddress", "")).toThrow(empty);
        expect(() => parse("postalAddress", "a$")).toThrow(empty);
        expect(() => parse("postalAddress", "$a")).toThrow(empty);
        expect(() => parse("postalAddress", "a$$b")).toThrow(empty);
        expect(() => parse("registeredAddress", "")).toThrow(
            new SyntaxError('attribute type "registeredAddress": length problem (value length 0, expected at least 1)'),
        );
    });

    it("rejects a malformed postal-address escape", () => {
        const malformed = new SyntaxError('attribute type "postalAddress": malformed escape');
        expect(() => parse("postalAddress", "a\\b")).toThrow(malformed);
        expect(() => parse("postalAddress", "a\\")).toThrow(malformed);
        expect(() => parse("postalAddress", "a\\2")).toThrow(malformed);
        expect(() => parse("postalAddress", "a\\$")).toThrow(malformed);
    });

    it("rejects an unrecognized attribute type", () => {
        expect(() => parse("foo", "example")).toThrow(new SyntaxError('unrecognized attribute type "foo"'));
    });
});
