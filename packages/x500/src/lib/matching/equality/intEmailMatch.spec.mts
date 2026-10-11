import type { ASN1Element } from "@wildboar/asn1";
import { DER } from "@wildboar/asn1/functional";
import { _encode_IntEmail } from "../../modules/SelectedAttributeTypes/IntEmail.ta.mjs";
import intEmailMatch from "./intEmailMatch.mjs";

function email (value: string): ASN1Element {
    return _encode_IntEmail(value, DER);
}

describe("intEmailMatch", () => {
    it("matches when both parts agree, ignoring case in each part", () => {
        expect(intEmailMatch(
            email("User@Example.COM"),
            email("user@example.com"),
        )).toBe(true);
    });

    it("applies caseIgnoreMatch to the local-part only", () => {
        expect(intEmailMatch(
            email("ﬁle@example.com"),
            email("file@example.com"),
        )).toBe(true);
        expect(intEmailMatch(
            email("us\u00ADer@example.com"),
            email("user@example.com"),
        )).toBe(true);
        expect(intEmailMatch(
            email("  user  name@example.com"),
            email("user name@example.com"),
        )).toBe(true);
        expect(intEmailMatch(
            email("İ@example.com"),
            email("i@example.com"),
        )).toBe(false);
        expect(intEmailMatch(
            email("İ@example.com"),
            email("i\u0307@example.com"),
        )).toBe(true);
    });

    it("applies dnsNameMatch to the domain-part", () => {
        expect(intEmailMatch(
            email("user@點看.com"),
            email("user@xn--c1yn36f.com"),
        )).toBe(true);
        expect(intEmailMatch(
            email("User@İ.com"),
            email("user@xn--i-9bb.com"),
        )).toBe(true);
        expect(intEmailMatch(
            email("user@*.example.com"),
            email("user@a.example.com"),
        )).toBe(true);
        expect(intEmailMatch(
            email("user@*.example.com"),
            email("user@a.b.example.com"),
        )).toBe(false);
        expect(intEmailMatch(
            email("user@beijing.*.com"),
            email("user@beijing.example.com"),
        )).toBe(false);
    });

    it("requires both parts to match", () => {
        expect(intEmailMatch(
            email("alice@點看.com"),
            email("bob@xn--c1yn36f.com"),
        )).toBe(false);
        expect(intEmailMatch(
            email("user@example.com"),
            email("user@example.org"),
        )).toBe(false);
    });

    it("keeps an @ inside a quoted local-part out of the domain", () => {
        expect(intEmailMatch(
            email("\"Weird@Name\"@點看.com"),
            email("\"weird@name\"@xn--c1yn36f.com"),
        )).toBe(true);
        expect(intEmailMatch(
            email("\"weird@name\"@example.com"),
            email("\"weird@other\"@example.com"),
        )).toBe(false);
        expect(intEmailMatch(
            email("\"foo\\\"@bar\"@example.com"),
            email("\"foo\\\"@bar\"@Example.COM"),
        )).toBe(true);
    });

    it("prepares each domain label as dnsNameMatch does", () => {
        expect(intEmailMatch(
            email("user@example.com "),
            email("user@example.com"),
        )).toBe(true);
        expect(intEmailMatch(
            email("user@ example.com"),
            email("user@example.com"),
        )).toBe(true);
        expect(intEmailMatch(
            email("user@exam ple.com"),
            email("user@example.com"),
        )).toBe(false);
    });

    it("returns false when either address has no local-part and domain-part", () => {
        expect(intEmailMatch(
            email("userexample.com"),
            email("userexample.com"),
        )).toBe(false);
        expect(intEmailMatch(
            email("@example.com"),
            email("@example.com"),
        )).toBe(false);
        expect(intEmailMatch(
            email("user@"),
            email("user@"),
        )).toBe(false);
    });
});
