import {
    DERElement,
    ASN1TagClass,
    ASN1Construction,
    ASN1UniversalType,
    ObjectIdentifier,
} from "@wildboar/asn1";
import {
    AttributeTypeAndValue,
} from "../../modules/InformationFramework/AttributeTypeAndValue.ta.mjs";
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
    });

    it("is UNDEFINED when preparation fails", () => {
        expect(caseExactOrderingMatchTyped("\uFFFD", utf8("Z"))).toBeUndefined();
        expect(caseExactOrderingMatchTyped("Z", utf8("\uFFFD"))).toBeUndefined();
        expect(caseExactOrderingMatchTyped("", utf8("Z"))).toBeUndefined();
        expect(caseExactOrderingMatchTyped("Z", utf8(""))).toBeUndefined();
    });
});

describe("caseIgnoreOrderingMatch", () => {
    it("folds case before ordering", () => {
        expect(caseIgnoreOrderingMatchTyped("b", utf8("A"))).toBeGreaterThan(0);
        expect(caseIgnoreOrderingMatchTyped("A", utf8("a"))).toBe(0);
        expect(caseIgnoreOrderingMatch(utf8("b"), stored("A"))).toBe(true);
    });

    it("is UNDEFINED when preparation fails", () => {
        expect(caseIgnoreOrderingMatchTyped("\uFFFD", utf8("Z"))).toBeUndefined();
        expect(caseIgnoreOrderingMatchTyped("Z", utf8("\uFFFD"))).toBeUndefined();
        expect(caseIgnoreOrderingMatchTyped("", utf8("Z"))).toBeUndefined();
        expect(caseIgnoreOrderingMatchTyped("Z", utf8(""))).toBeUndefined();
    });
});
