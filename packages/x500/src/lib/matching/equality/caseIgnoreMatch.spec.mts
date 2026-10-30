import { DERElement, ASN1TagClass, ASN1Construction, ASN1UniversalType } from "@wildboar/asn1";
import {
    MATCH_FLAG_ASSERTION_PREPPED,
    MATCH_FLAG_VALUE_PREPPED,
} from "../../types/MatchFlags.mjs";
import caseIgnoreMatch, { caseIgnoreMatchPrepped } from "./caseIgnoreMatch.mjs";
import caseExactMatch from "./caseExactMatch.mjs";
import caseIgnoreOrderingMatch from "../ordering/caseIgnoreOrderingMatch.mjs";

function utf8 (s: string): DERElement {
    return new DERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.utf8String,
        s,
    );
}

describe("caseIgnoreMatch", () => {
    it("ignores case and insignificant spaces", () => {
        expect(caseIgnoreMatch(utf8("  Dundee "), utf8("DUNDEE"))).toBe(true);
        expect(caseIgnoreMatch(utf8("Dundee"), utf8("Perth"))).toBe(false);
    });

    it("treats TAB as a space", () => {
        expect(caseIgnoreMatch(utf8("big\tboi"), utf8("big boi"))).toBe(true);
    });

    it("matches sharp s after case folding", () => {
        expect(caseIgnoreMatch(utf8("STRASSE"), utf8("Straße"))).toBe(true);
    });
});

describe("caseExactMatch", () => {
    it("treats case as significant", () => {
        expect(caseExactMatch(utf8("Dundee"), utf8("Dundee"))).toBe(true);
        expect(caseExactMatch(utf8("Dundee"), utf8("DUNDEE"))).toBe(false);
    });
});

describe("preparation flags", () => {
    const both = MATCH_FLAG_ASSERTION_PREPPED | MATCH_FLAG_VALUE_PREPPED;

    it("skips case folding when both sides are already prepared", () => {
        expect(caseIgnoreMatch("Hello", "hello", undefined, both)).toBe(false);
        expect(caseIgnoreMatch("hello", "hello", undefined, both)).toBe(true);
        expect(caseIgnoreMatchPrepped("hello", "hello")).toBe(true);
    });

    it("skips case folding in ordering when both sides are already prepared", () => {
        expect(caseIgnoreOrderingMatch("B", "a")).toBeGreaterThan(0);
        expect(caseIgnoreOrderingMatch("B", "a", both)).toBeLessThan(0);
    });
});
