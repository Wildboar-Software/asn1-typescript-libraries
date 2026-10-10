import type { ASN1Element } from "@wildboar/asn1";
import { DER, _encodeUTF8String } from "@wildboar/asn1/functional";
import uriMatch from "./uriMatch.mjs";

function utf8 (value: string): ASN1Element {
    return _encodeUTF8String(value, DER);
}

function match (assertion: string, value: string): boolean {
    return uriMatch(utf8(assertion), utf8(value));
}

describe("uriMatch", () => {
    it("matches identical URI references", () => {
        expect(match(
            "http://example.com/a/b?x=1#y",
            "http://example.com/a/b?x=1#y",
        )).toBe(true);
    });

    describe("case normalization", () => {
        it("ignores scheme and host case", () => {
            expect(match(
                "HTTP://Example.COM/Foo",
                "http://example.com/Foo",
            )).toBe(true);
        });

        it("does not ignore path, query, or fragment case", () => {
            expect(match(
                "http://example.com/Foo",
                "http://example.com/foo",
            )).toBe(false);
            expect(match(
                "http://example.com/?Foo",
                "http://example.com/?foo",
            )).toBe(false);
            expect(match(
                "http://example.com/#Foo",
                "http://example.com/#foo",
            )).toBe(false);
        });

        it("does not ignore userinfo case", () => {
            expect(match(
                "http://User:Pass@example.com/a",
                "http://user:pass@example.com/a",
            )).toBe(false);
            expect(match(
                "HTTP://User@Example.COM/Foo",
                "http://User@example.com/Foo",
            )).toBe(true);
        });

        it("uppercases hex digits in percent-encoding triplets", () => {
            expect(match(
                "http://example.com/a%3ab",
                "http://example.com/a%3Ab",
            )).toBe(true);
            expect(match(
                "http://example.com/?a=%3d",
                "http://example.com/?a=%3D",
            )).toBe(true);
        });

        it("ignores host case and does not rewrite unicode as punycode", () => {
            expect(match(
                "http://EXÄMPLE.COM/A",
                "http://exämple.com/A",
            )).toBe(true);
            expect(match(
                "http://exämple.com/A",
                "http://xn--exmple-cua.com/A",
            )).toBe(false);
            expect(match(
                "http://exämple.com/Ä",
                "http://exämple.com/ä",
            )).toBe(false);
        });
    });

    describe("percent-encoding normalization", () => {
        it("decodes percent-encoded unreserved characters", () => {
            expect(match(
                "http://example.com/%7Euser",
                "http://example.com/~user",
            )).toBe(true);
            expect(match(
                "http://example.com/%7euser",
                "http://example.com/~user",
            )).toBe(true);
            expect(match(
                "http://%7Euser@example.com/",
                "http://~user@example.com/",
            )).toBe(true);
            expect(match(
                "http://example.com/?a=%62",
                "http://example.com/?a=b",
            )).toBe(true);
            expect(match(
                "http://example.com/%4A",
                "http://example.com/J",
            )).toBe(true);
            expect(match(
                "http://example.com/%4A",
                "http://example.com/j",
            )).toBe(false);
            expect(match(
                "http://ex%41mple%2Ecom/",
                "http://example.com/",
            )).toBe(true);
        });

        it("does not decode percent-encoded reserved characters", () => {
            expect(match(
                "http://example.com/a%2Fb",
                "http://example.com/a/b",
            )).toBe(false);
            expect(match(
                "http://example.com/a%3Ab",
                "http://example.com/a:b",
            )).toBe(false);
            expect(match(
                "http://example.com/?a=%26b",
                "http://example.com/?a=&b",
            )).toBe(false);
            // `%2F` is reserved, so `..` here is not a path segment.
            expect(match(
                "http://example.com/a%2F..%2Fb",
                "http://example.com/b",
            )).toBe(false);
        });

        it("decodes encoded dot segments before path normalization", () => {
            expect(match(
                "http://example.com/a/%2E%2E/b",
                "http://example.com/b",
            )).toBe(true);
            expect(match(
                "http://example.com/a/%2e/b",
                "http://example.com/a/b",
            )).toBe(true);
        });
    });

    describe("path segment normalization", () => {
        it("removes . and .. segments", () => {
            expect(match(
                "http://example.com/a/./b/../c",
                "http://example.com/a/c",
            )).toBe(true);
            expect(match(
                "http://example.com/a/b/c/./../../g",
                "http://example.com/a/g",
            )).toBe(true);
            expect(match(
                "a/b/c/./../../g",
                "a/g",
            )).toBe(true);
            expect(match(
                "http://example.com/.",
                "http://example.com/",
            )).toBe(true);
            expect(match(
                "http://example.com/..",
                "http://example.com/",
            )).toBe(true);
        });

        it("keeps the trailing slash left by a final .. segment", () => {
            // remove_dot_segments("foo/bar/..") is "foo/".
            // path.posix.normalize yields "foo".
            expect(match(
                "http://example.com/foo/bar/..",
                "http://example.com/foo/",
            )).toBe(true);
            expect(match(
                "http://example.com/foo/bar/..",
                "http://example.com/foo",
            )).toBe(false);
        });

        it("preserves empty path segments", () => {
            // path.posix.normalize collapses "//" to "/".
            expect(match(
                "http://example.com/foo//bar",
                "http://example.com/foo/bar",
            )).toBe(false);
        });

        it("preserves a trailing slash that is not a dot segment", () => {
            expect(match(
                "http://example.com/a/b/",
                "http://example.com/a/b",
            )).toBe(false);
        });

        it("drops excess .. by the buffer algorithm", () => {
            // remove_dot_segments("foo/../../bar") is "/bar".
            // path.posix.normalize yields "../bar".
            expect(match("foo/../../bar", "/bar")).toBe(true);
            expect(match(".", "..")).toBe(true);
            expect(match(".", "")).toBe(true);
        });
    });

    describe("scheme-based normalization", () => {
        it("omits an empty port and a scheme default port", () => {
            expect(match(
                "http://example.com:/a",
                "http://example.com/a",
            )).toBe(true);
            expect(match(
                "http://example.com:80/a",
                "http://example.com/a",
            )).toBe(true);
            expect(match(
                "http://example.com:0080/a",
                "http://example.com/a",
            )).toBe(true);
            expect(match(
                "https://example.com:443/a",
                "https://example.com/a",
            )).toBe(true);
            expect(match(
                "ldap://example.com:389/dc=example",
                "ldap://example.com/dc=example",
            )).toBe(true);
            expect(match(
                "http://example.com:0081/a",
                "http://example.com:81/a",
            )).toBe(false);
        });

        it("does not omit a non-default port or a port with no scheme", () => {
            expect(match(
                "http://example.com:8080/a",
                "http://example.com/a",
            )).toBe(false);
            expect(match(
                "https://example.com:80/a",
                "https://example.com/a",
            )).toBe(false);
            expect(match(
                "//example.com:80/a",
                "//example.com/a",
            )).toBe(false);
        });

        it("normalizes an empty path beside an authority to /", () => {
            expect(match(
                "http://example.com",
                "http://example.com/",
            )).toBe(true);
            expect(match("http://", "http:///")).toBe(true);
            expect(match("ldap://", "ldap:///")).toBe(true);
        });

        it("removes an empty userinfo, query, or fragment", () => {
            expect(match(
                "http://@example.com/",
                "http://example.com/",
            )).toBe(true);
            expect(match(
                "http://user:@example.com/a",
                "http://user@example.com/a",
            )).toBe(false);
            expect(match(
                "http://example.com/?",
                "http://example.com/",
            )).toBe(true);
            expect(match(
                "http://example.com/#",
                "http://example.com/",
            )).toBe(true);
            expect(match(
                "http://example.com/?a",
                "http://example.com/",
            )).toBe(false);
            expect(match(
                "http://example.com/#a",
                "http://example.com/",
            )).toBe(false);
        });
    });

    describe("URI forms that are not absolute URLs with a host", () => {
        it("matches URN scheme and path case", () => {
            expect(match(
                "URN:example:foo",
                "urn:example:foo",
            )).toBe(true);
            expect(match(
                "urn:example:Foo",
                "urn:example:foo",
            )).toBe(false);
        });

        it("matches empty-host LDAP URIs", () => {
            expect(match("ldap:///", "LDAP:///")).toBe(true);
            expect(match(
                "ldap:///dc=Example,dc=com",
                "LDAP:///dc=Example,dc=com",
            )).toBe(true);
            expect(match(
                "ldap:///dc=Example,dc=com",
                "ldap:///dc=example,dc=com",
            )).toBe(false);
        });

        it("matches relative references without throwing", () => {
            expect(() => match("./a/../b", "/b")).not.toThrow();
            expect(match("./a/../b", "/b")).toBe(true);
            expect(match("../a/b", "../a/b")).toBe(true);
            expect(match("/a/b", "a/b")).toBe(false);
        });

        it("does not throw on an empty string or a scheme with no hier-part", () => {
            expect(() => match("", "")).not.toThrow();
            expect(match("", "")).toBe(true);
            expect(() => match("urn:", "urn:")).not.toThrow();
            expect(match("urn:", "URN:")).toBe(true);
        });
    });

    it("rejects URIs that still differ after normalization", () => {
        expect(match(
            "http://example.com/a",
            "https://example.com/a",
        )).toBe(false);
        expect(match(
            "http://example.com/a",
            "http://example.org/a",
        )).toBe(false);
        expect(match(
            "http://example.com/a?x=1",
            "http://example.com/a?x=2",
        )).toBe(false);
    });

    it("compares equivalent IPv6 literals", () => {
        expect(match(
            "http://[2001:DB8::1]/a",
            "http://[2001:db8:0:0:0:0:0:1]/a",
        )).toBe(true);
        expect(match(
            "http://[::1]/",
            "http://[0:0:0:0:0:0:0:1]/",
        )).toBe(true);
        expect(match(
            "http://[::ffff:192.0.2.1]/",
            "http://[::ffff:c000:201]/",
        )).toBe(false);
        expect(match(
            "http://[2001:db8::1]/a",
            "http://[2001:db8::2]/a",
        )).toBe(false);
        expect(match(
            "http://[::1]:80/",
            "http://[0:0:0:0:0:0:0:1]/",
        )).toBe(true);
    });

    describe("unterminated IPv6 brackets", () => {
        it("throws when the closing bracket is missing", () => {
            expect(() => match("http://[", "http://[")).toThrow(
                "Unterminated IP-literal in URI host",
            );
            expect(() => match("http://[::1", "http://[::1/")).toThrow(
                "Unterminated IP-literal in URI host",
            );
            expect(() => match("http://[::1/a", "http://[::1]/a")).toThrow(
                "Unterminated IP-literal in URI host",
            );
        });

        it("throws when only one operand is unclosed", () => {
            expect(() => match(
                "http://[::1]/",
                "http://[::1",
            )).toThrow("Unterminated IP-literal in URI host");
            expect(() => match(
                "HTTP://[2001:DB8::1",
                "http://[2001:db8:0:0:0:0:0:1]/",
            )).toThrow("Unterminated IP-literal in URI host");
        });

        it("does not treat a colon inside the unclosed host as a port", () => {
            expect(() => match(
                "http://[::1:8080/a",
                "http://[::1]:8080/a",
            )).toThrow("Unterminated IP-literal in URI host");
        });

        it("does not let a bracket in the path close the host", () => {
            expect(() => match(
                "http://[::1/foo]",
                "http://[0:0:0:0:0:0:0:1]/foo]",
            )).toThrow("Unterminated IP-literal in URI host");
        });

        it("throws before percent-decoding the unclosed host", () => {
            expect(() => match(
                "http://[%7E::1",
                "http://[~::1/",
            )).toThrow("Unterminated IP-literal in URI host");
        });
    });
});
