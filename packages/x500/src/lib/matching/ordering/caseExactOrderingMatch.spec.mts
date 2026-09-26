import { DERElement, ASN1TagClass, ASN1Construction, ASN1UniversalType } from "@wildboar/asn1";
import caseExactOrderingMatch from "./caseExactOrderingMatch.mjs";

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
});
