import { DERElement, ASN1TagClass, ASN1Construction, ASN1UniversalType } from "@wildboar/asn1";
import numericStringMatch from "./numericStringMatch.mjs";
import telephoneNumberMatch from "./telephoneNumberMatch.mjs";

function numeric (s: string): DERElement {
    return new DERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.numericString,
        s,
    );
}

function printable (s: string): DERElement {
    return new DERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.printableString,
        s,
    );
}

describe("numericStringMatch", () => {
    it("removes all spaces, not only the first run", () => {
        expect(numericStringMatch(numeric("1 2 3"), numeric("123"))).toBe(true);
        expect(numericStringMatch(numeric("12 3"), numeric("1 23"))).toBe(true);
        expect(numericStringMatch(numeric("123"), numeric("124"))).toBe(false);
    });
});

describe("telephoneNumberMatch", () => {
    it("ignores hyphens and spaces but keeps other characters", () => {
        expect(telephoneNumberMatch(
            printable("+1-415 555 1212"),
            printable("+14155551212"),
        )).toBe(true);
        expect(telephoneNumberMatch(
            printable("+1-415 555 1212"),
            printable("14155551212"),
        )).toBe(false);
    });
});
