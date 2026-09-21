import { DERElement, ASN1TagClass, ASN1Construction, ASN1UniversalType } from "@wildboar/asn1";
import integerOrderingMatch from "./integerOrderingMatch.mjs";
import caseExactOrderingMatch from "./caseExactOrderingMatch.mjs";
import numericStringOrderingMatch from "./numericStringOrderingMatch.mjs";

function integer (n: number): DERElement {
    return new DERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.integer,
        n,
    );
}

function utf8 (s: string): DERElement {
    return new DERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.utf8String,
        s,
    );
}

function numeric (s: string): DERElement {
    return new DERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.numericString,
        s,
    );
}

describe("integerOrderingMatch", () => {
    it("returns a negative value when the assertion is less than the stored value", () => {
        // stored 5 >= presented 3  ⇒  greaterOrEqual uses orderer <= 0
        expect(integerOrderingMatch(integer(3), integer(5))).toBeLessThan(0);
        expect(integerOrderingMatch(integer(5), integer(3))).toBeGreaterThan(0);
        expect(integerOrderingMatch(integer(5), integer(5))).toBe(0);
    });
});

describe("caseExactOrderingMatch", () => {
    it("uses Unicode code-point order, not localeCompare", () => {
        // U+005A 'Z' precedes U+0061 'a'
        expect(caseExactOrderingMatch(utf8("Z"), utf8("a"))).toBeLessThan(0);
        expect("Z".localeCompare("a")).toBeGreaterThan(0);
    });
});

describe("numericStringOrderingMatch", () => {
    it("removes all spaces before comparing", () => {
        expect(numericStringOrderingMatch(numeric("1 2 3"), numeric("123"))).toBe(0);
    });
});
