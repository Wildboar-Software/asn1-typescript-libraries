import { DERElement, ASN1TagClass, ASN1Construction, ASN1UniversalType } from "@wildboar/asn1";
import { DER } from "@wildboar/asn1/functional";
import caseIgnoreSubstringsMatch from "./caseIgnoreSubstringsMatch.mjs";
import { _encode_SubstringAssertion } from "../../modules/SelectedAttributeTypes/SubstringAssertion.ta.mjs";
import SubstringSelection from "../../types/SubstringSelection.mjs";

function utf8 (s: string): DERElement {
    return new DERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.utf8String,
        s,
    );
}

describe("caseIgnoreSubstringsMatch", () => {
    it("matches a single initial component via selection", () => {
        expect(caseIgnoreSubstringsMatch(utf8("Hell"), utf8("Hello World"), SubstringSelection.initial)).toBe(true);
        expect(caseIgnoreSubstringsMatch(utf8("World"), utf8("Hello World"), SubstringSelection.initial)).toBe(false);
    });

    it("ignores case", () => {
        expect(caseIgnoreSubstringsMatch(utf8("HELLO"), utf8("hello world"), SubstringSelection.initial)).toBe(true);
    });

    it("partitions initial/any/final without overlapping", () => {
        const assertion = _encode_SubstringAssertion([
            { initial: { uTF8String: "ab" } },
            { any_: { uTF8String: "bc" } },
        ], DER);
        expect(caseIgnoreSubstringsMatch(assertion, utf8("abc"))).toBe(false);
        const ok = _encode_SubstringAssertion([
            { initial: { uTF8String: "a" } },
            { any_: { uTF8String: "b" } },
            { final: { uTF8String: "c" } },
        ], DER);
        expect(caseIgnoreSubstringsMatch(ok, utf8("abc"))).toBe(true);
    });
});
