import { DERElement, ASN1TagClass, ASN1Construction, ASN1UniversalType } from "@wildboar/asn1";
import caseIgnoreMatch from "./caseIgnoreMatch.mjs";
import caseExactMatch from "./caseExactMatch.mjs";

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
