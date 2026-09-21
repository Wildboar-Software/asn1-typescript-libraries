import { DERElement, ASN1TagClass, ASN1Construction, ASN1UniversalType } from "@wildboar/asn1";
import storedPrefixMatch from "./storedPrefixMatch.mjs";

function utf8 (s: string): DERElement {
    return new DERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.utf8String,
        s,
    );
}

describe("storedPrefixMatch", () => {
    it("treats the stored value as a prefix of the presented value", () => {
        expect(storedPrefixMatch(utf8("4155551212"), utf8("415"))).toBe(true);
        expect(storedPrefixMatch(utf8("415"), utf8("4155551212"))).toBe(false);
        expect(storedPrefixMatch(utf8("4155551212"), utf8("416"))).toBe(false);
    });

    it("ignores case", () => {
        expect(storedPrefixMatch(utf8("HELLO WORLD"), utf8("hello"))).toBe(true);
    });
});
