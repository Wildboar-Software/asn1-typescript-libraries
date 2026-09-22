import { _encodeUTF8String, BER } from "@wildboar/asn1/functional";
import uriMatch from "./uriMatch.mjs";

function utf8 (s: string) {
    return _encodeUTF8String(s, BER);
}

describe("uriMatch()", () => {
    it("treats scheme and host as case-insensitive but keeps path case", () => {
        expect(uriMatch(
            utf8("HTTP://Example.COM/Foo"),
            utf8("http://example.com/Foo"),
        )).toBe(true);
        expect(uriMatch(
            utf8("http://example.com/Foo"),
            utf8("http://example.com/foo"),
        )).toBe(false);
    });

    it("treats a default port as equivalent to an omitted port", () => {
        expect(uriMatch(
            utf8("https://example.com/a"),
            utf8("https://example.com:443/a"),
        )).toBe(true);
    });

    it("returns false for an invalid URI instead of throwing", () => {
        expect(() => uriMatch(utf8("not a uri"), utf8("http://example.com/"))).not.toThrow();
        expect(uriMatch(utf8("not a uri"), utf8("http://example.com/"))).toBe(false);
    });
});
