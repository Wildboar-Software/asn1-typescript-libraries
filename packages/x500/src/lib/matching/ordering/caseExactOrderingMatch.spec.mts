import {
    ASN1CharactersError,
    DERElement,
    ASN1TagClass,
    ASN1Construction,
    ASN1UniversalType,
    ObjectIdentifier,
} from "@wildboar/asn1";
import {
    AttributeTypeAndValue,
} from "../../modules/InformationFramework/AttributeTypeAndValue.ta.mjs";
import {
    MATCH_FLAG_DEBUG,
    MATCH_FLAG_VALUE_NORMALIZED,
} from "../../types/matching.mjs";
import caseExactOrderingMatch, {
    caseExactOrderingMatchTyped,
} from "./caseExactOrderingMatch.mjs";
import caseIgnoreOrderingMatch, {
    caseIgnoreOrderingMatchTyped,
} from "./caseIgnoreOrderingMatch.mjs";

const type_ = ObjectIdentifier.fromParts([ 1, 1, 1, 1 ]);

function utf8 (s: string): DERElement {
    return new DERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.utf8String,
        s,
    );
}

function stored (s: string): AttributeTypeAndValue {
    return new AttributeTypeAndValue(type_, utf8(s));
}

describe("caseExactOrderingMatch", () => {
    it("uses Unicode code-point order, not localeCompare", () => {
        // U+005A 'Z' precedes U+0061 'a'
        expect(caseExactOrderingMatchTyped("Z", utf8("a"))).toBeLessThan(0);
        expect("Z".localeCompare("a")).toBeGreaterThan(0);
        expect(caseExactOrderingMatch(utf8("a"), stored("Z"))).toBe(true);
        expect(caseExactOrderingMatch(utf8("Z"), stored("a"))).toBe(false);
        expect(caseExactOrderingMatchTyped("a b", "a  b")).toBe(0);
        expect(caseExactOrderingMatchTyped(
            "a b",
            "a  b",
            undefined,
            MATCH_FLAG_VALUE_NORMALIZED,
        )).toBeGreaterThan(0);
    });

    it("throws when the assertion cannot be prepared", () => {
        expect(() => caseExactOrderingMatch(utf8("\uFFFD"), stored("Z")))
            .toThrow(ASN1CharactersError);
        expect(() => caseExactOrderingMatch(utf8(""), stored("Z")))
            .toThrow(ASN1CharactersError);
    });

    it("is UNDEFINED when the stored value cannot be prepared", () => {
        const spy = vi.spyOn(console, "error").mockImplementation(() => {});
        try {
            expect(caseExactOrderingMatchTyped("Z", utf8("\uFFFD"), undefined, MATCH_FLAG_DEBUG)).toBeUndefined();
            expect(spy).toHaveBeenCalledTimes(1);
            expect(String(spy.mock.calls[0][0])).toContain("caseExactOrderingMatch");
        } finally {
            spy.mockRestore();
        }
        expect(caseExactOrderingMatchTyped("Z", utf8(""))).toBeUndefined();
    });
});

describe("caseIgnoreOrderingMatch", () => {
    it("folds case before ordering", () => {
        expect(caseIgnoreOrderingMatchTyped("b", utf8("A"))).toBeGreaterThan(0);
        expect(caseIgnoreOrderingMatchTyped("a", "A")).toBe(0);
        expect(caseIgnoreOrderingMatchTyped(
            "a",
            "A",
            undefined,
            MATCH_FLAG_VALUE_NORMALIZED,
        )).toBeGreaterThan(0);
        expect(caseIgnoreOrderingMatch(utf8("b"), stored("A"))).toBe(true);
        // 'C' precedes 'b' in code-point order. TRUE means the
        // assertion was case-folded before comparison.
        expect(caseIgnoreOrderingMatch(utf8("C"), stored("b"))).toBe(true);
    });

    it("throws when the assertion cannot be prepared", () => {
        expect(() => caseIgnoreOrderingMatch(utf8("\uFFFD"), stored("Z")))
            .toThrow(ASN1CharactersError);
        expect(() => caseIgnoreOrderingMatch(utf8(""), stored("Z")))
            .toThrow(ASN1CharactersError);
    });

    it("is UNDEFINED when the stored value cannot be prepared", () => {
        const spy = vi.spyOn(console, "error").mockImplementation(() => {});
        try {
            expect(caseIgnoreOrderingMatchTyped("Z", utf8("\uFFFD"), undefined, MATCH_FLAG_DEBUG)).toBeUndefined();
            expect(spy).toHaveBeenCalledTimes(1);
            expect(String(spy.mock.calls[0][0])).toContain("caseIgnoreOrderingMatch");
        } finally {
            spy.mockRestore();
        }
        expect(caseIgnoreOrderingMatchTyped("Z", utf8(""))).toBeUndefined();
    });
});
