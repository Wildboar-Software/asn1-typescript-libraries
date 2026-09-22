import { _encodeUTF8String, BER } from "@wildboar/asn1/functional";
import jidMatch from "./jidMatch.mjs";

function utf8 (s: string) {
    return _encodeUTF8String(s, BER);
}

describe("jidMatch()", () => {
    it("requires matching localpart and resourcepart presence", () => {
        expect(jidMatch(utf8("juliet@example.com"), utf8("juliet@example.com"))).toBe(true);
        expect(jidMatch(utf8("juliet@example.com"), utf8("example.com"))).toBe(false);
        expect(jidMatch(
            utf8("juliet@example.com/balcony"),
            utf8("juliet@example.com"),
        )).toBe(false);
    });

    it("compares the resourcepart case-sensitively and the localpart case-insensitively", () => {
        expect(jidMatch(
            utf8("Juliet@Example.COM/balcony"),
            utf8("juliet@example.com/balcony"),
        )).toBe(true);
        expect(jidMatch(
            utf8("juliet@example.com/Balcony"),
            utf8("juliet@example.com/balcony"),
        )).toBe(false);
    });

    it("returns false for an invalid JID instead of throwing", () => {
        expect(() => jidMatch(utf8("/resource"), utf8("user@example.com"))).not.toThrow();
        expect(jidMatch(utf8("/resource"), utf8("user@example.com"))).toBe(false);
    });
});
