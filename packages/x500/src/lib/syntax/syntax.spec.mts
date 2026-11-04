import { validateCountryCode, validateCountryCode3c, validateCountryCode3n, validateCountryName } from "./country.mjs";
import { validateDnsName } from "./dnsName.mjs";
import { validateIntEmail } from "./email.mjs";
import { validateJid } from "./jid.mjs";
import { validateInternationalISDNNumber, validateTelephoneNumber, validateX121Address } from "./telephone.mjs";
import { validateUri, validateUrl, validateUrn } from "./uri.mjs";

describe("validateTelephoneNumber", () => {
    it("accepts E.123 international notation", () => {
        expect(validateTelephoneNumber("+ 44 582 10101")).toBe(true);
        expect(validateTelephoneNumber("+1-512-315-0280")).toBe(true);
        expect(validateTelephoneNumber("+61 3 9896 7830")).toBe(true);
        expect(validateTelephoneNumber("+1")).toBe(true);
        expect(validateTelephoneNumber("+" + "1".repeat(31))).toBe(true);
    });

    it("rejects other printable characters, a missing plus, and overlong values", () => {
        expect(validateTelephoneNumber("+")).toBe(false);
        expect(validateTelephoneNumber("+---")).toBe(false);
        expect(validateTelephoneNumber("4458210101")).toBe(false);
        expect(validateTelephoneNumber(" +1")).toBe(false);
        expect(validateTelephoneNumber("+1(703)555-1212")).toBe(false);
        expect(validateTelephoneNumber("+1.703.555.1212")).toBe(false);
        expect(validateTelephoneNumber("+" + "1".repeat(32))).toBe(false);
        expect(validateTelephoneNumber("")).toBe(false);
    });
});

describe("validateInternationalISDNNumber and validateX121Address", () => {
    it("accepts digits and spaces within the upper bound", () => {
        expect(validateInternationalISDNNumber("14155551212")).toBe(true);
        expect(validateInternationalISDNNumber("1 415 555 1212")).toBe(true);
        expect(validateInternationalISDNNumber("1".repeat(16))).toBe(true);
        expect(validateX121Address("1".repeat(15))).toBe(true);
        expect(validateX121Address("3110 1234567890")).toBe(true);
    });

    it("rejects a plus, an empty digit run, and an overlong value", () => {
        expect(validateInternationalISDNNumber("+14155551212")).toBe(false);
        expect(validateInternationalISDNNumber(" ")).toBe(false);
        expect(validateInternationalISDNNumber("1".repeat(17))).toBe(false);
        expect(validateX121Address("1".repeat(16))).toBe(false);
        expect(validateX121Address("")).toBe(false);
    });
});

describe("country codes", () => {
    it("accepts two ASCII letters for country name and country code", () => {
        expect(validateCountryName("US")).toBe(true);
        expect(validateCountryName("us")).toBe(true);
        expect(validateCountryCode("de")).toBe(true);
        expect(validateCountryCode("DE")).toBe(true);
    });

    it("does not consult the ISO 3166 repertoire", () => {
        expect(validateCountryCode("XX")).toBe(true);
        expect(validateCountryName("QQ")).toBe(true);
    });

    it("rejects the wrong length and non-letters", () => {
        expect(validateCountryName("USA")).toBe(false);
        expect(validateCountryCode("U")).toBe(false);
        expect(validateCountryCode("U1")).toBe(false);
        expect(validateCountryCode("U ")).toBe(false);
        expect(validateCountryName("")).toBe(false);
    });

    it("checks alpha-3 and numeric-3 by shape only", () => {
        expect(validateCountryCode3c("USA")).toBe(true);
        expect(validateCountryCode3c("usa")).toBe(true);
        expect(validateCountryCode3c("QQQ")).toBe(true);
        expect(validateCountryCode3c("US")).toBe(false);
        expect(validateCountryCode3c("US1")).toBe(false);
        expect(validateCountryCode3n("840")).toBe(true);
        expect(validateCountryCode3n("000")).toBe(true);
        expect(validateCountryCode3n("84")).toBe(false);
        expect(validateCountryCode3n("84A")).toBe(false);
        expect(validateCountryCode3n(" 40")).toBe(false);
    });
});

describe("validateDnsName", () => {
    it("accepts LDH labels, A-labels, U-labels, and one leftmost wildcard", () => {
        expect(validateDnsName("example.com")).toBe(true);
        expect(validateDnsName("Example.COM")).toBe(true);
        expect(validateDnsName("localhost")).toBe(true);
        expect(validateDnsName("example.com.")).toBe(true);
        expect(validateDnsName("點看.com")).toBe(true);
        expect(validateDnsName("xn--c1yn36f.com")).toBe(true);
        expect(validateDnsName("XN--C1YN36F.COM")).toBe(true);
        expect(validateDnsName("bücher.example")).toBe(true);
        expect(validateDnsName("BÜcher.example")).toBe(true);
        expect(validateDnsName("*.example.com")).toBe(true);
        expect(validateDnsName("*.example.com.")).toBe(true);
        expect(validateDnsName("123")).toBe(true);
        expect(validateDnsName("a".repeat(63) + ".com")).toBe(true);
    });

    it("rejects broken labels, reserved LDH, and misplaced wildcards", () => {
        expect(validateDnsName("")).toBe(false);
        expect(validateDnsName(".")).toBe(false);
        expect(validateDnsName(".example.com")).toBe(false);
        expect(validateDnsName("example..com")).toBe(false);
        expect(validateDnsName("example.com..")).toBe(false);
        expect(validateDnsName("-bad.com")).toBe(false);
        expect(validateDnsName("bad-.com")).toBe(false);
        expect(validateDnsName("foo_bar.com")).toBe(false);
        expect(validateDnsName("not a domain")).toBe(false);
        expect(validateDnsName("ab--cd.com")).toBe(false);
        expect(validateDnsName("xn--")).toBe(false);
        expect(validateDnsName("xn--zz")).toBe(false);
        expect(validateDnsName("*")).toBe(false);
        expect(validateDnsName("*.")).toBe(false);
        expect(validateDnsName("foo.*.com")).toBe(false);
        expect(validateDnsName("*.*.com")).toBe(false);
        expect(validateDnsName("a".repeat(64) + ".com")).toBe(false);
        expect(validateDnsName("ex\u0001ample.com")).toBe(false);
        expect(validateDnsName("e\u0301.com")).toBe(false);
        expect(validateDnsName("ｅｘａｍｐｌｅ.com")).toBe(false);
    });

    it("enforces the 253-octet presentation limit on the ACE form", () => {
        const fits: string = [
            "a".repeat(63),
            "b".repeat(63),
            "c".repeat(63),
            "d".repeat(61),
        ].join(".");
        const over: string = [
            "a".repeat(63),
            "b".repeat(63),
            "c".repeat(63),
            "d".repeat(62),
        ].join(".");
        expect(fits.length).toBe(253);
        expect(over.length).toBe(254);
        expect(validateDnsName(fits)).toBe(true);
        expect(validateDnsName(over)).toBe(false);
        expect(validateDnsName(fits + ".")).toBe(true);
    });
});

describe("validateIntEmail", () => {
    it("accepts dot-atom and quoted local-parts, including non-ASCII", () => {
        expect(validateIntEmail("user@example.com")).toBe(true);
        expect(validateIntEmail("User@Example.COM")).toBe(true);
        expect(validateIntEmail("first.last@example.com")).toBe(true);
        expect(validateIntEmail("用户@點看.com")).toBe(true);
        expect(validateIntEmail("用户.名@example.com")).toBe(true);
        expect(validateIntEmail("\"a@b\"@example.com")).toBe(true);
        expect(validateIntEmail("\"us er\"@example.com")).toBe(true);
        expect(validateIntEmail("\"say \\\"hi\\\"\"@example.com")).toBe(true);
        expect(validateIntEmail("a@localhost")).toBe(true);
        expect(validateIntEmail("a@example.com.")).toBe(true);
        expect(validateIntEmail("a".repeat(64) + "@example.com")).toBe(true);
    });

    it("rejects a missing part, a wildcard domain, and a broken local-part", () => {
        expect(validateIntEmail("@example.com")).toBe(false);
        expect(validateIntEmail("user@")).toBe(false);
        expect(validateIntEmail("user")).toBe(false);
        expect(validateIntEmail("us er@example.com")).toBe(false);
        expect(validateIntEmail("a..b@example.com")).toBe(false);
        expect(validateIntEmail(".a@example.com")).toBe(false);
        expect(validateIntEmail("a.@example.com")).toBe(false);
        expect(validateIntEmail("a@b@example.com")).toBe(false);
        expect(validateIntEmail("a@*.example.com")).toBe(false);
        expect(validateIntEmail("a@-bad.com")).toBe(false);
        expect(validateIntEmail("\"unclosed@example.com")).toBe(false);
        expect(validateIntEmail("a".repeat(65) + "@example.com")).toBe(false);
        expect(validateIntEmail("")).toBe(false);
    });
});

describe("validateJid", () => {
    it("accepts a bare domain, a localpart, a resource, and IP domains", () => {
        expect(validateJid("example.com")).toBe(true);
        expect(validateJid("user@example.com")).toBe(true);
        expect(validateJid("user@example.com/resource")).toBe(true);
        expect(validateJid("user@example.com/room/nick")).toBe(true);
        expect(validateJid("example.com/resource")).toBe(true);
        expect(validateJid("用户@點看.com/資源")).toBe(true);
        expect(validateJid("user@192.0.2.1")).toBe(true);
        expect(validateJid("user@[2001:db8::1]")).toBe(true);
        expect(validateJid("user@[::1]")).toBe(true);
        expect(validateJid("user@example.com/has space")).toBe(true);
    });

    it("rejects empty parts, wildcards, and a bracketed IPv4", () => {
        expect(validateJid("")).toBe(false);
        expect(validateJid("@example.com")).toBe(false);
        expect(validateJid("user@")).toBe(false);
        expect(validateJid("user@example.com/")).toBe(false);
        expect(validateJid("user name@example.com")).toBe(false);
        expect(validateJid("user@*.example.com")).toBe(false);
        expect(validateJid("user@[192.0.2.1]")).toBe(false);
        expect(validateJid("user@[not-an-ip]")).toBe(false);
        expect(validateJid("a".repeat(1024) + "@example.com")).toBe(false);
        expect(validateJid("user@example.com/" + "a".repeat(1024))).toBe(false);
    });
});

describe("validateUri, validateUrl, and validateUrn", () => {
    it("accepts absolute URIs, including IRIs and IP literals", () => {
        expect(validateUri("https://example.com")).toBe(true);
        expect(validateUri("https://example.com/path?q=1#frag")).toBe(true);
        expect(validateUri("https://user:pass@example.com:8443/")).toBe(true);
        expect(validateUri("https://[2001:db8::1]/")).toBe(true);
        expect(validateUri("https://[::ffff:192.0.2.1]/")).toBe(true);
        expect(validateUri("HTTPS://Example.COM")).toBe(true);
        expect(validateUri("mailto:user@example.com")).toBe(true);
        expect(validateUri("ldap:///dc=example,dc=com")).toBe(true);
        expect(validateUri("https://點看.com/路徑")).toBe(true);
        expect(validateUri("urn:ietf:rfc:2648")).toBe(true);
        expect(validateUri("http:")).toBe(true);
    });

    it("rejects relative references and malformed URIs", () => {
        expect(validateUri("example.com")).toBe(false);
        expect(validateUri("//example.com")).toBe(false);
        expect(validateUri("/path")).toBe(false);
        expect(validateUri("https://ex ample.com")).toBe(false);
        expect(validateUri("https://example.com/%2G")).toBe(false);
        expect(validateUri("https://[::1")).toBe(false);
        expect(validateUri("https://[::1::2]/")).toBe(false);
        expect(validateUri("1http://example.com")).toBe(false);
        expect(validateUri("")).toBe(false);
    });

    it("treats a URL as an absolute URI with a location, and not a URN", () => {
        expect(validateUrl("https://example.com")).toBe(true);
        expect(validateUrl("https://example.com/a")).toBe(true);
        expect(validateUrl("mailto:user@example.com")).toBe(true);
        expect(validateUrl("tel:+1-816-555-1212")).toBe(true);
        expect(validateUrl("ldap:///dc=example,dc=com")).toBe(true);
        expect(validateUrl("http://")).toBe(true);
        expect(validateUrl("http:")).toBe(false);
        expect(validateUrl("urn:ietf:rfc:2648")).toBe(false);
        expect(validateUrl("example.com")).toBe(false);
    });

    it("accepts RFC 2141 URNs without requiring a registered namespace", () => {
        expect(validateUrn("urn:ietf:rfc:2648")).toBe(true);
        expect(validateUrn("URN:ISBN:0451450523")).toBe(true);
        expect(validateUrn("urn:example:foo")).toBe(true);
        expect(validateUrn("urn:a:b")).toBe(true);
        expect(validateUrn("urn:example:100%25")).toBe(true);
        expect(validateUrn("urn:example:foo/bar")).toBe(true);
    });

    it("rejects URNs that break the NID or NSS rules", () => {
        expect(validateUrn("urn::foo")).toBe(false);
        expect(validateUrn("urn:ietf:")).toBe(false);
        expect(validateUrn("urn:-ietf:foo")).toBe(false);
        expect(validateUrn("urn:urn:foo")).toBe(false);
        expect(validateUrn("urn:example:100%")).toBe(false);
        expect(validateUrn("urn:example:a&b")).toBe(false);
        expect(validateUrn("urn:example:has space")).toBe(false);
        expect(validateUrn("https://example.com")).toBe(false);
        expect(validateUrn("")).toBe(false);
    });
});
