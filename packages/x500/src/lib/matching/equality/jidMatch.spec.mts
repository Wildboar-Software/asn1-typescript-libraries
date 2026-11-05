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

describe("jidMatch", () => {
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

        it("does not apply caseIgnoreMatch preparation to the localpart", () => {
            // UsernameCaseMapped is implemented as Unicode case folding, not
            // X.520 clause 7: the FI ligature and SOFT HYPHEN stay as-is.
            expect(match("ﬁle@example.com", "file@example.com")).toBe(false);
            expect(match(
                "us\u00ADer@example.com",
                "user@example.com",
            )).toBe(false);
        });
    });

    describe("resourcepart", () => {
        it("compares the resourcepart case-sensitively (OpaqueString)", () => {
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
        it("applies dnsNameMatch to the domainpart", () => {
            expect(match(
                "juliet@點看.com",
                "juliet@xn--c1yn36f.com",
            )).toBe(true);
            expect(match(
                "Juliet@Example.COM/balcony",
                "juliet@example.com/balcony",
            )).toBe(true);
            expect(match(
                "juliet@*.example.com",
                "juliet@a.example.com",
            )).toBe(true);
            expect(match(
                "juliet@*.example.com",
                "juliet@a.b.example.com",
            )).toBe(false);
            expect(match(
                "juliet@beijing.*.com",
                "juliet@beijing.example.com",
            )).toBe(false);
        });

        it("prepares each domain label as dnsNameMatch does", () => {
            // Spaces around the whole JID are trimmed by parse; a space
            // after `@` is part of the domain and is prepared as a label.
            expect(match(
                "juliet@ example.com",
                "juliet@example.com",
            )).toBe(true);
            expect(match(
                "juliet@ 點看.com",
                "juliet@xn--c1yn36f.com",
            )).toBe(true);
            expect(match(
                "juliet@exam ple.com",
                "juliet@example.com",
            )).toBe(false);
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
        it("splits on the first / and the last @ before that /", () => {
            expect(match(
                "a@b@example.com/res@x/y",
                "a@b@example.com/res@x/y",
            )).toBe(true);
            expect(match(
                "a@b@example.com/res@x/y",
                "a@b@example.com/res@x/z",
            )).toBe(false);
            // last `@` before `/` is the local/domain separator
            expect(match(
                "user@host@example.com",
                "user@host@example.com",
            )).toBe(true);
            expect(match(
                "user@host@example.com",
                "user@example.com",
            )).toBe(false);
        });

        it("trims surrounding whitespace of the whole JID", () => {
            expect(match(
                "  juliet@example.com/balcony  ",
                "juliet@example.com/balcony",
            )).toBe(true);
            expect(match(
                "juliet@example.com/balcony",
                "\tjuliet@example.com/balcony\n",
            )).toBe(true);
        });
    });

    describe("malformed values", () => {
        it("throws when the assertion is not a JID", () => {
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

        it("returns false when the stored value is not a JID", () => {
            expect(match("juliet@example.com", "")).toBe(false);
            expect(match("juliet@example.com", "   ")).toBe(false);
            expect(match("juliet@example.com", "@example.com")).toBe(false);
            expect(match("juliet@example.com", "juliet@")).toBe(false);
            expect(match("example.com/server", "example.com/")).toBe(false);
            expect(match("example.com/server", "/server")).toBe(false);
            expect(match("juliet@example.com/balcony", "juliet@/balcony"))
                .toBe(false);
        });

        it("returns false when the presented or stored domain is not a DNS name", () => {
            expect(match("juliet@example.com", "juliet@\uFFFD.com")).toBe(false);
            expect(match("juliet@\uFFFD.com", "juliet@example.com")).toBe(false);
            expect(match("juliet@example.com", "juliet@not a domain")).toBe(false);
            expect(match("juliet@not a domain", "juliet@example.com")).toBe(false);
        });

        it("logs when a stored value is not a JID with MATCH_FLAG_DEBUG", () => {
            const spy = vi.spyOn(console, "error").mockImplementation(() => {});
            try {
                expect(jidMatchTyped(
                    { domain: "example.com" },
                    jid(""),
                    undefined,
                    MATCH_FLAG_DEBUG,
                )).toBe(false);
                expect(spy).toHaveBeenCalledTimes(1);
                expect(String(spy.mock.calls[0][0])).toContain("jidMatch");
            } finally {
                spy.mockRestore();
            }
        });
    });

    describe("MATCH_FLAG_APPROXIMATE", () => {
        it("tolerates one edit in each compared part", () => {
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

    describe("MATCH_FLAG_ASSERTION_NORMALIZED", () => {
        it("skips lower-casing the localpart when the assertion is trusted", () => {
            expect(match(
                "Juliet@example.com/balcony",
                "juliet@example.com/balcony",
            )).toBe(true);
            expect(match(
                "Juliet@example.com/balcony",
                "juliet@example.com/balcony",
                MATCH_FLAG_ASSERTION_NORMALIZED,
            )).toBe(false);
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

    it("treats an un-lowercased presented localpart as already normalized", () => {
        expect(jidMatchTyped(
            { local: "Juliet", domain: "example.com" },
            "juliet@example.com",
        )).toBe(false);
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

    it("lower-cases the localpart, prepares the domain, and leaves the resource", () => {
        expect(normalizeJidMatchAssertion({
            local: "Juliet",
            domain: "Example.COM",
            resource: "Balcony",
        })).toEqual({
            local: "juliet",
            domain: "example.com",
            resource: "Balcony",
        });
        expect(normalizeJidMatchAssertion({
            domain: " 點看.com",
        })).toEqual({
            local: undefined,
            domain: "點看.com",
            resource: undefined,
        });
        expect(normalizeJidMatchAssertion({
            domain: "xn--c1yn36f.com",
            resource: "Res",
        })).toEqual({
            local: undefined,
            domain: "點看.com",
            resource: "Res",
        });
    });
});
