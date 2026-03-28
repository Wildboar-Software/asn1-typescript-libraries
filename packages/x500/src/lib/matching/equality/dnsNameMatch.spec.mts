import dnsNameMatch from "./dnsNameMatch.mjs";
import { _encodeUTF8String, BER } from "@wildboar/asn1/functional";

describe("dnsNameMatch()", () => {

    // const a = "_mail.點看.com";
    // const b = "_mail.xn--c1yn36f.com";

    it("matches assertions with wildcards", () => {
        const assertion = "*.example.com";
        const value1 = "joecartoon.example.com";
        const value2 = "joe.cartoon.example.com";
        const a = _encodeUTF8String(assertion, BER);
        const v1 = _encodeUTF8String(value1, BER);
        const v2 = _encodeUTF8String(value2, BER);
        expect(dnsNameMatch(a, v1)).toBe(true);
        expect(dnsNameMatch(a, v2)).toBe(false);
    });

    it("matches assertions with unicode characters", () => {
        const assertion = "點看.com";
        const value1 = "xn--c1yn36f.com";
        const a = _encodeUTF8String(assertion, BER);
        const v1 = _encodeUTF8String(value1, BER);
        expect(dnsNameMatch(a, v1)).toBe(true);
    });

    it("matches assertions with unicode characters and wildcards", () => {
        const assertion = "*.點看.com";
        const value1 = "beijing.xn--c1yn36f.com";
        const a = _encodeUTF8String(assertion, BER);
        const v1 = _encodeUTF8String(value1, BER);
        expect(dnsNameMatch(a, v1)).toBe(true);
    });

    it("returns false when the wildcard is not the left", () => {
        const assertion = "beijing.*.com";
        const value1 = "beijing.xn--c1yn36f.com";
        const a = _encodeUTF8String(assertion, BER);
        const v1 = _encodeUTF8String(value1, BER);
        expect(dnsNameMatch(a, v1)).toBe(false);
    });
});
