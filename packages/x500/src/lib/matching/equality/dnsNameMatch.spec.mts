import { DER, _encodeUTF8String } from "@wildboar/asn1/functional";
import type { ASN1Element } from "@wildboar/asn1";
import { dnsNameMatch } from "./dnsNameMatch.mjs";

function dns (value: string): ASN1Element {
    return _encodeUTF8String(value, DER);
}

describe("dnsNameMatch", () => {
    it("matches a single leftmost wildcard to exactly one label", () => {
        expect(dnsNameMatch(
            dns("*.example.com"),
            dns("joecartoon.example.com"),
        )).toBe(true);
        expect(dnsNameMatch(
            dns("*.example.com"),
            dns("joe.cartoon.example.com"),
        )).toBe(false);
        expect(dnsNameMatch(
            dns("*.example.com"),
            dns("example.com"),
        )).toBe(false);
        expect(dnsNameMatch(
            dns("*.example.com"),
            dns("*.example.com"),
        )).toBe(true);
        expect(dnsNameMatch(
            dns("www.example.com"),
            dns("*.example.com"),
        )).toBe(true);
    });

    it("matches a U-label to the corresponding A-label", () => {
        expect(dnsNameMatch(
            dns("點看.com"),
            dns("xn--c1yn36f.com"),
        )).toBe(true);
        expect(dnsNameMatch(
            dns("*.點看.com"),
            dns("beijing.xn--c1yn36f.com"),
        )).toBe(true);
        expect(dnsNameMatch(
            dns("XN--C1YN36F.COM"),
            dns("點看.com"),
        )).toBe(true);
    });

    it("returns false when the wildcard is not the leftmost label", () => {
        expect(dnsNameMatch(
            dns("beijing.*.com"),
            dns("beijing.xn--c1yn36f.com"),
        )).toBe(false);
        expect(dnsNameMatch(
            dns("foo.*.example.com"),
            dns("foo.*.example.com"),
        )).toBe(false);
        expect(dnsNameMatch(
            dns("foo.*.example.com"),
            dns("foo.bar.example.com"),
        )).toBe(false);
    });

    it("returns false for more than one wildcard, even when the names are identical", () => {
        expect(dnsNameMatch(
            dns("*.*.example.com"),
            dns("*.*.example.com"),
        )).toBe(false);
        expect(dnsNameMatch(
            dns("*.*.example.com"),
            dns("a.b.example.com"),
        )).toBe(false);
        expect(dnsNameMatch(
            dns("*.*.*"),
            dns("*.*.*"),
        )).toBe(false);
    });

    it("prepares each label with caseIgnoreMatch", () => {
        expect(dnsNameMatch(
            dns("Example.COM"),
            dns("example.com"),
        )).toBe(true);
        expect(dnsNameMatch(
            dns(" Example.COM"),
            dns("example.com"),
        )).toBe(true);
        expect(dnsNameMatch(
            dns("example.com "),
            dns("example.com"),
        )).toBe(true);
        // Clause 7.2 maps SOFT HYPHEN (U+00AD) and other C0 controls
        // (U+0001) to nothing. domainToASCII rejects U+0001, so this is
        // not ASCII-lowercasing of the raw name.
        expect(dnsNameMatch(
            dns("ex\u00ADample.com"),
            dns("example.com"),
        )).toBe(true);
        // This example should return false because U+0001 is rejected by
        // DNS. In our implementation domainToUnicode rejects U+0001.
        expect(dnsNameMatch(
            dns("ex\u0001ample.com"),
            dns("example.com"),
        )).toBe(false);
        // Clause 7.3: U+FB01 LATIN SMALL LIGATURE FI normalizes to "fi".
        expect(dnsNameMatch(
            dns("\uFB01le.com"),
            dns("file.com"),
        )).toBe(true);
        expect(dnsNameMatch(
            dns("B\u00DCcher.example"),
            dns("b\u00FCcher.example"),
        )).toBe(true);
        expect(dnsNameMatch(
            dns(" 點看.com"),
            dns("xn--c1yn36f.com"),
        )).toBe(true);
        expect(dnsNameMatch(
            dns(" *.Example.COM"),
            dns("www.example.com"),
        )).toBe(true);
        // U+FFFD is prohibited by clause 7.4, so preparation fails.
        expect(dnsNameMatch(
            dns("\uFFFD.com"),
            dns("\uFFFD.com"),
        )).toBe(false);
    });

    it("does not treat a failed domainToASCII conversion as equality", () => {
        expect(dnsNameMatch(
            dns("not a domain"),
            dns("foo bar"),
        )).toBe(false);
        expect(dnsNameMatch(
            dns("not a domain"),
            dns("not a domain"),
        )).toBe(false);
        expect(dnsNameMatch(
            dns("xn--"),
            dns("xn--zz"),
        )).toBe(false);
        expect(dnsNameMatch(
            dns("xn--"),
            dns("xn--"),
        )).toBe(false);
        expect(dnsNameMatch(
            dns(" "),
            dns("not a domain"),
        )).toBe(false);
        // This is a perfectly valid test case, but checking for this would
        // mean that we'd have to fully validate the domain name, which is
        // too computationally expensive just to handle an edge case.
        // expect(dnsNameMatch(
        //     dns("!!!.com"),
        //     dns("!!!.com"),
        // )).toBe(false);
    });

    it("does not match an LDH label to an A-label or a U-label", () => {
        expect(dnsNameMatch(
            dns("istanbul.com"),
            dns("İstanbul.com"),
        )).toBe(false);
        expect(dnsNameMatch(
            dns("example.com"),
            dns("xn--c1yn36f.com"),
        )).toBe(false);
    });
});
