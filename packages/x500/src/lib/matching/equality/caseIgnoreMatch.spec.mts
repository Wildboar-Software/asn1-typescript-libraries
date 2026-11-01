import { DERElement, ASN1TagClass, ASN1Construction, ASN1UniversalType } from "@wildboar/asn1";
import caseIgnoreMatch_, { caseIgnoreMatchTyped } from "./caseIgnoreMatch.mjs";
import caseExactMatch_, { caseExactMatchTyped } from "./caseExactMatch.mjs";
import { MATCH_FLAG_DEBUG } from "../../types/matching.mjs";
import { onStoredValue } from "./onStoredValue.spec.mjs";

const caseIgnoreMatch = onStoredValue(caseIgnoreMatch_);
const caseExactMatch = onStoredValue(caseExactMatch_);

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

    it("logs when a stored value fails string preparation with MATCH_FLAG_DEBUG", () => {
        const spy = vi.spyOn(console, "error").mockImplementation(() => {});
        try {
            expect(caseIgnoreMatchTyped("dundee", utf8("\uFFFD"), undefined, MATCH_FLAG_DEBUG)).toBeUndefined();
            expect(caseExactMatchTyped("Dundee", utf8("\uFFFD"), undefined, MATCH_FLAG_DEBUG)).toBeUndefined();
            expect(spy).toHaveBeenCalledTimes(2);
            expect(String(spy.mock.calls[0][0])).toContain("caseIgnoreMatch");
            expect(String(spy.mock.calls[1][0])).toContain("caseExactMatch");
        } finally {
            spy.mockRestore();
        }
    });
});

describe("caseExactMatch", () => {
    it("treats case as significant", () => {
        expect(caseExactMatch(utf8("Dundee"), utf8("Dundee"))).toBe(true);
        expect(caseExactMatch(utf8("Dundee"), utf8("DUNDEE"))).toBe(false);
    });
});
