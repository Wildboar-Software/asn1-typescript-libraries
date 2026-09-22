import { _encodeUTF8String, BER } from "@wildboar/asn1/functional";
import intEmailMatch from "./intEmailMatch.mjs";

function utf8 (s: string) {
    return _encodeUTF8String(s, BER);
}

describe("intEmailMatch()", () => {
    it("matches local parts case-insensitively and domains as DNS names", () => {
        expect(intEmailMatch(
            utf8("User@點看.com"),
            utf8("user@xn--c1yn36f.com"),
        )).toBe(true);
        expect(intEmailMatch(
            utf8("user@example.com"),
            utf8("other@example.com"),
        )).toBe(false);
    });

    it("does not treat a different domain as equal even if the whole string lowercases the same way except domain IDN", () => {
        expect(intEmailMatch(
            utf8("user@example.com"),
            utf8("user@EXAMPLE.COM"),
        )).toBe(true);
        expect(intEmailMatch(
            utf8("user@a.example.com"),
            utf8("user@example.com"),
        )).toBe(false);
    });
});
