import { describe, expect, it } from "vitest";
import {
    isAttributeTypeAndValueString,
    validateAttributeTypeAndValueString,
    validateAttributeValueSemantics,
} from "./validate.mjs";

function expectValid (atav: string, escaped: boolean): void {
    expect(() => validateAttributeTypeAndValueString(atav, escaped)).not.toThrow();
}

function expectInvalid (atav: string, escaped: boolean): void {
    expect(() => validateAttributeTypeAndValueString(atav, escaped)).toThrow(SyntaxError);
}

describe.each([false, true])("validateAttributeTypeAndValueString(atav, %s)", (escaped) => {
    it("accepts ordinary descr values", () => {
        expectValid("cn=Smith", escaped);
        expectValid("UID=jsmith", escaped);
        expectValid("ou=Sales", escaped);
        expectValid("cn=", escaped);
        expectValid("cn=a=b", escaped);
    });

    it("accepts numeric OIDs with hexstring values", () => {
        expectValid("1.3.6.1.4.1.1466.0=#04024869", escaped);
        expectValid("2.40=#0500", escaped);
        expectValid("0.9.2342.19200300.100.1.25=#0403726F6F74", escaped);
    });

    it("rejects raw null characters", () => {
        expectInvalid("cn=a\0b", escaped);
        expectInvalid("c\0n=foo", escaped);
    });

    it("rejects a missing or empty type", () => {
        expectInvalid("cn", escaped);
        expectInvalid("=foo", escaped);
        expectInvalid("\\=foo", escaped);
    });

    it("rejects invalid attribute types", () => {
        expectInvalid("foo_bar=baz", escaped);
        expectInvalid("cn =foo", escaped);
        expectInvalid(" ou=foo", escaped);
        expectInvalid("01.2=#04024869", escaped);
        expectInvalid("1.=foo", escaped);
    });

    it("rejects invalid numeric OIDs", () => {
        expectInvalid("9.1=#0402", escaped);
        expectInvalid("3.4=#0402", escaped);
        expectInvalid("1=#0402", escaped);
        expectInvalid("1.40=#0402", escaped);
        expectInvalid("0.40=#AB", escaped);
        expectInvalid("01.2=#0402", escaped);
    });

    it("rejects numeric OIDs without hexstring values", () => {
        expectInvalid("1.3.6.1.4.1.1466.0=Hi", escaped);
        expectInvalid("1.2.3=", escaped);
        expectInvalid("2.5.4.3=Smith", escaped);
        expectInvalid("1.2.3=\\#0402", escaped);
    });

    it("rejects numeric OIDs with hex digits but no number sign", () => {
        expectInvalid("1.2.3=a0402", escaped);
        expectInvalid("1.2.3=04024869", escaped);
        expectInvalid("1.2.3=\\230402", escaped); // Hex-escaped `#`.
        expectInvalid("2.5.4.3= 0402", escaped);
    });

    it("rejects malformed hexstring values for numeric OIDs", () => {
        expectInvalid("1.2.3=#", escaped);
        expectInvalid("1.2.3=#0402486", escaped);
        expectInvalid("1.2.3=#040G", escaped);
    });

    it("checks value semantics", () => {
        expectValid("oidC=42", escaped);
        expectInvalid("oidC=4a", escaped);
        expectValid("objectIdentifier=2.5.4.3", escaped);
        expectInvalid("objectIdentifier=9.9", escaped);
    });
});

describe("validateAttributeTypeAndValueString() with escaped values", () => {
    it("accepts the RFC 4514 examples", () => {
        expectValid("CN=James \\\"Jim\\\" Smith\\, III", true);
        expectValid("CN=Before\\0dAfter", true);
        expectValid("CN=Lu\\C4\\8Di\\C4\\87", true);
        expectValid("OU=Sales", true);
        expectValid("CN=J.  Smith", true);
    });

    it("accepts hexstring values for descr types", () => {
        expectValid("cn=#04024869", true);
    });

    it("does not apply string-value rules to hexstring values", () => {
        // A string value may not start with an unescaped `#`.
        expectValid("cn=#0402", true);
        expectValid("2.5.4.3=#0402", true);
        expectValid("cn=#0C03416263", true);
    });

    it("does not apply value semantics to hexstring values", () => {
        expectValid("oidC=#020102", true);
    });

    it("rejects malformed hexstring values for descr types", () => {
        expectInvalid("cn=#", true);
        expectInvalid("cn=#0", true);
        expectInvalid("cn=#0402486", true);
        expectInvalid("cn=#GG", true);
    });

    it("rejects malformed escapes", () => {
        expectInvalid("cn=foo\\", true);
        expectInvalid("cn=foo\\q", true);
        expectInvalid("cn=foo\\0", true);
        expectInvalid("cn=\\FF", true);
        expectInvalid("cn=\\C4", true);
        expectInvalid("cn=a\\*b", true);
    });

    it("accepts hex-escaped UTF-8 of every length", () => {
        expectValid("cn=\\41", true);
        expectValid("cn=\\c4\\8d", true);
        expectValid("cn=\\E2\\82\\AC", true);
        expectValid("cn=\\ED\\9F\\BF", true);
        expectValid("cn=\\F0\\9F\\98\\80", true);
        expectValid("cn=\\F4\\8F\\BF\\BF", true);
        expectValid("cn=a\\C4\\8Db\\C4\\87", true);
    });

    it("rejects invalid hex-escaped UTF-8", () => {
        expectInvalid("cn=\\80", true); // Lone continuation byte.
        expectInvalid("cn=\\C0\\80", true); // Overlong.
        expectInvalid("cn=\\E0\\80\\80", true); // Overlong.
        expectInvalid("cn=\\F0\\80\\80\\80", true); // Overlong.
        expectInvalid("cn=\\ED\\A0\\80", true); // Surrogate.
        expectInvalid("cn=\\F4\\90\\80\\80", true); // Above U+10FFFF.
        expectInvalid("cn=\\F5\\80\\80\\80", true); // Invalid lead byte.
        expectInvalid("cn=\\E2\\82", true); // Truncated at end.
        expectInvalid("cn=\\E2\\82a", true); // Interrupted by a character.
        expectInvalid("cn=\\E2\\82\\,", true); // Interrupted by an escape.
        expectInvalid("cn=\\C4\\41", true); // Non-continuation byte.
        expectInvalid("cn=\\C4\\8Da\\C4", true); // Second run truncated.
        expectInvalid("cn=\\C4a\\8D", true); // Sequence split across runs.
    });

    it("rejects an escaped null character", () => {
        expectInvalid("cn=a\\00b", true);
    });

    it("rejects unescaped leading and trailing spaces", () => {
        expectInvalid("cn= foo", true);
        expectInvalid("cn=foo ", true);
        expectInvalid("cn= ", true);
    });

    it("rejects unescaped special characters", () => {
        expectInvalid("cn=a\"b", true);
        expectInvalid("cn=a;b", true);
        expectInvalid("cn=a<b", true);
        expectInvalid("cn=a>b", true);
    });

    it("accepts escaped special characters", () => {
        expectValid("cn=\\ foo", true);
        expectValid("cn=foo\\ ", true);
        expectValid("cn=\\#foo", true);
        expectValid("cn=a\\;b", true);
        expectValid("cn=foo\\2Cou", true);
    });

    it("accepts a trailing unescaped number sign", () => {
        // TUTF1 includes `#`: only a leading `#` must be escaped.
        expectValid("cn=foo#", true);
        expectValid("cn=foo#bar", true);
    });
});

describe("validateAttributeTypeAndValueString() with unescaped values", () => {
    it("is the default", () => {
        expect(() => validateAttributeTypeAndValueString("cn=a+b")).not.toThrow();
    });

    it("accepts characters that a distinguished name must escape", () => {
        expectValid("cn=Smith, Jr", false);
        expectValid("cn=a+b", false);
        expectValid("cn= leading", false);
        expectValid("cn=trailing ", false);
        expectValid("cn=\"quoted\"", false);
        expectValid("cn=a;b<c>d", false);
        expectValid("cn=Lučić", false);
        expectValid("cn=😀", false);
    });

    it("takes backslashes literally", () => {
        expectValid("cn=foo\\", false);
        expectValid("cn=\\q", false);
        expectValid("cn=\\FF", false);
        expectValid("cn=\\C4", false);
        expectValid("cn=a\\00b", false); // A backslash, not a null.
    });

    it("accepts hexstring values for descr types", () => {
        expectValid("cn=#04024869", false);
        expectValid("cn=#0c03416263", false);
    });

    it("does not apply value semantics to hexstring values", () => {
        expectValid("oidC=#020102", false);
        expectValid("objectIdentifier=#0603550403", false);
    });

    it("takes a leading number sign literally when not a hexstring", () => {
        expectValid("cn=#", false);
        expectValid("cn=#GG", false);
        expectValid("cn=#0402486", false);
        expectValid("cn=#1 Fan", false);
        expectInvalid("oidC=#GG", false); // Not an integer.
        expectInvalid("oidC=#02", false); // Too short to be a hexstring.
        expectInvalid("objectIdentifier=#0603550", false); // Odd length.
    });

    it("rejects lone surrogates", () => {
        expectInvalid("cn=a\uD800b", false);
        expectInvalid("cn=\uDC00", false);
    });
});

describe("isAttributeTypeAndValueString()", () => {
    it("returns whether the string is valid", () => {
        expect(isAttributeTypeAndValueString("cn=a,b")).toBe(true);
        expect(isAttributeTypeAndValueString("cn=a,b", false)).toBe(true);
        expect(isAttributeTypeAndValueString("cn=a,b", true)).toBe(false);
        expect(isAttributeTypeAndValueString("cn=a\\,b", true)).toBe(true);
        expect(isAttributeTypeAndValueString("cn")).toBe(false);
        expect(isAttributeTypeAndValueString("1.2.3=foo", true)).toBe(false);
    });
});

describe("validateAttributeValueSemantics()", () => {
    it("rejects null characters", () => {
        expect(() => validateAttributeValueSemantics("cn", "a\0b")).toThrow(SyntaxError);
        expect(() => validateAttributeValueSemantics("cn", "abc")).not.toThrow();
    });

    it("checks integer values", () => {
        expect(() => validateAttributeValueSemantics("oidC", "42")).not.toThrow();
        expect(() => validateAttributeValueSemantics("oidC", "-7")).not.toThrow();
        expect(() => validateAttributeValueSemantics("oidC", "4a")).toThrow(SyntaxError);
        expect(() => validateAttributeValueSemantics("oidC", "")).toThrow(SyntaxError);
    });

    it("checks object identifier values", () => {
        expect(() => validateAttributeValueSemantics(
            "objectIdentifier",
            "1.2.3",
        )).not.toThrow();
        expect(() => validateAttributeValueSemantics(
            "objectIdentifier",
            "9.9",
        )).toThrow(SyntaxError);
        expect(() => validateAttributeValueSemantics(
            "objectIdentifier",
            "1",
        )).toThrow(SyntaxError);
    });
});
