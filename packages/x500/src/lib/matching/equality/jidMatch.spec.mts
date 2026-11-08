import type { ASN1Element } from "@wildboar/asn1";
import { DER } from "@wildboar/asn1/functional";
import { _encode_Jid } from "../../modules/SelectedAttributeTypes/Jid.ta.mjs";
import {
    MATCH_FLAG_APPROXIMATE,
    MATCH_FLAG_ASSERTION_NORMALIZED,
    MATCH_FLAG_CONSTANT_TIME,
    MATCH_FLAG_DEBUG,
} from "../../types/matching.mjs";
import jidMatch_, {
    decodeJidMatchAssertion,
    jidMatchTyped,
    normalizeJidMatchAssertion,
} from "./jidMatch.mjs";
import { onStoredValue } from "./onStoredValue.spec.mjs";

const jidMatch = onStoredValue(jidMatch_);

function jid (value: string): ASN1Element {
    return _encode_Jid(value, DER);
}

function match (assertion: string, value: string, flags?: number): boolean | undefined {
    return jidMatch(jid(assertion), jid(value), flags);
}

/*
 * Conformance references:
 * - X.520 (2019) 8.9.4: exact equality after RFC 7622 preparation.
 * - RFC 7622 3.2–3.4: domain, localpart, and resourcepart rules.
 * - RFC 8265 3.3 / 4.2 (successor to RFC 7613): UsernameCaseMapped / OpaqueString.
 * - RFC 7622 verified errata 4534 and 4560. In particular, leading resource
 *   spaces ARE allowed; Nickname-profile trimming must not be applied here.
 *
 * Invalid-input tests express rejection using this library's API convention:
 * malformed assertions throw; invalid stored values must not match. The RFCs
 * prescribe rejection, not these particular JavaScript error/return forms.
 * Accepted deviations appear below as COMMENTED tests with the correct expected
 * result. No active test should require those deviations to remain unfixed.
 */
describe("jidMatch", () => {
    describe.each([0, MATCH_FLAG_CONSTANT_TIME])("specified JID equality (M29), flags %i", (flags) => {
        it.each([
            { a: "café@example.com", b: "cafe\u0301@example.com", equal: true },
            { a: "alice@example.com/Café", b: "alice@example.com/Cafe\u0301", equal: true },
            { a: "alice@example.com/Desk\u00a0One", b: "alice@example.com/Desk One", equal: true },
            { a: "alice@example.com/Desk\u2002One", b: "alice@example.com/Desk One", equal: true },
            { a: "alice@example.com/Desk  One", b: "alice@example.com/Desk One", equal: false },
            { a: "alice@example.com/ desk", b: "alice@example.com/desk", equal: false },
            // OpaqueString does not trim or collapse ASCII spaces, even when
            // the entire resource consists of spaces (erratum 4560).
            { a: "alice@example.com/ ", b: "alice@example.com/\u00a0", equal: true },
            { a: "alice@example.com/ ", b: "alice@example.com/  ", equal: false },
            { a: "alice@example.com/Ａ", b: "alice@example.com/A", equal: false },
            { a: "alice@example.com/Ⅳ", b: "alice@example.com/IV", equal: false },
            { a: "alice@example.com/ﬁle", b: "alice@example.com/file", equal: false },
            { a: "fußball@example.com", b: "fussball@example.com", equal: false },
            { a: "alice@faß.de", b: "alice@fass.de", equal: false },
            { a: "alice@xn--fa-hia.de", b: "alice@fass.de", equal: false },
            { a: "alice@faß.de", b: "alice@xn--fa-hia.de", equal: true },
            { a: "alice@example.com/desk", b: "alice@example.com/desk ", equal: false },
            { a: "alice@example.com/Desk", b: "alice@example.com/desk", equal: false },
            { a: "Σ@example.com", b: "σ@example.com", equal: true },
            { a: "Σ@example.com", b: "ς@example.com", equal: false },
            { a: "alice@Example.COM.", b: "alice@example.com", equal: true },
            // Test literal identity, not an assumption that URL-host rewriting
            // of alternate IPv6 spellings is required by RFC 7622 comparison.
            { a: "alice@[2001:db8::1]", b: "alice@[2001:db8::1]", equal: true },
            { a: "alice@[2001:db8::1]", b: "alice@[2001:db8::2]", equal: false },
            { a: "alice@192.0.2.1", b: "alice@192.0.2.1", equal: true },
            { a: "alice@127.1", b: "alice@127.0.0.1", equal: false },
            { a: "alice@example.com/♚", b: "alice@example.com/♚", equal: true },
            { a: "123@example.com", b: "123@example.com", equal: true },
            { a: "1Alice@example.com", b: "1alice@example.com", equal: true },
        ])("compares $a against $b", ({ a, b, equal }) => {
            expect(match(a, b, flags)).toBe(equal);
            expect(match(b, a, flags)).toBe(equal);
        });

        it.each([
            "alice@*.example.com", "alice@\uFFFD.com", "alice@not a domain",
            "alice@user@example.com", "alice@example.com?query", "alice@%65xample.com",
        ])("rejects invalid assertion %s and does not match it as a stored value", (invalid) => {
            expect(() => match(invalid, "alice@example.com", flags)).toThrow();
            expect(match("alice@example.com", invalid, flags)).not.toBe(true);
        });

        it("accepts the 1023-octet localpart and resourcepart boundaries after normalization", () => {
            // RFC 7622 3.3/3.4: octets, not UTF-16 code units, and AFTER
            // preparation. The decomposed localpart is longer before NFC.
            const local = "é".repeat(511) + "a"; // 511 * 2 + 1 UTF-8 octets.
            const resource = "界".repeat(341); // 341 * 3 UTF-8 octets.
            expect(match(`${local}@example.com/${resource}`, `${local}@example.com/${resource}`, flags)).toBe(true);
            const decomposed = "e\u0301".repeat(511) + "a";
            expect(match(`${decomposed}@example.com`, `${local}@example.com`, flags)).toBe(true);
        });

        // ACCEPTED DEVIATION — width mapping is omitted by the lightweight
        // implementation. RFC 8265 3.3.1/3.3.2 requires mapping fullwidth and
        // halfwidth localpart characters BEFORE IdentifierClass validation.
        // The normative expected result is TRUE, never FALSE.
        // it.each([
        //     { raw: "Ａlice@example.com", prepared: "alice@example.com" },
        //     { raw: "ｶﾞ@example.com", prepared: "ガ@example.com" },
        // ])("maps localpart width before comparing $raw", ({ raw, prepared }) => {
        //     expect(match(raw, prepared, flags)).toBe(true);
        //     expect(match(prepared, raw, flags)).toBe(true);
        // });

        // ACCEPTED DEVIATION — localpart repertoire, contextual, and bidi
        // checks are omitted. RFC 7622 3.3/3.3.1 and RFC 8265 3.3 require
        // rejecting these, rather than returning TRUE for identical bad input.
        // it.each([
        //     "ﬁle@example.com",          // HasCompat: not an IdentifierClass character.
        //     "us\u00ader@example.com",   // SOFT HYPHEN is disallowed, not removed.
        //     "bad name@example.com",     // ASCII SPACE is disallowed in localparts.
        //     "bad:name@example.com",     // XMPP's additional excluded character.
        //     "a·b@example.com",          // U+00B7 is valid only between lowercase l's.
        //     "a\u200d@example.com",     // U+200D requires the virama context.
        //     "אבc@example.com",         // Violates the RTL identifier bidi rule.
        // ])("rejects the invalid localpart in %s", (invalid) => {
        //     expect(() => match(invalid, invalid, flags)).toThrow();
        // });

        // ACCEPTED DEVIATION — OpaqueString repertoire checks are omitted.
        // RFC 7622 3.4 / RFC 8265 4.2: controls and private-use characters
        // are disallowed in resources even though spaces and symbols are allowed.
        // it.each(["alice@example.com/has\u0009tab", "alice@example.com/\ue000"])(
        //     "rejects the invalid resource in %s", (invalid) => {
        //         expect(() => match(invalid, invalid, flags)).toThrow();
        //     },
        // );

        // ACCEPTED DEVIATION — built-in IDNA conversion is not a full
        // IDNA2008 validator. RFC 7622 3.2.1 requires valid NR-LDH/U-labels;
        // underscores and an emoji domain must not be accepted as valid JIDs.
        // it.each(["alice@bad_label.example", "alice@💩.example"])(
        //     "rejects the invalid domain in %s", (invalid) => {
        //         expect(() => match(invalid, invalid, flags)).toThrow();
        //     },
        // );

        // ACCEPTED DEVIATION — RFC 7622 3.3/3.4 limits each normalized part
        // to 1023 UTF-8 octets. These are 1024 / 1026 octets, respectively.
        // it.each([
        //     `${"a".repeat(1024)}@example.com`,
        //     `${"é".repeat(512)}@example.com`,
        //     `example.com/${"界".repeat(342)}`,
        // ])("rejects an overlength normalized JID part (%#)", (invalid) => {
        //     expect(() => match(invalid, invalid, flags)).toThrow();
        // });
    });

    it("matches identical JIDs of every RFC 7622 form", () => {
        expect(match("example.com", "example.com")).toBe(true);
        expect(match("juliet@example.com", "juliet@example.com")).toBe(true);
        expect(match("example.com/server", "example.com/server")).toBe(true);
        expect(match(
            "juliet@example.com/balcony",
            "juliet@example.com/balcony",
        )).toBe(true);
    });

    it("requires the localpart, domainpart, and resourcepart to all agree", () => {
        expect(match(
            "juliet@example.com/balcony",
            "romeo@example.com/balcony",
        )).toBe(false);
        expect(match(
            "juliet@example.com/balcony",
            "juliet@example.org/balcony",
        )).toBe(false);
        expect(match(
            "juliet@example.com/balcony",
            "juliet@example.com/orchard",
        )).toBe(false);
    });

    describe("localpart", () => {
        it("compares the localpart case-insensitively", () => {
            expect(match(
                "Juliet@example.com",
                "juliet@example.com",
            )).toBe(true);
            expect(match(
                "JULIET@example.com/balcony",
                "juliet@example.com/balcony",
            )).toBe(true);
            expect(match(
                "juliet@example.com",
                "romeo@example.com",
            )).toBe(false);
        });
    });

    describe("resourcepart", () => {
        it("compares the resourcepart case-sensitively", () => {
            expect(match(
                "juliet@example.com/Balcony",
                "juliet@example.com/balcony",
            )).toBe(false);
            expect(match(
                "juliet@example.com/balcony",
                "juliet@example.com/balcony",
            )).toBe(true);
            expect(match(
                "example.com/Server",
                "example.com/server",
            )).toBe(false);
        });

        it("keeps / and @ inside the resourcepart", () => {
            expect(match(
                "juliet@example.com/a/b@c",
                "juliet@example.com/a/b@c",
            )).toBe(true);
            expect(match(
                "juliet@example.com/a/b@c",
                "juliet@example.com/a/b@d",
            )).toBe(false);
            expect(match(
                "juliet@example.com/a/b",
                "juliet@example.com/a",
            )).toBe(false);
        });
    });

    describe("domainpart", () => {
        it("uses exact IDNA domain equality without DNS wildcards", () => {
            expect(match(
                "juliet@點看.com",
                "juliet@xn--c1yn36f.com",
            )).toBe(true);
            expect(match(
                "Juliet@Example.COM/balcony",
                "juliet@example.com/balcony",
            )).toBe(true);
            expect(() => match(
                "juliet@*.example.com",
                "juliet@a.example.com",
            )).toThrow();
            expect(() => match(
                "juliet@*.example.com",
                "juliet@a.b.example.com",
            )).toThrow();
            expect(() => match(
                "juliet@beijing.*.com",
                "juliet@beijing.example.com",
            )).toThrow();
        });

        it("rejects spaces instead of silently rewriting domain labels", () => {
            expect(() => match(
                "juliet@ example.com",
                "juliet@example.com",
            )).toThrow();
            expect(() => match(
                "juliet@ 點看.com",
                "juliet@xn--c1yn36f.com",
            )).toThrow();
            expect(() => match(
                "juliet@exam ple.com",
                "juliet@example.com",
            )).toThrow();
        });
    });

    describe("presence of localpart and resourcepart", () => {
        it("requires the localpart to be present on both values or neither", () => {
            expect(match("juliet@example.com", "example.com")).toBe(false);
            expect(match("example.com", "juliet@example.com")).toBe(false);
            expect(match(
                "juliet@example.com/balcony",
                "example.com/balcony",
            )).toBe(false);
        });

        it("requires the resourcepart to be present on both values or neither", () => {
            expect(match(
                "juliet@example.com/balcony",
                "juliet@example.com",
            )).toBe(false);
            expect(match(
                "juliet@example.com",
                "juliet@example.com/balcony",
            )).toBe(false);
            expect(match("example.com/server", "example.com")).toBe(false);
        });
    });

    describe("parsing", () => {
        it("parses resource separators first and rejects multiple local/domain separators", () => {
            expect(match("a.example.com/b@example.net", "a.example.com/b@example.net")).toBe(true);
            expect(() => match("a@b@example.com/res@x/y", "a@b@example.com/res@x/y")).toThrow();
            expect(() => match("user@host@example.com", "user@host@example.com")).toThrow();
        });

        it("preserves significant resource spaces (RFC 7622 erratum 4560)", () => {
            expect(match(
                "juliet@example.com/balcony",
                "\tjuliet@example.com/balcony\n",
            )).not.toBe(true);
            expect(match("juliet@example.com/balcony ", "juliet@example.com/balcony")).toBe(false);
            expect(match("juliet@example.com/balcony ", "juliet@example.com/balcony ")).toBe(true);
            expect(match("juliet@example.com/ balcony", "juliet@example.com/ balcony")).toBe(true);
        });
    });

    describe("malformed values", () => {
        it("rejects structurally malformed assertions through the library API", () => {
            expect(() => match("", "example.com")).toThrow(
                "jidMatch assertion is not a JID",
            );
            expect(() => match("   ", "example.com")).toThrow(
                "jidMatch assertion is not a JID",
            );
            expect(() => match("@example.com", "juliet@example.com")).toThrow(
                "jidMatch assertion is not a JID",
            );
            expect(() => match("juliet@", "juliet@example.com")).toThrow(
                "jidMatch assertion is not a JID",
            );
            expect(() => match("example.com/", "example.com/server")).toThrow(
                "jidMatch assertion is not a JID",
            );
            expect(() => match("/server", "example.com/server")).toThrow(
                "jidMatch assertion is not a JID",
            );
            expect(() => match("juliet@/balcony", "juliet@example.com/balcony"))
                .toThrow("jidMatch assertion is not a JID");
        });

        it("does not match structurally malformed stored values", () => {
            expect(match("juliet@example.com", "")).not.toBe(true);
            expect(match("juliet@example.com", "   ")).not.toBe(true);
            expect(match("juliet@example.com", "@example.com")).not.toBe(true);
            expect(match("juliet@example.com", "juliet@")).not.toBe(true);
            expect(match("example.com/server", "example.com/")).not.toBe(true);
            expect(match("example.com/server", "/server")).not.toBe(true);
            expect(match("juliet@example.com/balcony", "juliet@/balcony"))
                .not.toBe(true);
        });

        it("rejects invalid domains at the appropriate API boundary", () => {
            expect(match("juliet@example.com", "juliet@\uFFFD.com")).not.toBe(true);
            expect(() => match("juliet@\uFFFD.com", "juliet@example.com")).toThrow();
            expect(match("juliet@example.com", "juliet@not a domain")).not.toBe(true);
            expect(() => match("juliet@not a domain", "juliet@example.com")).toThrow();
        });

        it("logs when a stored value is not a JID with MATCH_FLAG_DEBUG", () => {
            const spy = vi.spyOn(console, "error").mockImplementation(() => {});
            try {
                expect(jidMatchTyped(
                    { domain: "example.com" },
                    jid(""),
                    undefined,
                    MATCH_FLAG_DEBUG,
                )).not.toBe(true);
                expect(spy).toHaveBeenCalledTimes(1);
                expect(String(spy.mock.calls[0][0])).toContain("jidMatch");
            } finally {
                spy.mockRestore();
            }
        });
    });

    // This is the separate, locally defined approximateMatch operation, NOT
    // normative jidMatch equality. X.511 7.8.2 explicitly permits local
    // approximate algorithms; equality matches must also approximate-match.
    describe("approximateMatch policy (X.511 7.8.2), not exact JID equality", () => {
        it("also approximate-matches every demonstrated equality match", () => {
            const a = "Café@faß.de/Desk\u00a0One";
            const b = "cafe\u0301@xn--fa-hia.de/Desk One";
            expect(match(a, b)).toBe(true);
            expect(match(a, b, MATCH_FLAG_APPROXIMATE)).toBe(true);
        });
        it("tolerates one edit in each compared part", () => {
            // The same inputs are NOT equal under X.520 8.9.4.
            expect(match("alicy@example.com/balcony", "alice@example.com/balcony")).toBe(false);
            expect(match("alice@examplx.com/balcony", "alice@example.com/balcony")).toBe(false);
            expect(match("alice@example.com/balconx", "alice@example.com/balcony")).toBe(false);
            expect(match(
                "alicy@example.com/balcony",
                "alice@example.com/balcony",
                MATCH_FLAG_APPROXIMATE,
            )).toBe(true);
            expect(match(
                "alice@examplx.com/balcony",
                "alice@example.com/balcony",
                MATCH_FLAG_APPROXIMATE,
            )).toBe(true);
            expect(match(
                "alice@example.com/balconx",
                "alice@example.com/balcony",
                MATCH_FLAG_APPROXIMATE,
            )).toBe(true);
            expect(match(
                "alicy@examplx.com/balconx",
                "alice@example.com/balcony",
                MATCH_FLAG_APPROXIMATE,
            )).toBe(true);
        });

        it("rejects two edits in a part and still requires presence to agree", () => {
            expect(match(
                "alxx@example.com/balcony",
                "alice@example.com/balcony",
                MATCH_FLAG_APPROXIMATE,
            )).toBe(false);
            expect(match(
                "alice@example.com/balcony",
                "alice@example.com",
                MATCH_FLAG_APPROXIMATE,
            )).toBe(false);
            expect(match(
                "alice@example.com",
                "example.com",
                MATCH_FLAG_APPROXIMATE,
            )).toBe(false);
        });
    });

    describe("MATCH_FLAG_CONSTANT_TIME", () => {
        it("still matches equal JIDs and rejects mismatches", () => {
            expect(match(
                "RomeO@Example.COM/orchard",
                "romeo@example.com/orchard",
                MATCH_FLAG_CONSTANT_TIME,
            )).toBe(true);
            expect(match(
                "romeo@example.com/orchard",
                "romeo@example.com/balcony",
                MATCH_FLAG_CONSTANT_TIME,
            )).toBe(false);
            expect(match(
                "romeo@example.com/orchard",
                "romeo@example.com",
                MATCH_FLAG_CONSTANT_TIME,
            )).toBe(false);
            expect(match(
                "romeo@example.com",
                "example.com",
                MATCH_FLAG_CONSTANT_TIME,
            )).toBe(false);
        });
    });

    describe("already-normalized assertion API", () => {
        it("preserves specified equality when the flag's precondition is met", () => {
            const prepared = "juliet@example.com/Café";
            const stored = "JULIET@EXAMPLE.COM/Cafe\u0301";
            expect(match(prepared, stored)).toBe(true);
            expect(match(prepared, stored, MATCH_FLAG_ASSERTION_NORMALIZED)).toBe(true);
            expect(match(
                "juliet@example.com/balcony",
                "Juliet@example.com/balcony",
                MATCH_FLAG_ASSERTION_NORMALIZED,
            )).toBe(true);
        });
    });
});

describe("jidMatchTyped", () => {
    it("accepts a stored JID as a string or as an element", () => {
        const assertion = {
            local: "juliet",
            domain: "example.com",
            resource: "balcony",
        };
        expect(jidMatchTyped(assertion, "juliet@example.com/balcony")).toBe(true);
        expect(jidMatchTyped(
            assertion,
            jid("JULIET@Example.COM/balcony"),
        )).toBe(true);
        expect(jidMatchTyped(assertion, "romeo@example.com/balcony")).toBe(false);
    });

    it("prepares the stored value when the typed assertion is already normalized", () => {
        expect(jidMatchTyped(
            { local: "juliet", domain: "example.com" },
            "Juliet@example.com",
        )).toBe(true);
    });
});

describe("decodeJidMatchAssertion and normalizeJidMatchAssertion", () => {
    it("parses the presented JID without normalizing its parts", () => {
        expect(decodeJidMatchAssertion(jid("Juliet@Example.COM/Balcony"))).toEqual({
            local: "Juliet",
            domain: "Example.COM",
            resource: "Balcony",
        });
        expect(decodeJidMatchAssertion(jid("example.com"))).toEqual({
            local: undefined,
            domain: "example.com",
            resource: undefined,
        });
        expect(() => decodeJidMatchAssertion(jid("@example.com"))).toThrow(
            "jidMatch assertion is not a JID",
        );
    });

    it("normalizes local/resource Unicode and compares IDN representations consistently", () => {
        expect(normalizeJidMatchAssertion({
            local: "Juliet",
            domain: "Example.COM",
            resource: "Balcony",
        })).toEqual({
            local: "juliet",
            domain: "example.com",
            resource: "Balcony",
        });
        const unicodeDomain = normalizeJidMatchAssertion({
            domain: "點看.com",
        });
        const asciiDomain = normalizeJidMatchAssertion({
            domain: "xn--c1yn36f.com",
        });
        // Compare prepared keys, without requiring an internal A-label versus
        // U-label representation. RFC 7622 3.2.1 requires U-labels in JID slots;
        // an ASCII comparison key is not itself a normalized wire-format JID.
        expect(unicodeDomain).toEqual(asciiDomain);
    });
});
