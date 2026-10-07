import { DERElement, ASN1TagClass, ASN1Construction, ASN1UniversalType } from "@wildboar/asn1";
import caseExactOrderingMatch from "./caseExactOrderingMatch.mjs";
import caseIgnoreOrderingMatch from "./caseIgnoreOrderingMatch.mjs";

function utf8 (s: string): DERElement {
    return new DERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.utf8String,
        s,
    );
}

describe("caseExactOrderingMatch", () => {
    it("uses Unicode code-point order, not localeCompare", () => {
        // U+005A 'Z' precedes U+0061 'a'
        expect(caseExactOrderingMatch(utf8("Z"), utf8("a"))).toBeLessThan(0);
        expect("Z".localeCompare("a")).toBeGreaterThan(0);
    });

    it("sorts a string that fails preparation after a prepared string", () => {
        expect(caseExactOrderingMatch(utf8("\uFFFD"), utf8("Z"))).toBe(1);
        expect(caseExactOrderingMatch(utf8("Z"), utf8("\uFFFD"))).toBe(-1);
        expect(caseExactOrderingMatch(utf8(""), utf8("Z"))).toBe(1);
        expect(caseExactOrderingMatch(utf8("Z"), utf8(""))).toBe(-1);
    });
});

describe("caseIgnoreOrderingMatch", () => {
    it("sorts a string that fails preparation after a prepared string", () => {
        expect(caseIgnoreOrderingMatch(utf8("\uFFFD"), utf8("Z"))).toBe(1);
        expect(caseIgnoreOrderingMatch(utf8("Z"), utf8("\uFFFD"))).toBe(-1);
        expect(caseIgnoreOrderingMatch(utf8(""), utf8("Z"))).toBe(1);
        expect(caseIgnoreOrderingMatch(utf8("Z"), utf8(""))).toBe(-1);
    });
});
